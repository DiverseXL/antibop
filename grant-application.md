# Antibop — Superteam Agentic Engineering Grant Application

## One-line description
Antibop is an agentic Solana transaction stack that monitors leader windows in real time, submits Jito bundles with adaptive tips, and automatically diagnoses + recovers from failures.

## Problem
Solana transactions fail for reasons most builders cannot see or act on in real time: leader window timing, competitive fee/tip markets, blockhash expiry, compute limits, leader skips, and congestion. Today, devs either overpay, spam retries, or ship without observability.

## Solution (what I’m building)
Antibop combines infrastructure signals + agentic policy to make bundle submission reliable and explainable:

- **Live monitoring** — slot + leader-window signals via Yellowstone gRPC (SolInfra)
- **Bundle engine** — Jito bundle construction + submission with safety caps (no runaway tips)
- **Lifecycle tracking** — submitted → processed → confirmed → finalized timestamps and latency deltas
- **Failure forensics** — classify common failure modes and generate a recovery plan (retry strategy, tip adjustment, or hold)
- **Auditability** — every action is logged with the “why” so decisions are debuggable

## Why it’s “agentic”
Antibop is designed around an autonomous policy loop:

- Observe: network signals (slot velocity, skip rate, landing outcomes)
- Decide: tip level, submit/hold, and retry plan
- Act: submit bundle / resubmit / switch endpoints (bounded by hard constraints)
- Learn: update policy based on outcomes (with all reasoning logged)

## Current status (as of June 8, 2026)
- Infra test suite for Solana RPC, WebSocket, REST, and Yellowstone gRPC (`src/test-infra.ts`)
- Slot stream monitor printing confirmed slots from Yellowstone gRPC (`src/monitor/slotMonitor.ts`)
- Repo published with setup + runnable scripts

## Grant request (what the grant covers)
I’m requesting coverage for 1 month of an AI engineering tool subscription used during the build sprint:

- Primary: Claude Pro (or equivalent)
- Optional: small API credit buffer for agent runs during demo week

## 4-week build plan
- **Week 1** — slot monitor, leader-window detection, structured logs
- **Week 2** — Jito bundle engine + circuit breaker + landing/lifecycle tracking
- **Week 3** — agentic policy loop + failure classification + automated recovery strategies
- **Week 4** — minimal dashboard, docs, demo runbook, and a reproducible end-to-end showcase

## Success criteria (how reviewers can judge it)
- End-to-end demo: monitor → submit → track commitments → explain outcome
- Documented failure modes with reproducible recovery behavior
- Clear logs and a “runbook” so other builders can adopt the stack

## Proof of work (builder)
**Builder:** DiverseXL (solo)

**GitHub:** https://github.com/DiverseXL

**Previously shipped (selected):**
- SuiCopilot — autonomous trading agent on Sui/Walrus (https://suicopilot.vercel.app)
- SynapseResearchAgent — autonomous Solana research agent w/ Telegram delivery
- SolSentinel — AI-powered Solana token intelligence Telegram bot (Railway)
- TradeGenome — wallet behavior reverse-engineering tool (Railway + Vercel)
- AlphaSight — smart-money risk agent w/ React dashboard
- Degen Receipt — Solana token roaster (https://degen-receipt.vercel.app)

## Repository
https://github.com/DiverseXL/antibop
