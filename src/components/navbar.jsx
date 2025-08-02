import { useState } from 'react';
import SearchBar from './SearchBar';

export const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div className="navbar fixed w-full transition-all py-4 bg-yellow-700">
            <div className="container mx-auto px-4 ">
                <div className="navbar-box flex items-center justify-between ">
                    <div className="logo">
                        <h2 className="text-2xl font-bold">World Atlas</h2>
                    </div>
                    <ul className="flex items-center gap-12">
                        <li>
                            <a href="" className="font-medium opacity-75">Home</a>
                        </li>
                        <li>
                            <a href="" className="font-medium opacity-75">About</a>
                        </li>
                    </ul>
                    <div className="socials flex items-center gap-4">
                        <div className="social" >
                            <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for a country..."/>
                        </div>
                        <div className="social" >
                            <a>Drak Mode</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
