import { api } from "convex/_generated/api";
import { usePaginatedQuery } from "convex/react";
import type { FC } from "react";
import useFilterProduct from "~/store/filterState";
import { Button } from "../ui/button";
import { Link } from "react-router";

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
				{products.map((product) => (
					<Link
						to={`/shop/${product._id}`}
						className="cursor-pointer group"
						key={product._id}
					>
						<div className="w-full h-[250px] bg-gray-300 group-hover:opacity-85 transition-opacity duration-300"></div>
						<div className="flex justify-between mt-2">
							<h3 className="font-semibold">{product.name}</h3>
							<p className="font-[var(--font-sans)] text-[17px]">
								{product.size[0]}
							</p>
						</div>
						<p>$ {product.price}</p>
					</Link>
				))}
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
