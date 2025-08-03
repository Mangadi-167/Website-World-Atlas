import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

export const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 5);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isTransparent = location.pathname === '/' && !isScrolled;
    return (
        <nav className={`fixed w-full z-30 top-0 start-0 transition-all duration-300 ${isTransparent ? 'py-2 bg-transparent' : 'py-2 bg-white  dark:border-gray-600'}`}>
            <div className="max-w-screen-xl flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse md:order-1">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">World <span class="text-blue-700">Atlas</span></span>
                </a>
                <div className="flex items-center md:order-3 space-x-2 rtl:space-x-reverse">
                    <div className="hidden md:block">
                        {isSearchOpen ? (
                            <div className="flex items-center gap-2">
                                <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." />
                                <button onClick={() => setIsSearchOpen(false)} className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                            </div>
                        ) : (
                            <button onClick={() => setIsSearchOpen(true)} className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </button>
                        )}
                    </div>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" /></svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-2 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <div className="mt-4 md:hidden">
                        <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Cari negara..." />
                    </div>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "block py-2 px-3 rounded md:p-0 text-blue-700  md:bg-transparent md:text-blue-700 md:dark:text-blue-500" // Style jika AKTIF
                                        : "block py-2 px-3 rounded md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white" // Style jika TIDAK AKTIF
                                }>
                                Beranda
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/negara"
                                className={({ isActive }) =>
                                    isActive
                                        ? "block py-2 px-3 rounded md:p-0 text-blue-700  md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                                        : "block py-2 px-3 rounded md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white"
                                }>
                                Negara
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/tentang-kami"
                                className={({ isActive }) =>
                                    isActive
                                        ? "block py-2 px-3 rounded md:p-0 text-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                                        : "block py-2 px-3 rounded md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white"
                                }>
                                Tentang Kami
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}