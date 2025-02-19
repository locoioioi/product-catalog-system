import { useEffect, type FC } from "react";
import { Button } from "../ui/button";
import { useQuery } from "convex/react";
import { api } from "convex/_generated/api";
import type { Id } from "convex/_generated/dataModel";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "../ui/select";
import useFilterProduct from "~/store/filterState";

type Category = {
	_id: Id<"categories">;
	name: string;
};

const Filter: FC = () => {
	const categories = useQuery(api.category.getCategories) as
		| Category[]
		| undefined;

	const { category, order, setCategory, setOrder } = useFilterProduct();

	if (!categories) {
		return <p>Loading categories...</p>;
	}

	return (
		<div className="flex justify-between w-full items-start">
			<div className="flex gap-3">
				{categories.map((_category) => (
					<Button
						key={_category._id}
						variant={
							category !== null && _category.name === category.name
								? "default"
								: "outline"
						}
						className="cursor-pointer transition-all duration-150"
						onClick={() => {
							setCategory(_category);
							if (category !== null && _category.name === category.name) {
								setCategory(null);
							}
						}}
					>
						{_category.name}
					</Button>
				))}
			</div>

			<div>
				<Select
					value={order || undefined}
					onValueChange={(value) => {
						setOrder(value);
					}}
				>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Sort by" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Sort by</SelectLabel>
							<SelectItem value="price-ascending">Price - Ascending</SelectItem>
							<SelectItem value="price-descending">
								Price - Descending
							</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>

				<p className="text-right mt-2">Showing 0 Products</p>
			</div>
		</div>
	);
};

export default Filter;
