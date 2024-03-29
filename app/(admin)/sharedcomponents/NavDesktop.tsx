'use client';
import Link from 'next/link';
import { Menu } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import NavDesktopItem from './NavDesktopItem';
import { removeAllCookies } from '../api/RemoveCookies';

function SettingsDropdown() {
    const pathname = usePathname();
    const handleLogout = async (event) => {
        event.preventDefault();
        removeAllCookies();
        window.location.href = '/login';
    };
    return (
        <Menu>
            <Menu.Button className="menu-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                        clipRule="evenodd"
                    />
                </svg>
            </Menu.Button>
            <Menu.Items className="dropdown-content secondary-nav">
                <Menu.Item>
                    <Link className={pathname == '/settings' ? 'active' : ''} href="/settings">
                        settings
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link className={pathname == '/logout' ? 'active' : ''} href="/logout" onClick={handleLogout}>
                        logout
                    </Link>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    );
}

export default function NavDesktop() {
    const pathname = usePathname();
    return (
        <nav id="nav-desktop">
            <div className="left">
                <SettingsDropdown />
            </div>
            <ul className="center">
                {/* <li className="nav-item">
                    <Menu>
                        <Menu.Button className="menu-button">
                            <span>writing</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </Menu.Button>
                        <Menu.Items className="dropdown-content secondary-nav">
                            <Menu.Item>
                                <Link className={pathname == '/writing/topic' ? 'active' : ''} href="/writing/topic">
                                    writing topics
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link
                                    className={pathname == '/writing/fishing' ? 'active' : ''}
                                    href="/writing/fishing"
                                >
                                    text fishing
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link
                                    className={pathname == '/writing/manipulate' ? 'active' : ''}
                                    href="/writing/manipulate"
                                >
                                    text manipulation
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link
                                    className={pathname == '/writing/oblique' ? 'active' : ''}
                                    href="/writing/oblique"
                                >
                                    oblique strategies
                                </Link>
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </li> */}
                <NavDesktopItem url="/" name="posts" />
                <NavDesktopItem url="/press" name="press" />
                <NavDesktopItem url="/shows" name="shows" />
                <NavDesktopItem url="/recordings" name="recordings" />
                <NavDesktopItem url="/photos" name="photos" />
                <NavDesktopItem url="/videos" name="videos" />
            </ul>
            <div className="right"></div>
        </nav>
    );
}
