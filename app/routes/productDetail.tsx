import { api } from "convex/_generated/api";
import type { Id } from "convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { Target } from "lucide-react";
import { useState, type FC } from "react";
import { useParams } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "~/components/ui/carousel";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "~/components/ui/select";

const colorMap: Record<string, string> = {
	Red: "bg-red-200",
	Grey: "bg-gray-200",
	Brown: "bg-stone-200",
	Black: "bg-black",
	White: "bg-white",
	Blue: "bg-blue-200",
	Silver: "bg-slate-200"
};

interface CartProps {
	productId: string;
	color: string;
	size: string | undefined;
	quantity: number;
}

const ProductDetail: FC = () => {
	const { productId } = useParams();
	const product = useQuery(
		api.products.getProductById,
		productId ? { productId: productId as Id<"products"> } : "skip"
	);

	const [cartItem, setCartItem] = useState<CartProps>({
		productId: productId!,
		color: "",
		size: undefined,
		quantity: 1
	});

	const productImages = useQuery(
		api.file.getProductImages,
		productId ? { productId: productId as Id<"products"> } : "skip"
	);

	return (
		<div className="max-w-[1200px] m-auto mt-11 flex gap-[110px]">
			<Carousel className="w-full max-w-5/12">
				<CarouselContent>
					{productImages &&
						productImages.map((image, index) => (
							<CarouselItem key={index}>
								<div className="p-1">
									<Card>
										<CardContent className="flex aspect-square items-center justify-center p-6">
											<img
												src={image!}
												className="w-full h-[450px] object-contain"
											/>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			<div className="w-4/12">
				<h1 className="heading-3">{product?.name}</h1>
				<p className="paragraph-2 mt-1">${product?.price}</p>
				<p className="mt-[15px] font-[var(--font-sans)] text-[17px] min-h-[70px]">
					{product?.description}
				</p>

				<div className="flex gap-3 mt-2">
					{product?.colors.map((color) => {
						const colorName = colorMap[color];
						return (
							<div
								onClick={() => {
									setCartItem((state) => {
										return {
											...state,
											color: color
										};
									});
								}}
								className={`${colorName} w-[50px] h-[50px] border-[1px] border-black rounded-full cursor-pointer ${
									color === cartItem.color && "border-slate-400"
								} transition-all duration-200`}
							></div>
						);
					})}
				</div>

				<div className="mt-3 flex justify-between gap-2">
					<input
						type="number"
						className="w-6/12 px-3 py-1 rounded-lg border-gray-200 border-[1px]"
						value={cartItem.quantity}
						onChange={(e) => {
							setCartItem((state) => {
								return {
									...state,
									quantity: Number(e.target.value)
								};
							});
						}}
						min={0}
						max={product?.stock}
					/>

					<Select
						value={cartItem.size}
						onValueChange={(value) => {
							setCartItem((state) => {
								return {
									...state,
									size: value
								};
							});
						}}
					>
						<SelectTrigger className="w-6/12">
							<SelectValue placeholder="Size" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{product?.size.map((item) => {
									return (
										<SelectItem value={item} key={item}>
											{item}
										</SelectItem>
									);
								})}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className="mt-4">
					<Button className="w-full py-5">Add To Cart</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
