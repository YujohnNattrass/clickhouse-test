
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { weatherAgent } from './agents';
import { UpstashTransport } from '@mastra/loggers/upstash';
import { registerApiRoute } from "@mastra/core/server";
const transporter = new UpstashTransport({
  upstashUrl: process.env.UPSTASH_URL!,
  upstashToken: process.env.UPSTASH_TOKEN!,
})
const logger = createLogger({
  name: 'Mastra',
  level: 'info',
  transports: { transporter },
});

export const mastra = new Mastra({
  agents: { weatherAgent },
  logger,
  server: {
    middleware: [
      {
        path: "/api/*",
        handler: async (c, next) => {
          // const apiKey = c.req.header("Authorization");
          const isFromMastraCloud = c.req.header("x-mastra-cloud") === "true";

          if (!isFromMastraCloud) {
            return new Response("Unauthorized", { status: 401 });
          }

          // if (apiKey) {
          //   const runtimeContext = c.get("runtimeContext");
          //   runtimeContext.set("api-key", apiKey);
          // }

          await next();
        },
      },
    ],
  },
});

