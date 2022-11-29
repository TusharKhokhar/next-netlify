import { schedule } from "@netlify/functions";

export const handler = schedule("*/10 * * * * *", async (event: any) => {
  console.log("this is log....");
  return {
    statusCode: 200,
    body: "Success...!",
  };
});
