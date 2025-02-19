import { api } from "convex/_generated/api";
import { usePaginatedQuery, useQuery } from "convex/react";
import type { FC } from "react";
import useFilterProduct from "~/store/filterState";
import { Button } from "../ui/button";
import { Link } from "react-router";
import type { Id } from "convex/_generated/dataModel";
import ProductItem from "./ProductItem";

const ProductList: FC = () => {
	const { order, category } = useFilterProduct();
	const {
		results: products,
		isLoading,
		loadMore,
		status
	} = usePaginatedQuery(
		api.products.getFilteredProducts,
		{
			categoryId: category?._id,
			order: order ? order : undefined
		},
		{
			initialNumItems: 8
		}
	);

	return (
		<>
			<div className="mt-2 grid grid-cols-4 gap-5">
				{products.map((product) => {
					return <ProductItem product={product} />;
				})}
			</div>

			{/* Load More Button - Appears only if there is more data */}
			{status === "CanLoadMore" && (
				<div className="flex justify-center mt-5">
					<Button
						variant={"outline"}
						onClick={() => {
							loadMore(8);
						}}
						className="px-4 py-2 cursor-pointer mb-3"
					>
						Load More Products
					</Button>
				</div>
			)}
		</>
	);
};

export default ProductList;
