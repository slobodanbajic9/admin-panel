import db from "@/db/drizzle";
import { publicProcedure, router } from "../trpc";
import { users } from "@/db/schema";
import { asc } from "drizzle-orm";

export const usersRouter = router({
  get: publicProcedure.query(async () => {
    return await db.select().from(users).orderBy(asc(users.id));
  }),
});
