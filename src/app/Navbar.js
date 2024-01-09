import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800">
            <ul className="flex items-center justify-between px-4 py-2">
                <li>
                    <Link href="/" className="text-white hover:text-gray-300">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="text-white hover:text-gray-300">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/services" className="text-white hover:text-gray-300">
                        Services
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="text-white hover:text-gray-300">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}