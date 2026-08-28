import { test, expect } from "@playwright/test";

test("has NGOBZ Mobile title and main heading", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/NGOBZ Mobile/i);
  await expect(
    page.getByRole("heading", { name: /Mobile Coolers, Warmers & VIP Mobile Toilets/i })
  ).toBeVisible();
});

test("displays core services including VIP toilets", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("VIP & Standard Mobile Toilets")).toBeVisible();
  await expect(page.getByText("Heavy-Duty Mobile Coolers & Cold Rooms")).toBeVisible();
  await expect(page.getByText("Mobile Food Warmers & VIP Warmers")).toBeVisible();
});

test("shows instant quote builder with WhatsApp action", async ({ page }) => {
  await page.goto("/");
  const submitBtn = page.getByRole("button", { name: /Send Booking Request via WhatsApp/i });
  await expect(submitBtn).toBeVisible();
});
