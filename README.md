# Purpose

To demonstrate approach for using multiple (two) subsets of Privy users managed by separate `appId`s

# Setup

## Define configuration for `PrivyProvider`

Create file `.env` in the project root by copying from `.env.sample` and set values of corresponding env variables that match two independent Privy apps.

## Create aliased domain

To isolate multiple instances of `PrivyProvider` we need to make sure they run under separate domains. For this purpose we create an alias for the default dev domain `http://localhost:5173` by utilizing `ngrok` [CLI](https://ngrok.com/downloads):
```
ngrok http http://localhost:5173
```
Notice the hostname from the output, e.g. `000d-135-134-176-86.ngrok-free.app` and use it:
1. To whitelist (add as an "allowed origin") that domain on the Privy Dashboard for the Buyer `appId` under `App settings` > `Clients` > `Local` (create client `Local` if needed)
1. To define the value of the variable `VITE_BUYER_IFRAME_HOSTNAME` in the `.env` file

# Run

Keep `ngrok` running and use `pnpm` or any other package manager, e.g. `npm`, `yarn` to start the dev server:
```bash
pnpm i
pnpm dev
```

