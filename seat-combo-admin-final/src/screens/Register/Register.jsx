import { EyeIcon, MailIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";

const formFields = [
  {
    id: "fullName",
    label: "Full Name",
    type: "text",
    value: "Thomas Shelby",
    icon: SearchIcon,
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    value: "thomas.s@gmail.com",
    icon: MailIcon,
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    value: "************",
    icon: EyeIcon,
  },
  {
    id: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    value: "************",
    icon: EyeIcon,
  },
];

export const Register = () => {
  return (
    <div
      className="bg-[#f9f9f9] flex flex-row justify-center w-full min-h-screen"
      data-model-id="81:3263"
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
          <Card className="w-full max-w-[594px] bg-colors-neutral-white rounded-[var(--design-tokens-radius-large)] border border-solid border-design-tokens-color-primarystroke">
            <CardContent className="p-10">
              <div className="flex flex-col gap-11">
                <div className="flex flex-col gap-11">
                  <div className="flex flex-col gap-5">
                    <h1 className="font-header-h3 font-[number:var(--header-h3-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--header-h3-font-size)] tracking-[var(--header-h3-letter-spacing)] leading-[var(--header-h3-line-height)] [font-style:var(--header-h3-font-style)]">
                      Create an account
                    </h1>
                  </div>

                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-7">
                      {formFields.map((field) => (
                        <div key={field.id} className="flex flex-col gap-3">
                          <Label className="[font-family:'Inter',Helvetica] font-medium text-[color:var(--colors-neutral-black)] text-sm tracking-[0] leading-[normal]">
                            {field.label}
                          </Label>
                          <div className="relative">
                            <Input
                              type={field.type}
                              defaultValue={field.value}
                              className="h-[52px] px-4 py-5 bg-colors-neutral-white rounded-[var(--design-tokens-radius-medium)] border border-solid border-design-tokens-color-primarystroke [font-family:'Inter',Helvetica] font-normal text-design-tokens-color-inputvalueentered text-base tracking-[0] leading-6 pr-12"
                            />
                            <field.icon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                      ))}

                      <div className="flex flex-col gap-3">
                        <Label className="font-action-item-medium font-[number:var(--action-item-medium-font-weight)] text-colors-neutral-black-duplicate text-[length:var(--action-item-medium-font-size)] tracking-[var(--action-item-medium-letter-spacing)] leading-[var(--action-item-medium-line-height)] [font-style:var(--action-item-medium-font-style)]">
                          Mobile Number
                        </Label>
                        <div className="flex h-[52px] items-center gap-2 px-4 py-5 bg-colors-neutral-white-duplicate rounded-[var(--design-tokens-radius-medium-duplicate)] border border-solid border-design-tokens-color-primarystroke-duplicate">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="inline-flex items-center gap-1 pl-0 pr-2 py-0 border-r [border-right-style:solid] border-colors-neutral-grey-30">
                              <div className="relative w-[26.67px] h-5 rounded-[3.33px] overflow-hidden bg-[url(https://c.animaapp.com/Dnnz5jSW/img/vector.svg)] bg-[100%_100%]">
                                <div className="relative w-[27px] h-5 bg-[url(https://c.animaapp.com/Dnnz5jSW/img/vector-1.svg)] bg-[100%_100%]">
                                  <img
                                    className="absolute w-[27px] h-5 top-0 left-0"
                                    alt="Vector"
                                    src="https://c.animaapp.com/Dnnz5jSW/img/vector-2.svg"
                                  />
                                  <img
                                    className="absolute w-[27px] h-5 top-0 left-0"
                                    alt="Vector"
                                    src="https://c.animaapp.com/Dnnz5jSW/img/vector-3.svg"
                                  />
                                  <img
                                    className="absolute w-[27px] h-5 top-0 left-0"
                                    alt="Vector"
                                    src="https://c.animaapp.com/Dnnz5jSW/img/vector-4.svg"
                                  />
                                </div>
                              </div>
                              <img
                                className="w-4 h-4"
                                alt="Icons"
                                src="https://c.animaapp.com/Dnnz5jSW/img/icons.svg"
                              />
                            </div>
                            <div className="flex-1 font-body-medium font-[number:var(--body-medium-font-weight)] text-design-tokens-color-inputnovalue text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                              <span className="text-[#161616] font-body-medium [font-style:var(--body-medium-font-style)] font-[number:var(--body-medium-font-weight)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] text-[length:var(--body-medium-font-size)]">
                                +44
                              </span>
                              <span className="text-[#9a9a9a] font-body-medium [font-style:var(--body-medium-font-style)] font-[number:var(--body-medium-font-weight)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] text-[length:var(--body-medium-font-size)]">
                                &nbsp;
                              </span>
                              <span className="text-[#161616] font-body-medium [font-style:var(--body-medium-font-style)] font-[number:var(--body-medium-font-weight)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] text-[length:var(--body-medium-font-size)]">
                                7911123456
                              </span>
                            </div>
                          </div>
                          <img
                            className="w-5 h-5"
                            alt="Icons"
                            src="https://c.animaapp.com/Dnnz5jSW/img/icons-1.svg"
                          />
                        </div>
                      </div>
                    </div>

                    <Button className="h-[52px] bg-colors-brand-primary-red rounded-[var(--design-tokens-radius-medium)] font-action-item-large font-[number:var(--action-item-large-font-weight)] text-colors-neutral-white text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] [font-style:var(--action-item-large-font-style)] hover:bg-colors-brand-primary-red/90">
                      Create Account
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
                    alt="Symbol svg"
                    src="https://c.animaapp.com/Dnnz5jSW/img/symbol-svg.svg"
                  />
                  Sign Up with Google
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex items-center justify-center gap-[7px] mt-[47px] mb-[84px]">
          <div className="font-action-item-large font-[number:var(--action-item-large-font-weight)] text-[color:var(--colors-neutral-black)] text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] [font-style:var(--action-item-large-font-style)]">
            Already have an account?
          </div>
          <a href="/" className="font-action-item-large font-[number:var(--action-item-large-font-weight)] text-colors-brand-primary-red text-[length:var(--action-item-large-font-size)] tracking-[var(--action-item-large-letter-spacing)] leading-[var(--action-item-large-line-height)] [font-style:var(--action-item-large-font-style)] hover:underline">
            Sign In here
          </a>
        </div>
      </div>
    </div>
  );
};
