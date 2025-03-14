import type { Metadata } from "next";

import "../styles/global.scss";
import "../styles/font.scss";
import Contaiener from "../components/ui/container/container";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Contaiener>{children}</Contaiener>
      </body>
    </html>
  );
}
