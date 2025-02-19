import { useState, type FC } from "react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

interface RegisterProps {
	email: string;
	password: string;
	rePassword: string;
}

const Register: FC = () => {
	const [registerForm, setRegisterForm] = useState<RegisterProps>({
		email: "",
		password: "",
		rePassword: ""
	});

	const navigate = useNavigate();

	const onSubmit = (e: any) => {
		e.preventDefault();
		console.log(registerForm);
	};

	return (
		<div className="flex flex-col items-center mt-[96px] ">
			<div className=" bg-slate-100 p-4 w-[500px] rounded-lg">
				<h1 className="heading-4 text-[var(--font-sans)]">Welcome Back</h1>
				<p className="paragraph-4 text-gray-500">Register with email</p>
				<form onSubmit={onSubmit}>
					<Input
						type="email"
						value={registerForm.email}
						onChange={(e) => {
							setRegisterForm((state) => {
								return {
									...state,
									email: e.target.value
								};
							});
						}}
						placeholder="Email"
						className="bg-white mt-3"
					/>
					<Input
						type="password"
						placeholder="Password"
						value={registerForm.password}
						onChange={(e) => {
							setRegisterForm((state) => {
								return {
									...state,
									password: e.target.value
								};
							});
						}}
						className="bg-white mt-3"
					/>
					<Input
						type="password"
						placeholder="Re-enter Password"
						value={registerForm.rePassword}
						onChange={(e) => {
							setRegisterForm((state) => {
								return {
									...state,
									rePassword: e.target.value
								};
							});
						}}
						className="bg-white mt-3"
					/>

					<div className="mt-3">
						<Button className="w-full cursor-pointer">Login</Button>
					</div>
				</form>
			</div>

			<p
				className="mt-1 font-medium cursor-pointer hover:underline"
				onClick={() => {
					navigate("/login");
				}}
			>
				Or login with an <span className="font-bold">account</span>
			</p>
		</div>
	);
};

export default Register;
