import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	products: defineTable({
		name: v.string(),
		description: v.optional(v.string()),
		price: v.number(),
		stock: v.number(),
		categoryId: v.id("categories"),
		size: v.array(v.string()),
		colors: v.array(v.string()),
		images: v.array(v.string())
	})
		.index("by_name", ["name"])
		.index("by_price", ["price"])
		.index("by_category", ["categoryId"])
		.index("by_color", ["colors"])
		.index("by_name_price_category", ["name", "price", "categoryId"])
		.index("by_category_price", ["categoryId", "price"]),

	categories: defineTable({
		name: v.string()
	}).index("by_name", ["name"])
});
