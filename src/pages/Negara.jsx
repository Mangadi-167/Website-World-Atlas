import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';
import usePageTitle from '../hooks/usePageTitle';

const Negara = () => {
    usePageTitle('Semua Negara');
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchParams] = useSearchParams();
    const queryFromUrl = searchParams.get('q') || '';

    const [searchQuery, setSearchQuery] = useState(queryFromUrl);

    useEffect(() => {
        
        setSearchQuery(queryFromUrl);
    }, [queryFromUrl]);

    useEffect(() => {
        const fetchAllCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,population,region,cca3,capital');
                setCountries(response.data);
            } catch (err) {
                setError('Gagal memuat data negara. Silakan coba lagi.');
            } finally {
                setLoading(false);
            }
        };

        fetchAllCountries();
    }, []);

    const filteredCountries = countries.filter(country => {
        const query = searchQuery.toLowerCase();
        const countryName = country.name.common.toLowerCase();
        const capital = country.capital && country.capital.length > 0 ? country.capital[0].toLowerCase() : '';
        return countryName.includes(query) || capital.includes(query);
    });

    if (loading) {
        return <div className="min-h-screen pt-32 text-center dark:text-white">Memuat data negara...</div>;
    }
    if (error) {
        return <div className="min-h-screen pt-32 text-center text-red-500">{error}</div>;
    }

    return (
        <section className="homepage min-h-screen flex items-center pt-24 pb-12 lg:px-30">
            <div className="container mx-auto px-4 mt-4 ">
                <h1 className="text-center text-2xl lg:text-3xl font-medium dark:text-white mb-12">Jelajahi <span className="text-blue-700">250+</span> Negara</h1>
                {filteredCountries.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredCountries.map((country) => (
                            <CountryCard key={country.cca3} country={country} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center dark:text-white text-lg">
                        Tidak ada hasil untuk pencarian <span className="font-semibold">"{searchQuery}"</span>.
                    </p>
                )}
            </div>
        </section>
    );
};

export default Negara;