import { Resonate } from "@resonatehq/sdk";

const resonate = new Resonate({
  url: "http://localhost:8001",
  group: "client",
});

try {
  const id = "sleep-workflow-2";
  const func = "sleepingWorkflow";
  const ms = 5000;
  const result = await resonate.rpc(
    id,
    func,
    ms,
    resonate.options({
      target: "poll://any@workers",
    })
  );
  console.log(result);
} catch (err) {
  console.error("Error:", err);
}

resonate.stop();
