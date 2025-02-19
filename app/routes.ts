import {
	type RouteConfig,
	index,
	layout,
	route
} from "@react-router/dev/routes";

export default [
	layout("routes/home.tsx", [
		route("/", "routes/landingPage.tsx"),
		route("/shop", "routes/shop.tsx"),
		route("/shop/:productId", "routes/productDetail.tsx"),
		route("/login", "routes/login.tsx"),
		route("/register", "routes/register.tsx")
	])
] satisfies RouteConfig;
