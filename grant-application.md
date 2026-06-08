# Antibop — Agentic Engineering Grant Application

**Superteam Nigeria — Ideas → Prompt → Prod Grant**

---

## One Line Description

Antibop — AI-powered Solana stack: Jito bundles, live lifecycle tracking, and a four-agent GPT-4o system for autonomous tip decisions.

---

## Problem Statement

Solana transaction infrastructure is complex and unforgiving. Most developers submit transactions blindly with no visibility into leader windows, tip competitiveness, or why their transactions fail. There is no tooling that combines real-time network monitoring, intelligent bundle submission, and autonomous failure recovery in one system.

---

## Solution

Antibop is a production-grade transaction stack that:

- Monitors live Solana slots via Yellowstone gRPC (SolInfra)
- Submits Jito bundles with dynamically calculated tips
- Tracks every transaction through processed → confirmed → finalized with millisecond precision
- Uses a four-agent GPT-4o Mini system to autonomously decide tip amounts, reason through failures, and recover without human intervention
- Displays everything on a live React dashboard with a flight recorder UI

Every decision the AI makes is logged and explainable. Any Solana developer can plug Antibop into their stack and immediately gain infrastructure-level intelligence over their transactions.

---

## How I Use AI Tools

This entire project is being built using Claude as the primary coding assistant — architecture design, TypeScript module development, React dashboard, multi-agent prompt engineering, and debugging across the entire stack. The grant covers one month of Claude Pro access during the active build window.

---

## Architecture

Four-layer system:

1. **Slot Monitor** — Yellowstone gRPC via SolInfra, live slot streaming and leader detection
2. **Bundle Engine** — Jito bundle construction, circuit breaker safety layer, MEV-aware tip logic
3. **Four-Agent AI System** — Network Analyst, Tip Strategist, Failure Forensics, Master Orchestrator with session memory
4. **React Dashboard** — Flight recorder UI, real-time agent reasoning panel, fault injection controls

---

## AI Agent Design

- **Network Analyst** — runs continuously, updates shared policy state every 10 slots
- **Tip Strategist** — reads live Jito tip percentiles + network state, decides tip amount with full reasoning chain
- **Failure Forensics** — root cause analysis on every failure, produces autonomous recovery plan
- **Master Orchestrator** — session memory, agent disagreement handling, confidence-gated submission

The async policy engine ensures AI decisions never block the critical submission path — Solana blocks are 400ms, LLM calls can take 500ms-2s. The tip decision is pre-calculated in the background and read from memory at submission time.

---

## Safety Features

- **Circuit Breaker** — hardcoded MAX_TIP_LAMPORTS cap that overrides AI suggestions
- **MEV-aware holding** — agent holds submission if tip would exceed expected transaction value
- **Multi-RPC failover** — automatic switch to backup endpoint if primary stream degrades

---

## Proof of Work

**GitHub:** github.com/DiverseXL

**Shipped projects:**

- SuiCopilot — autonomous trading agent on Sui/Walrus (suicopilot.vercel.app)
- SynapseResearchAgent — autonomous Solana research agent with Telegram delivery
- SolSentinel — AI-powered Solana token intelligence Telegram bot (Railway)
- TradeGenome — wallet behavior reverse-engineering tool (Railway + Vercel)
- AlphaSight — autonomous smart-money risk agent with React dashboard
- Degen Receipt — Solana token roaster (degen-receipt.vercel.app)

---

## Timeline

- **Week 1** — Infrastructure + async policy engine + slot monitor
- **Week 2** — Jito bundle engine + lifecycle tracker + 10 real bundle submissions
- **Week 3** — Four-agent system + React dashboard + flight recorder UI
- **Week 4** — Architecture document + README + submission

**Deadline:** July 13, 2026

---

## Repository

github.com/DiverseXL/antibop

**Builder:** DiverseXL — solo submission
