import { useState } from 'react';
import SearchBar from './SearchBar';

export const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div className="navbar fixed w-full transition-all py-4 ">
            <div className="container mx-auto px-8 ">
                <div className="navbar-box flex items-center justify-between ">
                    <div className="logo">
                        <h2 className="text-2xl font-bold">World Atlas</h2>
                    </div>
                    <ul className="flex lg:gap-12 md:static md:bg-transparant  md:flex-row md-shadow-none md:w-auto md:h-full md:translate-y-0 gap-8  fixed left-106 top-38 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-200 transition-all">
                        <li>
                            <a href="" className="font-medium opacity-75">Beranda</a>
                        </li>
                        <li>
                            <a href="" className="font-medium opacity-75">Negara</a>
                        </li>
                        <li>
                            <a href="" className="font-medium opacity-75">Tentang</a>
                        </li>
                    </ul>
                        <div className="social" >
                            <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for a country..."/>
                        </div>
                </div>
            </div>
        </div>

    )
}
