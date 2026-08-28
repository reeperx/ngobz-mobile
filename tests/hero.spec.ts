import { test, expect } from "@playwright/test";

test.describe("Hero Section & Carousel", () => {
  test("renders hero headline, CTAs, and trust metrics properly on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    // Headline is visible and has no awkward broken layout
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("Hire Event Equipment With Ease.");
    await expect(heading).toContainText("Keep Food Fresh & Hot.");

    // CTAs are present and clickable
    const getQuoteBtn = page.getByRole("button", { name: "Get Instant Quote" });
    await expect(getQuoteBtn).toBeVisible();

    const whatsappBtn = page.getByRole("button", { name: /WhatsApp Wandile/i });
    await expect(whatsappBtn).toBeVisible();

    // Trust metrics
    await expect(page.getByText("350+")).toBeVisible();
    await expect(page.getByText("-2°C")).toBeVisible();

    // Carousel is visible
    const carousel = page.getByRole("region", { name: "NGOBZ Mobile Equipment Showcase" });
    await expect(carousel).toBeVisible();

    // Active slide contains equipment title
    await expect(page.getByText("Heavy-Duty Mobile Coolers & Cold Rooms")).toBeVisible();

    // Next slide button switches slide
    const nextBtn = page.getByRole("button", { name: "Next slide" });
    await nextBtn.click();
    await expect(page.getByText("Commercial Mobile Food Warmers")).toBeVisible();
  });

  test("renders cleanly on tablet (768px)", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/");

    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("Hire Event Equipment With Ease.");

    const carousel = page.getByRole("region", { name: "NGOBZ Mobile Equipment Showcase" });
    await expect(carousel).toBeVisible();
  });

  test("renders smoothly on mobile (<640px)", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();

    const getQuoteBtn = page.getByRole("button", { name: "Get Instant Quote" });
    await expect(getQuoteBtn).toBeVisible();

    const carousel = page.getByRole("region", { name: "NGOBZ Mobile Equipment Showcase" });
    await expect(carousel).toBeVisible();
  });
});
