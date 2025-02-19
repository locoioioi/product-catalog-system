import { useState, type FC } from "react";
import { Link } from "react-router";
import usePlaceHolder from "~/hooks/navbar/usePlaceHolder";

const Navbar: FC = () => {
	const { placeHolder, onFocusPlaceHolder, resetPlaceHolder } =
		usePlaceHolder();

	return (
		<div className="max-w-[1200px] m-auto h-[60px] flex gap-8 justify-between items-center">
			<div>
				{/* Navigation buttons */}
				<ul className="flex gap-8 items-center">
					<li>
						<Link
							to={"/"}
							className="text-xl font-bold"
							style={{ fontFamily: "var(--font-head)" }}
						>
							Ecommerce
						</Link>
					</li>

					<li>
						<Link to={"/"} className="text-[17px]">
							Shop
						</Link>
					</li>

					<li>
						<Link to={"/"} className="text-[17px]">
							Stories
						</Link>
					</li>

					<li>
						<Link to={"/"} className="text-[17px]">
							About
						</Link>
					</li>
				</ul>
			</div>

			<div className="flex-1 flex gap-3">
				<img src="/assets/Search.svg" />
				<form className="w-full">
					<input
						placeholder={placeHolder}
						onFocus={onFocusPlaceHolder}
						onBlur={resetPlaceHolder}
						className="focus-visible:border-none outline-none w-[60%]"
					/>
				</form>
			</div>

			<div className="flex items-center gap-[22px]">
				{/* Shopping Cart */}
				<div className="flex gap-2 items-center">
					<div className="w-8 h-8 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-100 hover:border-[0.5px] hover:border-black transition-all duration-200">
						<img
							src="/assets/cart.svg"
							alt="shopping cart"
							width={18}
							height={21}
						/>
					</div>
					<p className={"text-[17px]"}>1</p>
				</div>

				{/* Login button */}
				<div className="text-[17px] cursor-pointer hover:opacity-75 transition-all duration-200">
					Login
				</div>
			</div>
		</div>
	);
};

export default Navbar;
