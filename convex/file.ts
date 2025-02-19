import { query } from "./_generated/server";
import { v } from "convex/values";

export const getFileUrl = query({
	args: { storageId: v.id("_storage") },
	handler: async (ctx, args) => {
		return await ctx.storage.getUrl(args.storageId);
	}
});

export const getProductImages = query({
	args: { productId: v.id("products") },
	handler: async (ctx, args) => {
		const product = await ctx.db.get(args.productId);

		if (!product || !product.images) {
			return [];
		}

		const imageUrls = await Promise.all(
			product.images.map(async (storageId) => {
				return await ctx.storage.getUrl(storageId);
			})
		);

		return imageUrls;
	}
});
