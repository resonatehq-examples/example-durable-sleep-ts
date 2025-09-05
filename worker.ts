import { Resonate } from "@resonatehq/sdk";
import type { Context } from "@resonatehq/sdk";

const resonate = Resonate.remote({
  group: "workers",
});

function* sleepingWorkflow(ctx: Context, duration: number) {
  console.log(`Sleeping for ${duration} seconds...`);
  yield ctx.sleep(duration * 1000);
  return `Slept for ${duration} seconds`;
}

resonate.register("sleepingWorkflow", sleepingWorkflow);
