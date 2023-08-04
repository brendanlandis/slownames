import './css/screen.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Slow Names',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="lofi">
            <body>{children}</body>
        </html>
    );
}
