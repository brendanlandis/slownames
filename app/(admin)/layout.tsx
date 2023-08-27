import NavMobile from './sharedcomponents/NavMobile';
import NavDesktop from './sharedcomponents/NavDesktop';

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
