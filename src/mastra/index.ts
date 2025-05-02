
import { Mastra } from '@mastra/core/mastra';
import { weatherAgent } from './agents';
import { weatherWorkflow } from './workflow';
import { MastraCloudExporter } from '@mastra/cloud';

export const mastra = new Mastra({
  agents: { weatherAgent },
  workflows: { weatherWorkflow },
});
