/// <reference types="vitest-browser-react" />
/// <reference types="@vitest/browser/context" />
import "vitest";

declare module "vitest" {
  interface TaskMeta {
    id: string;
    type: "unit" | "intergration" | "e2e";
    severity: "low" | "medium" | "high" | "critical";
    isCostly: boolean;
  }
}

// Vite env variables
interface ViteTypeOptions {
  // By adding this line, you can make the type of ImportMetaEnv strict
  // to disallow unknown keys.
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly VITE_COSTLY: boolean;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
