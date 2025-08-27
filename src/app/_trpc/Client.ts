
import type { AppRouter } from "@/trpc"
import { createTRPCReact } from "@trpc/react-query"
import { log } from "console"

export const trpc = createTRPCReact<AppRouter>({})

log("hello")