import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addToFavorites = mutation({
  args: { id: v.id("products") },
  handler: async (ctx, args) => {
    const { id } = args;
    console.log(await ctx.db.get(id));
    await ctx.db.patch(id, { isFavorite: true });
    console.log(await ctx.db.get(id));
  },
});

export const removeFromFavorites = mutation({
  args: { id: v.id("products") },
  handler: async (ctx, args) => {
    const { id } = args;
    console.log(await ctx.db.get(id));
    await ctx.db.patch(id, { isFavorite: false });
    console.log(await ctx.db.get(id));
  },
});