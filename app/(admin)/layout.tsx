import NavMobile from './components/NavMobile';
import NavDesktop from './components/NavDesktop';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div id="background-wrapper">
            <header>
                <NavDesktop />
                <NavMobile />
            </header>
            {children}
        </div>
    );
}
