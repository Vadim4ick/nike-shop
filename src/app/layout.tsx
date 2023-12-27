import { Languages } from "@/shared/i18n/types";

import "@/shared/assets/styles/index.css";

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
