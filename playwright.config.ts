import { defineConfig } from '@playwright/test';

console.log('Playwright configuration is being loaded...');

export default defineConfig({
  testDir: 'src/tests',
  retries: 2,
  // Other configurations
});
