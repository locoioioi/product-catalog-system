import { api } from "convex/_generated/api";
import type { Id } from "convex/_generated/dataModel";
import { useQuery } from "convex/react";
import type { FC } from "react";
import { Link } from "react-router";

export type Product = {
	_id: Id<"products">;
	name: string;
	price: number;
	description?: string;
	stock: number;
	categoryId: Id<"categories">;
	size: string[];
	colors: string[];
	images: string[]; // Storage IDs for images
};

interface ProductItemProps {
	product: Product;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
	const image = useQuery(api.file.getFileUrl, {
		storageId: product.images[0] as Id<"_storage">
	});
	return (
		<Link
			to={`/shop/${product._id}`}
			className="cursor-pointer group"
			key={product._id}
		>
			<img
				src={image!}
				className="w-full h-[300px] object-cover group-hover:opacity-85 transition-opacity duration-300"
			/>
			<div className="flex justify-between mt-2">
				<h3 className="font-semibold">{product.name}</h3>
				<p className="font-[var(--font-sans)] text-[17px]">{product.size[0]}</p>
			</div>
			<p>$ {product.price}</p>
		</Link>
	);
};

export default ProductItem;
