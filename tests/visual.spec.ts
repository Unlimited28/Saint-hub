
import { test, expect } from '@playwright/test';

const pages = [
  { name: 'home', path: '/' },
  { name: 'gadgets', path: '/gadgets' },
  { name: 'collections', path: '/collections' },
  { name: 'education', path: '/education' },
  { name: 'perfumery', path: '/perfumery' },
  { name: 'trading', path: '/trading' },
  { name: 'cars', path: '/cars' },
];

for (const page of pages) {
  test(`screenshot ${page.name} - desktop`, async ({ page: playwrightPage }) => {
    await playwrightPage.setViewportSize({ width: 1280, height: 800 });
    await playwrightPage.goto(`http://localhost:3000${page.path}`);
    await playwrightPage.waitForTimeout(2000); // Wait for animations
    await playwrightPage.screenshot({ path: `verification/${page.name}_desktop.png`, fullPage: true });
  });

  test(`screenshot ${page.name} - mobile`, async ({ page: playwrightPage }) => {
    await playwrightPage.setViewportSize({ width: 375, height: 667 });
    await playwrightPage.goto(`http://localhost:3000${page.path}`);
    await playwrightPage.waitForTimeout(2000); // Wait for animations
    await playwrightPage.screenshot({ path: `verification/${page.name}_mobile.png`, fullPage: true });
  });
}
