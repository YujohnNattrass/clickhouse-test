
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { weatherAgent } from './agents';
import { DefaultStorage } from '@mastra/core/storage/libsql';
// import { registerApiRoute } from "@mastra/core/server";

// async function initMastra() {
//   const { UpstashTransport } = await import('@mastra/loggers/upstash');
//   const transporter = new UpstashTransport({
//     upstashUrl: process.env.UPSTASH_URL!,
//     upstashToken: process.env.UPSTASH_TOKEN!,
//   })
  
//   const logger = createLogger({
//     name: 'Mastra',
//     level: 'info',
//     transports: { transporter },
//   });
// }
const storage = new DefaultStorage({
  config: {
    url: process.env.LIBSQL_URL!,
    authToken: process.env.LIBSQL_TOKEN!,
  },
});

export const mastra = new Mastra({
  agents: { weatherAgent },
  storage,
});
// const mastra = await initMastra();
// export { mastra };

