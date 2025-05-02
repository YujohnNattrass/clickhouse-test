
import { Mastra } from '@mastra/core/mastra';
import { weatherAgent } from './agents';
import { weatherWorkflow } from './workflow';

export const mastra = new Mastra({
  agents: { weatherAgent },
  workflows: { weatherWorkflow },
});
