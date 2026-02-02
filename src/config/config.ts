import { config } from "dotenv";
import z, { ZodObject } from "zod";

config({
  path: process.env.NODE_ENV === "development" ? ".env.dev" : ".env.prod",
});

const envSchema = z.object({
  PORT: z.string().min(2),
  NODE_ENV: z.string().min(3),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Invalid environment variables:", parsedEnv.error);
  throw new Error("Invalid environment variables");
}

export const _env = parsedEnv.data;
