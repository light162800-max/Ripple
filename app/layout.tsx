import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Ripple — Campus problems, moved forward", description: "Turn everyday campus frustrations into visible, trackable improvements." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
