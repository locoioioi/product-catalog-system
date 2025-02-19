import { Link } from "react-router";

const Footer = () => {
	return (
		<div className="max-w-[1200px] w-full mt-4 mx-auto pb-32">
			<div className="w-full flex ">
				<div className="w-[38%] ">
					<h3 className="heading-3">Sign up for our newsletter</h3>
					<p className="text-[14px] text-[var(--font-sans)]">
						Be the first to know about our special offers, new product launches,
						and events
					</p>
					<div className="mt-2">
						<input
							className="border-[1px] border-black px-3 py-3 w-full outline-none"
							placeholder="Enter your email"
						/>
					</div>
				</div>

				<div className="w-2/12 ml-28">
					<h5 className="heading-5 ">Shop</h5>
					<ul className="mt-5">
						<li>
							<Link
								to={"/"}
								className="paragraph-03 font-medium text-[var(--color-text-secondary)]"
							>
								Women's
							</Link>
						</li>

						<li>
							<Link
								to={"/"}
								className="paragraph-03 font-medium text-[var(--color-text-secondary)]"
							>
								Men’s
							</Link>
						</li>
						<li>
							<Link
								to={"/"}
								className="paragraph-03 font-medium text-[var(--color-text-secondary)]"
							>
								Kids’
							</Link>
						</li>
						<li>
							<Link
								to={"/"}
								className="paragraph-03 font-medium text-[var(--color-text-secondary)]"
							>
								Shoes
							</Link>
						</li>

						<li>
							<Link
								to={"/"}
								className="paragraph-03 font-medium text-[var(--color-text-secondary)]"
							>
								Equipment
							</Link>
						</li>
						<li>
							<Link
								to={"/"}
								className="paragraph-03 font-medium text-[var(--color-text-secondary)]"
							>
								By Activity
							</Link>
						</li>
						<li>
							<Link
								to={"/"}
								className="paragraph-03 font-medium text-[var(--color-text-secondary)]"
							>
								Gift Cards
							</Link>
						</li>

						<li>
							<Link
								to={"/"}
								className="paragraph-03 font-medium text-[var(--color-text-secondary)]"
							>
								Sales
							</Link>
						</li>
					</ul>
				</div>

				<div className="w-2/12 ml-28">
					<h5 className="heading-5 ">Help</h5>
					<ul className="mt-5">
						<li>
							<Link
								to={"/"}
								className="paragraph-03 font-medium text-[var(--color-text-secondary)]"
							>
								Help Center
							</Link>
						</li>

						<li>
							<Link
								to={"/"}
								className="paragraph-03 font-medium text-[var(--color-text-secondary)]"
							>
								Order Status
							</Link>
						</li>
						<li>
							<Link
								to={"/"}
								className="paragraph-03 font-medium text-[var(--color-text-secondary)]"
							>
								Size Chart
							</Link>
						</li>
						<li>
							<Link
								to={"/"}
								className="paragraph-03 font-medium text-[var(--color-text-secondary)]"
							>
								Returns & Warranty
							</Link>
						</li>

						<li>
							<Link
								to={"/"}
								className="paragraph-03 font-medium text-[var(--color-text-secondary)]"
							>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>

				<div className="w-2/12 ml-28">
					<h5 className="heading-5 ">About</h5>
					<ul className="mt-5">
						<li>
							<Link
								to={"/"}
								className="paragraph-03 font-medium text-[var(--color-text-secondary)]"
							>
								About Us
							</Link>
						</li>

						<li>
							<Link
								to={"/"}
								className="paragraph-03 font-medium text-[var(--color-text-secondary)]"
							>
								Responsibility
							</Link>
						</li>
						<li>
							<Link
								to={"/"}
								className="paragraph-03 font-medium text-[var(--color-text-secondary)]"
							>
								Technology & Innovation
							</Link>
						</li>
						<li>
							<Link
								to={"/"}
								className="paragraph-03 font-medium text-[var(--color-text-secondary)]"
							>
								Explore our stories
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
