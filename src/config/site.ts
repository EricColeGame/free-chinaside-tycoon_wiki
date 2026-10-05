export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Free ChinaSide Tycoon Wiki",
  shortName: "Free ChinaSide Tycoon",
  logoText: "F",
  tagline: "Codes, Shipping Guides, Factory Tips & Progression",
  description: "Your ultimate guide to Free ChinaSide Tycoon on Roblox! Explore working codes, shipping and factory guides, workers, crates, raids, upgrades, and progression strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://free-chinaside-tycoon.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://free-chinaside-tycoon.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/88793580588296/ChinaSide-Tycoon",
  heroVideoId: "cpS2Kag74IE", // ChinaSide Tycoon how-to-play guide & codes
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
