"use client"
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/Client";

const Authcallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const origin = searchParams.get("origin");

  const { data ,isLoading  } = trpc.authCallback.useQuery(undefined, {
    onSuccess: () => {
      if (data?.success) {
        router.push(origin ? `/${origin}` : "/dashboard");
      }
    },
  });

  return <div>{isLoading ? "Loading..." : null}</div>;
};

export default Authcallback;
