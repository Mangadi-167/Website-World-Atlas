import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
    const formattedPopulation = new Intl.NumberFormat('id-ID').format(country.population);

    return (
        <Link to={`/country/${country.name.common}`}>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group dark:bg-gray-800 h-full flex flex-col">
                <div className="relative">
                    <img 
                        src={country.flags.svg} 
                        alt={`Bendera ${country.name.common}`} 
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform" 
                    />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 dark:text-white">{country.name.common}</h3>
                    <p className="text-sm text-gray-500 mb-2 dark:text-gray-400">Region: {country.region}</p>
                    <div className="flex justify-between items-center mt-auto pt-4">
                        <span className="text-lg font-semibold text-blue-700">{formattedPopulation} Jiwa</span>
                        <span className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 dark:bg-blue-700 dark:hover:bg-blue-500 text-sm">Lihat</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CountryCard;