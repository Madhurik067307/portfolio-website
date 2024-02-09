// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "@mantine/core/styles.layer.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

export const metadata = {
  title: "Chuong Tran - Portfolio Webiste",
  description: "Chuong Tran - Portfolio Webiste",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="light">{children}</MantineProvider>
      </body>
    </html>
  );
}
