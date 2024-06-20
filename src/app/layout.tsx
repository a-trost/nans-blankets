import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { pacifico } from "./fonts";
import "./globals.css";
import { createClient } from "@/prismicio";
import NavBar from "@/components/NavBar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  let siteName = home.data.blanket_title;

  let currentFont = pacifico;

  return (
    <html lang="en" className={currentFont.className}>
      <body>
        <NavBar />
        {children}
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
