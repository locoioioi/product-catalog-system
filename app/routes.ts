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
		route("/shop/:productId", "routes/productDetail.tsx")
	])
] satisfies RouteConfig;
