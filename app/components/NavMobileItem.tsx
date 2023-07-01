import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function NavMobileItem({ url, name }) {
    const pathname = usePathname();

    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <li className={pathname == url ? 'nav-item active' : 'nav-item'}>
            <Link href={url} onClick={(event) => closeModal}>
                {name}
            </Link>
        </li>
    );
}
