
import { Mastra } from '@mastra/core/mastra';
import { createLogger, combineLoggers } from '@mastra/core/logger';
import { weatherAgent } from './agents';
import { UpstashTransport } from '@mastra/loggers/upstash';
import { LangfuseExporter } from 'langfuse-vercel';
const transporter = new UpstashTransport({
  upstashUrl: process.env.UPSTASH_URL!,
  upstashToken: process.env.UPSTASH_TOKEN!,
})
const logger = createLogger({
  name: 'Mastra',
  level: 'info',
  transports: { transporter },
});

console.log(`~~~~~~~~~~~~~~~`)
console.log(`WHAT THE HELL IS ${process.env.UPSTASH_URL} AND ${process.env.UPSTASH_TOKEN}`)
console.log(`~~~~~~~~~~~~~~~`)


export const mastra = new Mastra({
  agents: { weatherAgent },
  logger,
  telemetry: {
    serviceName: 'ai', // this must be set to "ai" so that the LangfuseExporter thinks it's an AI SDK trace
    enabled: true,
    export: {
      type: 'custom',
      exporter: new LangfuseExporter({
        publicKey: process.env.LANGFUSE_INIT_PROJECT_PUBLIC_KEY,
        secretKey: process.env.LANGFUSE_INIT_PROJECT_SECRET_KEY,
        baseUrl: 'http://localhost:3000', // Local Langfuse server from docker-compose
      }),
    },
  },
});

console.log(mastra.getLogger().transports)
