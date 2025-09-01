import { EyeIcon, MailIcon } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";
import { Button } from "../../components/ui/button";

export const Login = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div
			className="bg-[#f9f9f9] flex flex-row justify-center w-full min-h-screen"
			data-model-id="login-page"
		>
			<div className="bg-colors-neutral-gray-10 w-full max-w-[1440px] min-h-[1115px] relative">
				<header className="flex flex-col w-full items-center justify-center gap-2.5 px-[120px] py-5 bg-transparent">
					<div className="relative w-[204px] h-11 mix-blend-multiply">
						<div className="relative h-[38px] top-[3px]">
							<img
								className="absolute w-[41px] h-[38px] top-0 left-0"
								alt="Logo"
								src="https://c.animaapp.com/Dnnz5jSW/img/logo@2x.png"
							/>
							<img
								className="absolute w-[158px] h-[21px] top-2 left-[46px]"
								alt="Logo"
								src="https://c.animaapp.com/Dnnz5jSW/img/logo-1@2x.png"
							/>
						</div>
					</div>
				</header>

				<div className="flex justify-center px-4 mt-[44px]">
					<Card className="w-full max-w-[594px] rouded-xl bg-colors-neutral-white  border border-solid border-design-tokens-color-primarystroke">
						<CardContent className="p-10 rounded-xl">
							<div className="flex flex-col gap-11">
								<div className="flex flex-col gap-11">
									<div className="flex flex-col gap-3">
										<h1 className="text-[30px] font-bold   tracking-[var(--header-h3-letter-spacing)] leading-[var(--header-h3-line-height)] [font-style:var(--header-h3-font-style)]">
											Welcome back!
										</h1>
										<p className=" font-normal text-[#565656] text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
											Enter your credentials to manage teams, events, sales, and more
										</p>
									</div>

									<div className="flex flex-col gap-8">
										<div className="flex flex-col gap-7">
											{/* Email Field */}
											<div className="flex flex-col gap-3">
												<Label className="[font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal]">
													Email Address
												</Label>
												<div className="relative">
													<Input
														type="email"
														defaultValue="adam.c@gmail.com"
														className="h-[52px] px-4 py-5 bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke [font-family:'Inter',Helvetica] font-normal text-design-tokens-color-inputvalueentered text-base tracking-[0] leading-6 pr-12"
													/>
													<MailIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
												</div>
											</div>

											{/* Password Field */}
											<div className="flex flex-col gap-3">
												<Label className="[font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal]">
													Password
												</Label>
												<div className="relative">
													<Input
														type={showPassword ? "text" : "password"}
														defaultValue="Adam@1234"
														className="h-[52px] px-4 py-5 bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke [font-family:'Inter',Helvetica] font-normal text-design-tokens-color-inputvalueentered text-base tracking-[0] leading-6 pr-12"
													/>
													<EyeIcon
														className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer"
														onClick={() => setShowPassword(!showPassword)}
													/>
												</div>
											</div>
										</div>

										<Button onClick={() => location.href="/dashboard"} className="h-[52px] bg-colors-brand-primary-red rounded-[var(--design-tokens-radius-medium)] font-action-item-large font-[number:var(--action-item-large-font-weight)] text-colors-neutral-white text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] [font-style:var(--action-item-large-font-style)] hover:bg-colors-brand-primary-red/90">
											Sign In
										</Button>
									</div>
								</div>

								<div className="flex items-center justify-center gap-3">
									<Separator className="flex-1" />
									<div className="font-body-small font-[number:var(--body-small-font-weight)] text-[color:var(--colors-neutral-gray-70)] text-[length:var(--body-small-font-size)] text-center tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] [font-style:var(--body-small-font-style)]">
										OR
									</div>
									<Separator className="flex-1" />
								</div>

								<Button
									variant="outline"
									className="h-[52px] bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke font-action-item-large font-[number:var(--action-item-large-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] [font-style:var(--action-item-large-font-style)] hover:bg-gray-50"
								>
									<img
										className="w-[27px] h-7 mr-3"
										alt="Google logo"
										src="https://c.animaapp.com/Dnnz5jSW/img/symbol-svg.svg"
									/>
									Sign In with Google
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>

				<div className="flex items-center justify-center gap-[7px] mt-[47px] mb-[84px]">
					<div className="font-action-item-large font-[number:var(--action-item-large-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] [font-style:var(--action-item-large-font-style)]">
						Don't have an account?
					</div>
					<a href="/register" className="font-action-item-large font-[number:var(--action-item-large-font-weight)] text-colors-brand-primary-red text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] [font-style:var(--action-item-large-font-style)] hover:underline">
						Sign Up here
					</a>
				</div>
			</div>
		</div>
	);
};
