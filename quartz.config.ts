import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "科技变革模式图谱",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "zh-CN",
    baseUrl: "tech-revolutions.pages.dev",
    ignorePatterns: ["private", "templates", "模板", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Sans SC",
        body: "Noto Sans SC",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fafaf9",
          lightgray: "#e7e5e4",
          gray: "#a8a29e",
          darkgray: "#44403c",
          dark: "#1c1917",
          secondary: "#b45309",
          tertiary: "#d97706",
          highlight: "rgba(180, 83, 9, 0.08)",
          textHighlight: "#fef08a88",
        },
        darkMode: {
          light: "#1c1917",
          lightgray: "#292524",
          gray: "#78716c",
          darkgray: "#d6d3d1",
          dark: "#fafaf9",
          secondary: "#f59e0b",
          tertiary: "#d97706",
          highlight: "rgba(245, 158, 11, 0.1)",
          textHighlight: "#854d0e88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages disabled - requires extra deps and slows build
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
