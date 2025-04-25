
import { Mastra } from '@mastra/core/mastra';
import { weatherAgent } from './agents';
import { MastraCloudExporter } from '@mastra/cloud';
import { VercelDeployer } from '@mastra/deployer-vercel';

export const mastra = new Mastra({
  agents: { weatherAgent },
  telemetry: {
    serviceName: 'from-vercel',
    export: {
      type: 'custom',
      exporter: new MastraCloudExporter({
        accessToken: process.env.MASTRA_CLOUD_ACCESS_TOKEN as string,
        endpoint: process.env.MASTRA_CLOUD_ENDPOINT as string
      })
    }
  },
  deployer: new VercelDeployer({
    teamSlug: 'yujohnnattrass',
    projectName: 'clickhouse-test',
    token: process.env.V_TOKEN as string
  })
});
