import dotenv from 'dotenv';
dotenv.config();

import Client, { CommitmentLevel, SubscribeRequest } from '@triton-one/yellowstone-grpc';

const GRPC_URL = process.env.GRPC_URL || '';
const GRPC_TOKEN = process.env.GRPC_TOKEN || '';

async function monitorSlots() {
  console.log('Slot Monitor starting...');
  console.log('Connecting to Yellowstone gRPC:', GRPC_URL);

  if (!GRPC_URL) {
    console.error('ERROR: GRPC_URL is not set in .env');
    process.exit(1);
  }

  let endpoint = GRPC_URL;
  if (!endpoint.startsWith('http://') && !endpoint.startsWith('https://')) {
    endpoint = 'https://' + endpoint;
  }
  const client = new Client(endpoint, GRPC_TOKEN, {});

  const stream = await client.subscribe();

  const request: SubscribeRequest = {
    slots: {
      slots: {}
    },
    accounts: {},
    transactions: {},
    transactionsStatus: {},
    blocks: {},
    blocksMeta: {},
    entry: {},
    accountsDataSlice: [],
    commitment: CommitmentLevel.CONFIRMED,
  };

  stream.on('data', (data: any) => {
    if (data.slot) {
      const slot = data.slot.slot;
      const status = data.slot.status;
      console.log(`[SLOT] slot=${slot} status=${status} time=${new Date().toISOString()}`);
    }
  });

  stream.on('error', (err: any) => {
    console.error('[ERROR]', err.message);
  });

  stream.on('end', () => {
    console.log('[STREAM] ended');
  });

  await new Promise<void>((resolve, reject) => {
    stream.write(request, (err: any) => {
      if (err) reject(err);
      else resolve();
    });
  });

  console.log('Subscribed to slot stream. Watching...');
}

monitorSlots().catch(console.error);
