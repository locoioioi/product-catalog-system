import { type FC } from "react";
import Filter from "./Filter";
import ProductList from "./ProductList";

const ProductSection: FC = () => {
	return (
		<div className="max-w-[1200px] m-auto mt-10 flex flex-col">
			<Filter />
			<ProductList />
		</div>
	);
};

export default ProductSection;
