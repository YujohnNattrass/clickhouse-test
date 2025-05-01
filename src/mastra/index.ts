
import { Mastra } from '@mastra/core/mastra';
import { weatherAgent } from './agents';
import { docsWorkflow } from './workflow';
import { MastraCloudExporter } from '@mastra/cloud';

export const mastra = new Mastra({
  agents: { weatherAgent },
  workflows: { docsWorkflow },
  telemetry: {
    serviceName: 'ClickHouse-Test',
    enabled: true,
    export: {
      type: 'custom',
      exporter: new MastraCloudExporter({
        accessToken: process.env.MASTRA_CLOUD_ACCESS_TOKEN,
        endpoint: process.env.MASTRA_CLOUD_ENDPOINT
      }),
    }
  }
});
