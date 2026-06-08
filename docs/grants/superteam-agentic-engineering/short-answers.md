# Superteam Agentic Engineering Grant — Short Answers (Antibop)

Replace bracketed placeholders before submitting.

## 280 characters
Antibop is an agentic Solana transaction stack: real-time slot/leader monitoring (Yellowstone gRPC), Jito bundle submission with adaptive tips, lifecycle tracking, and automated failure forensics + recovery. Building it open-source for Solana builders.

## ~100 words
Antibop is an agentic transaction infrastructure stack for Solana. It watches live slots and leader windows via Yellowstone gRPC, then (planned) submits Jito bundles with adaptive, safety-capped tips. Every bundle is tracked from submission through processed/confirmed/finalized with millisecond timestamps, and failures are automatically classified with a recovery plan (retry, tip adjustment, or hold). The goal is to stop builders from “flying blind” on transaction reliability. I’m requesting [1 month Claude Pro or equivalent] to ship the next milestones quickly and document a reproducible runbook for adoption.

## ~200–250 words
Solana transaction reliability is hard because the failure modes are not obvious in real time: leader window timing, congestion, blockhash expiry, compute limits, leader skips, and tip competitiveness. Most builders either overpay, spam retries, or ship without observability.

Antibop is an agentic Solana transaction stack that combines infrastructure signals + a policy loop to make bundle submission reliable and explainable. It streams live slots (and upcoming leader signals) via Yellowstone gRPC, submits Jito bundles with adaptive tips bounded by hard safety caps, and tracks the full lifecycle from submission to processed/confirmed/finalized with millisecond precision. When something fails, Antibop classifies the failure mode and outputs a recovery plan (e.g., resubmit in the next leader window, adjust tip, switch endpoints, or hold).

This is “agentic” because it runs as an autonomous observe → decide → act loop: it continuously ingests network signals, proposes actions, enforces constraints (max tip, rate limits, MEV-aware holds), executes, and logs the reasoning so every decision is debuggable.

I’m requesting [1 month Claude Pro or equivalent] to accelerate TypeScript development + prompt iteration during a 4-week build sprint, culminating in a reproducible end-to-end demo and a runbook for other Solana builders.

## Budget line (copy/paste)
Requested support: [Claude Pro $20 for 1 month] (+ optional: [$XX API credits] for demo week).

## Links (copy/paste)
- Repo: https://github.com/DiverseXL/antibop
- Builder: [your name] — https://github.com/DiverseXL — X: [@handle]
