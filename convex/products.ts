import { query } from "./_generated/server";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";

export const getProductById = query({
	args: {
		productId: v.id("products") // Accepts a valid product ID
	},
	handler: async (ctx, args) => {
		const product = await ctx.db.get(args.productId);

		if (!product) {
			throw new Error("Product not found");
		}

		return product;
	}
});

export const getFilteredProducts = query({
	args: {
		paginationOpts: paginationOptsValidator,
		categoryId: v.optional(v.id("categories")),
		order: v.optional(v.string())
	},
	handler: async (ctx, args) => {
		if (args.order) {
			if (args.order === "price-ascending") {
				return await ctx.db
					.query("products")
					.withIndex("by_category_price", (q) =>
						args.categoryId ? q.eq("categoryId", args.categoryId) : q
					)
					.order("asc")
					.paginate(args.paginationOpts);
			} else if (args.order === "price-descending") {
				return await ctx.db
					.query("products")
					.withIndex("by_category_price", (q) =>
						args.categoryId ? q.eq("categoryId", args.categoryId) : q
					)
					.order("desc")
					.paginate(args.paginationOpts);
			}
		}

		let productsQuery = ctx.db.query("products");

		if (args.categoryId !== undefined) {
			productsQuery = productsQuery.filter((q) =>
				q.eq(q.field("categoryId"), args.categoryId)
			);
		}

		return await productsQuery.paginate(args.paginationOpts);
	}
});
