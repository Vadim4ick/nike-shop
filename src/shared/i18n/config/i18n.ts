import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { Languages, languages } from "../types";
import { gql } from "@/graphql/client";

export default getRequestConfig(async ({ locale }) => {
  if (!languages.includes(locale as Languages)) notFound();

  return {
    messages: (await import(`^/messages/${locale}.json`)).default,
  };
});
