import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import usePageTitle from '../hooks/usePageTitle';

const CountryDetail = () => {
    usePageTitle('Detail Negara');
    const { countryName } = useParams(); 
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountryDetail = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
                setCountry(response.data[0]);
            } catch (err) {
                setError('Tidak dapat menemukan detail negara.');
            } finally {
                setLoading(false);
            }
        };

        fetchCountryDetail();
    }, [countryName]); 

    if (loading) return <div className="min-h-screen pt-32 text-center dark:text-white">Memuat detail...</div>;
    if (error) return <div className="min-h-screen pt-32 text-center text-red-500">{error}</div>;

    return (
        <div className="homepage min-h-screen flex items-center pt-24 pb-12 lg:px-30">
            <div className="container mx-auto px-4">
                {country && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
                        <div>
                            <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="w-full rounded-lg shadow-lg" />
                        </div>
                        <div className="dark:text-white">
                            <h1 className="text-4xl font-bold mb-6">{country.name.common}</h1>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                <p><span className="font-semibold">Nama Resmi:</span> {country.name.official}</p>
                                <p><span className="font-semibold">Ibu Kota:</span> {country.capital?.join(', ')}</p>
                                <p><span className="font-semibold">Populasi:</span> {new Intl.NumberFormat('id-ID').format(country.population)}</p>
                                <p><span className="font-semibold">Benua:</span> {country.continents?.join(', ')}</p>
                                <p><span className="font-semibold">Region:</span> {country.region}</p>
                                <p><span className="font-semibold">Sub Region:</span> {country.subregion}</p>
                                <p><span className="font-semibold">Mata Uang:</span> {Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(', ')}</p>
                                <p><span className="font-semibold">Bahasa:</span> {Object.values(country.languages).join(', ')}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CountryDetail;
