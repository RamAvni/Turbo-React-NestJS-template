import mainVitestConfig from "../../vitest.config";
import { defineProject, mergeConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import * as commands from "./src/functions/vitest-helper-functions";

export default mergeConfig(
  mainVitestConfig,
  defineProject({
    plugins: [react()],
    test: {
      browser: {
        enabled: true,
        provider: playwright(),
        instances: [
          { browser: "chromium", headless: true },
          { browser: "firefox" },
        ],
        commands,
      },
    },
  }),
);
