import { GetPageHomeQuery, GetPageShoeQuery, gql } from "@/graphql/client";
import { SeoPage } from "@/shared/types/metadata";
import { NextResponse } from "next/server";

export type Error = {
  code?: string;
  text?: string;
};

export type ResponseData<DataType> = {
  status: string;
  error?: Error;
  data?: DataType;
};

export type Params<DataType> = {
  data?: DataType;
  code?: string;
  text?: string;
};

export const serverError = (
  params?: Params<undefined>
): ResponseData<undefined> => {
  const code = params?.code ?? "SERVER_ERROR";
  const text = params?.text;

  const error: Error = {};

  error.code = code;
  error.text = text;

  return {
    status: "error",
    error,
  };
};

type PageFunction<T> = () => Promise<T>;

// /api/metadata.js
export async function GET(req: Request) {
  const page = new URL(req.url).searchParams.get("page");

  if (!page) {
    return NextResponse.json(
      serverError({
        text: "Нет URL параметра",
      }),
      {
        status: 404,
      }
    );
  }

  const pageFunctionMap: Record<SeoPage, PageFunction<unknown>> = {
    home: gql.GetPageHome,
    shoes: gql.GetPageShoe,
  };

  if (!(page in pageFunctionMap)) {
    return NextResponse.json(
      serverError({
        text: "Недопустимая страница",
      }),
      {
        status: 404,
      }
    );
  }

  const getPage = pageFunctionMap[page as SeoPage];

  const pageQuery = await getPage();

  if (!pageQuery) {
    return NextResponse.json(
      serverError({
        text: "Не найдено",
      }),
      {
        status: 404,
      }
    );
  }

  if (!Object.values(pageQuery)[0].data.attributes.SEO) {
    return NextResponse.json(
      serverError({
        text: "Не найдено СЕО",
      }),
      {
        status: 404,
      }
    );
  }

  const metadata = {
    title: Object.values(pageQuery)[0].data.attributes.SEO.metaTitle,
    description:
      Object.values(pageQuery)[0].data.attributes.SEO.metaDescription,
    keywords: Object.values(pageQuery)[0].data.attributes.SEO.keywords,
  };

  return NextResponse.json({ metadata: metadata });
}
