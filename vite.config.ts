import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

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
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules",
        "dist",
        "build",
        "public",
        "coverage",
        "**/*.config.js",
        "**/*.config.ts",
        "**/*.d.ts",
        ".env",
        ".env.local",
        ".eslintrc.js",
        ".prettierrc.js",
        "README.md",
        ".eslintrc.cjs",
        "entry.client.tsx",
        "entry.server.tsx",
      ],
    },
  },
});
