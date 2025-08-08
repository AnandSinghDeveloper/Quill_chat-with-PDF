"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import {LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs"
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className=" sticky top-0 z-30 w-full h-14 inset-x-0 border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper className="">
        <div className=" h-14 flex items-center justify-between border-b border-zinc-200 ">
          <Link className="flex z-40 font-semibold" href="/">
            <span>Quill</span>
          </Link>

          <div className=" sm:flex items-center space-x-4 hidden">
            <>
              <Link
                href={"/pricing"}
                className={buttonVariants({ size: "sm", variant: "ghost" })}
              >
                <span className="z-40 font-semibold">Pricing</span>
              </Link>
              <LoginLink 
                className={buttonVariants({ size: "sm", variant: "ghost" })}
              >
                Sign In
              </LoginLink>
              <RegisterLink className={buttonVariants({ size: "sm" })}>
                Get Started <ArrowRight className="ml-2 w-5 h-5  " />
              </RegisterLink>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
