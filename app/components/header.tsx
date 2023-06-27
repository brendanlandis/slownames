"use client"

import Link from 'next/link';

// import { usePathname } from 'next/navigation'

const Header = () => {
    // const pathname = usePathname();
    // if(pathname != "/login" )
    return (
        <header>
            <nav>
                <ul>
                    {/* <li>
                        <Link href="/login">login</Link>
                    </li> */}
                    <li>
                        <Link href="/">news</Link>
                    </li>
                    <li>
                        <Link href="/press">press</Link>
                    </li>
                    <li>
                        <Link href="/shows">shows</Link>
                    </li>
                    <li>
                        <Link href="/recordings">recordings</Link>
                    </li>
                    <li>
                        <Link href="/photos">photos</Link>
                    </li>
                    <li>
                        <Link href="/videos">videos</Link>
                    </li>
                    <li id="nav-bands">
                        <Link href="/bands">bands</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
