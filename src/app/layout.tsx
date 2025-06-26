import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {WithQuery} from '@/shared/providers/WithQuery';
import Header from '@/widgets/Header/ui';
import { Toaster } from 'sonner';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'Overlook',
    description: 'Список популярных фильмов',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <WithQuery>
            <Header/>
            {children}
            <Toaster richColors position="top-right" />
        </WithQuery>
        </body>
        </html>
    );
}
