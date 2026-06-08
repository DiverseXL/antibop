import dotenv from 'dotenv';
dotenv.config();

import { Connection } from '@solana/web3.js';

async function testInfrastructure() {
  console.log('Testing SolInfra endpoints...');
  console.log('');

  // Test 1 - RPC
  console.log('[TEST 1] RPC Connection');
  console.log('URL:', process.env.RPC_URL);
  try {
    const connection = new Connection(process.env.RPC_URL!, 'confirmed');
    const slot = await connection.getSlot();
    const blockTime = await connection.getBlockTime(slot);
    const version = await connection.getVersion();
    console.log('[PASS] RPC is live');
    console.log('  Current slot:', slot);
    console.log('  Block time:', new Date((blockTime! * 1000)).toISOString());
    console.log('  Solana version:', version['solana-core']);
  } catch (err: any) {
    console.log('[FAIL] RPC connection failed:', err.message);
  }

  console.log('');

  // Test 2 - WebSocket
  console.log('[TEST 2] WebSocket Connection');
  console.log('URL:', process.env.WS_URL);
  try {
    const connection = new Connection(process.env.RPC_URL!, {
      wsEndpoint: process.env.WS_URL!,
      commitment: 'confirmed'
    });

    await new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('WebSocket timeout after 5s')), 5000);
      
      let subscriptionId: number;
      subscriptionId = connection.onSlotChange((slotInfo) => {
        console.log('[PASS] WebSocket is live');
        console.log('  Slot received:', slotInfo.slot);
        console.log('  Parent slot:', slotInfo.parent);
        clearTimeout(timeout);
        connection.removeSlotChangeListener(subscriptionId);
        resolve();
      });
    });
  } catch (err: any) {
    console.log('[FAIL] WebSocket connection failed:', err.message);
  }

  console.log('');

  // Test 3 - REST API
  console.log('[TEST 3] REST API');
  console.log('URL:', process.env.REST_API_URL);
  try {
    const url = `${process.env.REST_API_URL}/v1/balances/So11111111111111111111111111111111111111112?api_key=${process.env.REST_API_KEY}`;
    const res = await fetch(url);
    if (res.ok || res.status === 404) {
      console.log('[PASS] REST API is reachable');
      console.log('  Status:', res.status);
    } else {
      console.log('[WARN] REST API returned:', res.status, res.statusText);
    }
  } catch (err: any) {
    console.log('[FAIL] REST API failed:', err.message);
  }
  // Test 4 - gRPC (Yellowstone)
  console.log('[TEST 4] gRPC Yellowstone Connection');
  console.log('URL:', process.env.GRPC_URL);
  try {
    const Client = require('@triton-one/yellowstone-grpc').default;
    let endpoint = process.env.GRPC_URL!;
    if (!endpoint.startsWith('http://') && !endpoint.startsWith('https://')) {
      endpoint = 'https://' + endpoint;
    }
    const client = new Client(
      endpoint,
      process.env.GRPC_TOKEN!,
      undefined
    );
    const stream = await client.subscribe();
    
    await new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('gRPC timeout after 8s')), 8000);
      
      stream.on('data', (data: any) => {
        if (data.slot) {
          console.log('[PASS] gRPC Yellowstone is live');
          console.log('  Slot received:', data.slot.slot);
          console.log('  Status:', data.slot.status);
          clearTimeout(timeout);
          stream.cancel();
          resolve();
        }
      });

      stream.on('error', (err: any) => {
        clearTimeout(timeout);
        reject(err);
      });

      stream.write({
        slots: { slots: {} },
        accounts: {},
        transactions: {},
        transactionsStatus: {},
        blocks: {},
        blocksMeta: {},
        entry: {},
        accountsDataSlice: [],
        commitment: 1,
      }, (err: any) => {
        if (err) reject(err);
      });
    });
  } catch (err: any) {
    console.log('[FAIL] gRPC connection failed:', err.message);
  }

  console.log('');
  console.log('Infrastructure test complete.');
}

testInfrastructure().catch(console.error);