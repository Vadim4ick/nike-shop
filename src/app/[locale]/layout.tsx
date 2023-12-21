import type { Metadata } from "next";
import { PreHeader } from "@/components/layout/PreHeader";

import "@/shared/assets/styles/index.css";
import { Languages, languages } from "@/shared/i18n/types";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Languages };
}) {
  if (!languages.includes(params.locale as Languages)) notFound();

  return (
    <html lang={params.locale}>
      <body>
        <PreHeader />

        {children}
      </body>
    </html>
  );
}
