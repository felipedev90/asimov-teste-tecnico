import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------
test.describe("Header", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test("exibe o logo Positivus", async ({ page }) => {
    const logo = page.getByAltText("Positivus").first();
    await expect(logo).toBeVisible();
  });

  test("exibe os 5 links de navegação", async ({ page }) => {
    const navLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

    for (const label of navLinks) {
      // O desktop nav é renderizado em hidden md:flex — buscamos pelo texto
      await expect(
        page.getByRole("link", { name: label }).first()
      ).toBeVisible();
    }
  });

  test('exibe o botão "Request a quote"', async ({ page }) => {
    await expect(
      page.getByRole("button", { name: "Request a quote" }).first()
    ).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
test.describe("Hero", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test("exibe o heading principal", async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        name: "Navigating the digital landscape for success",
        level: 1,
      })
    ).toBeVisible();
  });

  test('exibe o botão "Book a consultation"', async ({ page }) => {
    await expect(
      page.getByRole("button", { name: "Book a consultation" })
    ).toBeVisible();
  });

  test("exibe a ilustração do megafone", async ({ page }) => {
    await expect(
      page.getByAltText(
        "Ilustração de megafone com elementos decorativos representando marketing digital"
      )
    ).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Clients
// ---------------------------------------------------------------------------
test.describe("Clients", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  const clientNames = [
    "Amazon",
    "Dribbble",
    "HubSpot",
    "Notion",
    "Netflix",
    "Zoom",
  ];

  for (const name of clientNames) {
    test(`exibe o logo de ${name}`, async ({ page }) => {
      await expect(page.getByAltText(`Logo ${name}`)).toBeVisible();
    });
  }
});

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------
test.describe("Services", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('exibe o heading "Services"', async ({ page }) => {
    // SectionLabel renderiza um <span>; buscamos pelo texto dentro da seção
    const section = page.locator("#services");
    await expect(section.getByText("Services", { exact: true }).first()).toBeVisible();
  });

  test("renderiza 6 cards de serviço", async ({ page }) => {
    const cards = page.locator("#services article");
    await expect(cards).toHaveCount(6);
  });

  test('cada card exibe o link "Learn more"', async ({ page }) => {
    const learnMoreLinks = page
      .locator("#services article")
      .getByRole("link", { name: /learn more/i });

    await expect(learnMoreLinks).toHaveCount(6);

    for (const link of await learnMoreLinks.all()) {
      await expect(link).toBeVisible();
    }
  });
});

// ---------------------------------------------------------------------------
// CTA
// ---------------------------------------------------------------------------
test.describe("CTA", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('exibe o heading "Let\'s make things happen"', async ({ page }) => {
    await expect(
      page.getByRole("heading", {
        name: "Let's make things happen",
        level: 2,
      })
    ).toBeVisible();
  });

  test('exibe o botão "Get your free proposal"', async ({ page }) => {
    await expect(
      page.getByRole("button", { name: "Get your free proposal" })
    ).toBeVisible();
  });
});

// ---------------------------------------------------------------------------
// Case Studies
// ---------------------------------------------------------------------------
test.describe("Case Studies", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('exibe o heading "Case Studies"', async ({ page }) => {
    const section = page.locator("#use-cases");
    await expect(
      section.getByText("Case Studies", { exact: true }).first()
    ).toBeVisible();
  });

  test('exibe 3 links "Learn more" dentro do card escuro', async ({ page }) => {
    const darkCard = page.locator("#use-cases .bg-dark");
    const learnMoreLinks = darkCard.getByRole("link", { name: /learn more/i });

    await expect(learnMoreLinks).toHaveCount(3);

    for (const link of await learnMoreLinks.all()) {
      await expect(link).toBeVisible();
    }
  });
});

// ---------------------------------------------------------------------------
// Mobile — hamburger menu
// ---------------------------------------------------------------------------
test.describe("Mobile — hamburger menu", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test("botão de menu (hamburger) está visível", async ({ page }) => {
    const hamburger = page.getByRole("button", { name: "Abrir menu" });
    await expect(hamburger).toBeVisible();
  });

  test("ao clicar no hamburger, os 5 links de nav ficam visíveis", async ({
    page,
  }) => {
    const hamburger = page.getByRole("button", { name: "Abrir menu" });
    await hamburger.click();

    const navLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

    for (const label of navLinks) {
      await expect(
        page.getByRole("navigation").getByRole("link", { name: label })
      ).toBeVisible();
    }
  });

  test("ao clicar em um link do menu, o menu fecha", async ({ page }) => {
    const hamburger = page.getByRole("button", { name: "Abrir menu" });
    await hamburger.click();

    // Clica no primeiro link do menu mobile
    const nav = page.getByRole("navigation");
    await nav.getByRole("link", { name: "About us" }).click();

    // O menu (nav overlay) deve desaparecer
    await expect(nav).not.toBeVisible();
  });
});
