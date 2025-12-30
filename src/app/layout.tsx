import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

export const metadata: Metadata = {
    title: "AMC Vet | Cursos de Cirurgia Veterinária",
    description: "Educação de alta performance para cirurgiões veterinários.",
    icons: {
        icon: "/logo.png",
        shortcut: "/logo.png",
        apple: "/logo.png",
    },
};

import { Navbar } from "@/components/layout/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body
                className={cn(manrope.variable, "antialiased min-h-screen bg-clinical-white text-slate-900")}
                suppressHydrationWarning
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
