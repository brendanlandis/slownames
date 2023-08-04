import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavMobileItem({ url, name, onClick }) {
    const pathname = usePathname();
    return (
        <li className={pathname == url ? 'nav-item active' : 'nav-item'}>
            <Link href={url} onClick={onClick}>
                {name}
            </Link>
        </li>
    );
}
