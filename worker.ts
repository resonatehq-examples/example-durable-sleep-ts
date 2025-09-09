import { Resonate } from "@resonatehq/sdk";
import type { Context } from "@resonatehq/sdk";

const resonate = Resonate.remote({
  group: "workers",
});

function* sleepingWorkflow(ctx: Context, ms: number) {
  console.log(`Sleeping for ${ms / 1000} seconds...`);
  yield ctx.sleep(ms);
  return `Slept for ${ms / 1000} seconds`;
}

resonate.register("sleepingWorkflow", sleepingWorkflow);
