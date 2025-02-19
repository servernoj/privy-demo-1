## Purpose

To demonstrate the problem of having multiple `PrivyProvider`s, instantiated into the same React SPA.

## The observed [incorrect] behavior 

There are 3 pages `/` (home), `/seller` (seller) and `/buyer` (buyer). The home shows links to the other two. 

The `/seller` renders `<h2>` tag with `Seller` as content. It is instantiated inside the `PrivyProvider` configured for "Seller App" in Privy but does not utilize `usePrivy` or `useLogin` hooks.

The `/buyer` renders login prompt for non-authenticated users, but instead of rendering it for the "Buyer App" (based on in which `PrivyProvider` it is instantiated) it renders in the context of the "Seller App".

## Setup

Create file `.env` in the project root by copying from `.env.sample` and define values of corresponding env variables that match two independent Privy apps.

## Run

Use `pnpm` or any other package manager, e.g. `npm`, `yarn`, ...
```bash
pnpm i
pnpm dev
```

