import type { FC } from "react";
import Banner from "~/components/shop/Banner";
import ProductSection from "~/components/shop/ProductSection";

const Shop: FC = () => {
	return (
		<div>
			<Banner />
			<ProductSection />
		</div>
	);
};

export default Shop;
