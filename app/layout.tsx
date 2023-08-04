import './css/screen.scss';
import NavMobile from './(admin)/components/NavMobile';
import NavDesktop from './(admin)/components/NavDesktop';

export const metadata = {
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
