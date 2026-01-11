import { BrowserCommand } from "vitest/node";

export const setOffline: BrowserCommand = async (ctx) => {
  // @ts-expect-error incorrect vitest types
  return ctx.provider.context.setOffline(true);
};
