// 'use client';
import '../css/screen.scss';

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div id="background-wrapper-login">{children}</div>;
}
