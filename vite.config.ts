import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";
import {
  configDefaults,
  coverageConfigDefaults,
  defineConfig,
} from "vitest/config";

const isTest = process.env.NODE_ENV === "test";

export default defineConfig({
  plugins: [
    !isTest &&
      remix({
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
        },
        ignoredRouteFiles: ["**/*.css"],
      }),
    tsconfigPaths(),
  ].filter(Boolean),
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTest.ts",
    exclude: [...configDefaults.exclude],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      //   TODO: prove exclude
      exclude: [
        ...coverageConfigDefaults.exclude,
        "**/tailwind.config.ts/**",
        "**/postcss.config.js/**",
        "node_modules",
        "dist",
        "build",
        "public",
        "coverage",
        "**/*.config.js",
        "**/*.config.ts",
        ".env",
        ".env.local",
        ".eslintrc.cjs",
        ".prettierrc",
        "README.md",
        "**/entry.client.tsx",
        "**/entry.server.tsx",
        "app/__test__",
        "app/__mock__",
      ],
      thresholds: {
        functions: 80,
        branches: 80,
        "**/index.ts": {
          statements: 0,
          functions: 0,
          branches: 0,
          lines: 0,
        },
      },
    },
    css: false,
  },
});
