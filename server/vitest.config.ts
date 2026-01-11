import mainVitestConfig from "../vitest.config";
import { defineProject, mergeConfig } from "vitest/config";

export default mergeConfig(mainVitestConfig, defineProject({}));
