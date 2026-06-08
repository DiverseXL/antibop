# Antibop

Agentic Solana transaction infrastructure (in progress).

Antibop monitors live Solana slots via Yellowstone gRPC and will evolve into a full transaction submission stack: leader-window awareness, Jito bundles with adaptive tips, lifecycle tracking, and automated failure recovery.

## Status (June 8, 2026)

**Implemented**
- Infrastructure connectivity test (RPC / WebSocket / REST / Yellowstone gRPC): `npm run test-infra`
- Slot monitor (Yellowstone gRPC): `npm run monitor`

**Planned (grant milestones)**
- Leader-window detection + structured logs
- Jito bundle engine + circuit breaker safety caps
- Agentic policy loop (tip decisions + failure forensics + recovery)
- Minimal dashboard and runbook

## Why
Solana transactions fail for reasons most builders can’t see or act on in real time: leader timing, congestion, blockhash expiry, compute limits, and tip competitiveness. Antibop aims to make submission reliable and explainable.

## Setup

### Prerequisites
- Node.js 18+
- SolInfra endpoints + keys (RPC / WS / REST / gRPC)

### Install
```bash
npm install
cp .env.example .env
```

Fill `.env` with your credentials.

## Run
```bash
# Validate endpoints (uses your .env credentials)
npm run test-infra

# Start slot monitor (Yellowstone gRPC)
npm run monitor

# Current dev entrypoint (prints module status)
npm run dev
```

If `npm` is blocked in PowerShell due to execution policy, use `npm.cmd` (e.g. `npm.cmd run dev`).

## Project structure
- `src/test-infra.ts` — endpoint health checks (RPC / WS / REST / gRPC)
- `src/monitor/slotMonitor.ts` — Yellowstone slot stream
- `src/index.ts` — roadmap banner / entrypoint

## Builder
DiverseXL — solo

- GitHub: https://github.com/DiverseXL
- X: @theyclonedsam
