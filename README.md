![durable sleep banner](/assets/durable-sleep-readme-banner.png)

# Durable sleep

**Resonate TypeScript SDK**

This example application showcases the Context.sleep() API that enables a function to reliably sleep for days, weeks, or even years if needed.

## Problem

A business process may need to sleep for a period of time that is much longer than the expected lifetime of a process.

In other words, a process is likely to crash the longer it is alive, and if a business process needs to suspend—or "sleep"—for days, weeks, or even years, developers are often forced to use cron jobs as a means to reawaken long sleeping processes.

This leads to complexity that is difficult to reason about, test, and trust.

## Solution

Resonate enables developers to handle that sleep directly in their workflows, reducing the complexity of the implementation while also knowing that it can survive process crashes.

## How to run this example

Run a Resonate Server:

```
brew install resonatehq/tap/resonate
resonate serve
```

If you don't have brew, try one of these other installation options: [https://docs.resonatehq.io/operate/server-installation](https://docs.resonatehq.io/operate/server-installation)

Install dependencies:

```shell
bun install
```

Run the worker

```shell
bun run worker.ts
```

Run the client

```shell
bun run client.ts
```
