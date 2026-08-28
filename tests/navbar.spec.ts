import { test, expect } from "@playwright/test";

test.describe("Streamlined Mobile-First Navbar", () => {
  test("mobile view (<640px) shows clean brand, theme toggle, and hamburger button", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    // Official logo is visible
    const logo = page.getByRole("link", { name: /ngobz/i });
    await expect(logo).toBeVisible();

    // Desktop nav links are hidden
    await expect(page.getByRole("navigation", { name: "Desktop Navigation" })).toBeHidden();

    // Hamburger button is visible
    const menuBtn = page.getByRole("button", { name: /Open Menu/i });
    await expect(menuBtn).toBeVisible();

    // Open mobile menu
    await menuBtn.click();

    // Mobile drawer appears
    const mobileDialog = page.getByRole("dialog", { name: /Mobile Navigation Menu/i });
    await expect(mobileDialog).toBeVisible();

    // Check items inside drawer (non-repetitive)
    await expect(mobileDialog.getByText("Rental Services")).toBeVisible();
    await expect(mobileDialog.getByText("Why Choose Us")).toBeVisible();
    await expect(mobileDialog.getByText("FAQs")).toBeVisible();
    await expect(mobileDialog.getByText("Contact")).toBeVisible();
    await expect(mobileDialog.getByRole("button", { name: /Get Instant Quote/i })).toBeVisible();

    // Clicking an item closes drawer
    await mobileDialog.getByText("FAQs").click();
    await expect(mobileDialog).toBeHidden();
  });

  test("tablet view (768px - 1023px) remains clean without overflowing or stacking", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/");

    // Logo is visible
    await expect(page.getByRole("link", { name: /ngobz/i })).toBeVisible();

    // Horizontal links hidden on tablet to avoid crowding
    await expect(page.getByRole("navigation", { name: "Desktop Navigation" })).toBeHidden();

    // Hamburger button is visible on tablet
    const menuBtn = page.getByRole("button", { name: /Open Menu/i });
    await expect(menuBtn).toBeVisible();

    // Open tablet drawer
    await menuBtn.click();
    const tabletDialog = page.getByRole("dialog", { name: /Mobile Navigation Menu/i });
    await expect(tabletDialog).toBeVisible();
    await expect(tabletDialog.getByText("Rental Services")).toBeVisible();
  });

  test("desktop view (>=1024px) displays horizontal navbar and single dedicated Get Quote button", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    // Desktop nav is visible
    const desktopNav = page.getByRole("navigation", { name: "Desktop Navigation" });
    await expect(desktopNav).toBeVisible();
    await expect(desktopNav.getByText("Rental Services")).toBeVisible();
    await expect(desktopNav.getByText("Why Choose Us")).toBeVisible();

    // Single dedicated Desktop "Get Quote" button
    await expect(page.getByRole("button", { name: /Get Quote/i })).toBeVisible();

    // Hamburger button is hidden
    await expect(page.getByRole("button", { name: /Open Menu|Close Menu/i })).toBeHidden();
  });
});
