import { Resonate } from "@resonatehq/sdk";

const resonate = Resonate.remote({
  group: "client",
});

try {
  const id = "sleep-workflow-2";
  const func = "sleepingWorkflow";
  const dur = 5;
  const result = await resonate.rpc(
    id,
    func,
    dur,
    resonate.options({
      target: "poll://any@workers",
    })
  );
  console.log(result);
} catch (err) {
  console.error("Error:", err);
}

resonate.stop();
