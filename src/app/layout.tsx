import { Providers } from "./providers";
import "../../public/assets/css/landing.css";

export const metadata = {
  title: "Payyard.io",
  description: "Payments gateway for freelancers",
  keywords: "nextjs, payments, freelancers, gateway",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
