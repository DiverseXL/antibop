# Demo Script (60–120s)

Goal: show you have working infra signals today + a clear agentic roadmap.

## 1) Intro (10s)
“Antibop is an agentic Solana transaction stack. The first milestone is real-time network visibility via Yellowstone gRPC.”

## 2) Endpoint validation (20–30s)
Run:
```bash
npm run test-infra
```
Call out the PASS lines (RPC slot, WS slot event, REST reachable, gRPC slot stream).

## 3) Live slot stream (20–40s)
Run:
```bash
npm run monitor
```
Let it print a few `[SLOT]` lines. Mention this is the foundation for leader-window detection and submission timing.

## 4) Roadmap + grant ask (10–20s)
- Show `grant-application.md` and the 4-week plan
- Close with: “I’m requesting [1 month Claude Pro/equivalent] to ship bundle submission, lifecycle tracking, and the agentic recovery loop.”
