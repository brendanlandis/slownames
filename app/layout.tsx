import './css/screen.scss';
import NavDesktop from './components/navDesktop';
import NavMobile from './components/navMobile';

export const metadata = {
    title: 'Slow Names',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <header>
                    <NavDesktop />
                    <NavMobile />
                </header>
                {children}
            </body>
        </html>
    );
}
