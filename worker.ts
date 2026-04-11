import { Resonate } from "@resonatehq/sdk";
import type { Context } from "@resonatehq/sdk";

const resonate = new Resonate({
  url: "http://localhost:8001",
  group: "workers",
});

function* sleepingWorkflow(ctx: Context, ms: number) {
  yield* ctx.run((ctx: Context) => console.log(`Sleeping for ${ms / 1000} seconds...`))
  yield* ctx.sleep(ms);
  return `Slept for ${ms / 1000} seconds`;
}

resonate.register("sleepingWorkflow", sleepingWorkflow);
