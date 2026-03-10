/* eslint-disable import/no-extraneous-dependencies */
import { config } from 'dotenv';
config({ path: '.env.local', override: true });
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: env('POSTGRES_PRISMA_URL'),
  },
  migrations: {
    seed: 'ts-node --compiler-options {"module":"CommonJS"} prisma/seed.ts',
  },
});