import { Workflow, Step } from "@mastra/core";
import { z } from "zod";

// Simple step that simulates fetching documentation (replace with actual docs tool integration if available)
const fetchDocsStep = new Step({
  id: "fetch-docs",
  inputSchema: z.object({
    query: z.string().describe("Query to search for documentation")
  }),
  outputSchema: undefined, // No strict output schema for this example
  execute: async ({ context }) => {
    // Simulate fetching documentation (replace with actual docs tool call)
    const docContent = `# Mastra Workflows\nThis is a sample doc section fetched by the trigger query: ${context.triggerData.query}.`;
    return { docContent };
  },
});

// Define the workflow
export const docsWorkflow = new Workflow({
  name: "docsWorkflow",
  triggerSchema: z.object({
    query: z.string().describe("Query to search for documentation")
  })
});

docsWorkflow.step(fetchDocsStep).commit();
