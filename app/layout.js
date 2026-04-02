import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata = {
  title: "PricePulse",
  description:
    "Track prices across e-commerce platforms and get notified when they drop.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}