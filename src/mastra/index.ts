
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



export const mastra = new Mastra({
  agents: { weatherAgent },
  logger,
  // telemetry: {
  //   serviceName: 'clickhouse-test',
  //   enabled: true,
  //   sampling: {
  //     type: 'always_on'
  //   },
  //   export: {
  //     type: 'custom',
  //     exporter: new MastraCloudExporter({
  //       accessToken: process.env.MASTRA_CLOUD_ACCESS_TOKEN!,
  //     }),
  //   },
  // }
});
