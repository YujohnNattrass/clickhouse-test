
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { weatherAgent } from './agents';
import { UpstashTransport } from '@mastra/loggers/upstash';
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
});

