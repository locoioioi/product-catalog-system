import type { FC } from "react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

const Login: FC = () => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center mt-[96px] ">
			<div className=" bg-slate-100 p-4 w-[500px] rounded-lg">
				<h1 className="heading-4 text-[var(--font-sans)]">Welcome Back</h1>
				<p className="paragraph-4 text-gray-500">Login with email</p>
				<form>
					<Input type="email" placeholder="Email" className="bg-white mt-3" />
					<Input
						type="password"
						placeholder="Password"
						className="bg-white mt-3"
					/>
				</form>

				<div className="mt-3">
					<Button className="w-full cursor-pointer">Login</Button>
				</div>
			</div>

			<p
				className="mt-1 font-medium cursor-pointer hover:underline"
				onClick={() => {
					navigate("/register");
				}}
			>
				Or create an <span className="font-bold">account</span>
			</p>
		</div>
	);
};

export default Login;
