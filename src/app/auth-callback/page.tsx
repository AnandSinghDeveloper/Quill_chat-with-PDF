"use client"
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/Client";

const Authcallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const { data, isLoading, isSuccess } = trpc.authCallback.useQuery();

  useEffect(() => {
    if (isSuccess && data?.success) {
      router.push(origin ? `/${origin}` : "/dashboard");
    }
  }, [isSuccess, data, origin, router]);

  return <div>{isLoading ? "Loading..." : null}</div>;
};

export default Authcallback;
