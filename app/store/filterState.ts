import type { Id } from "convex/_generated/dataModel";
import { create } from "zustand";

type Category = {
	_id: Id<"categories">;
	name: string;
};

interface FilterProductState {
	category: Category | null;
	order: string | null;
	setCategory: (category: Category | null) => void;
	setOrder: (order: string) => void;
}

const useFilterProduct = create<FilterProductState>((set) => ({
	category: null,
	order: null,
	setCategory: (category) => set({ category }),
	setOrder: (order) => set({ order })
}));

export default useFilterProduct;
