import type { Metadata } from "next";

import { Languages } from "@/shared/i18n/types";

import "@/shared/assets/styles/index.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Languages };
}) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
