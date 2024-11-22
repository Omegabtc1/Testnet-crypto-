# testnet-crypto
# STX City Sniping Bot

## Overview

The **STX City Sniping Bot** is an automated trading bot designed for the Stacks blockchain. The bot tracks token deployments on the Stx.city bonding curve and executes trades based on predefined criteria. It ensures quick token purchases and sales, maximizing profit opportunities while maintaining safety checks.

### Features
- Automatically monitors the Stx.city API for newly deployed tokens.
- Buys tokens immediately when the **dev holds at least 1%** of the token supply.
- Sells tokens at **2× profit**.
- Buys tokens again if:
  - The token has social links.
  - The dev has not sold any tokens within 10 minutes.
  - Re-sells at **2× profit**.
- Integrates the **Hiro API** for transactions.
- Fetches bonding data from **Stx.city API**.
- Uses robust logic for social signal detection and price tracking.

---

## Installation

### Prerequisites
- Node.js (v16 or later)
- npm (Node Package Manager)

### Clone the Repository
```bash
git clone https://github.com/your-username/stx-city-snipe-bot.git
cd stx-city-snipe-bot
