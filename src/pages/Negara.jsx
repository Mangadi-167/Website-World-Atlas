import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryCard from '../components/CountryCard';
import usePageTitle from '../hooks/usePageTitle';

const Negara = () => {
  usePageTitle('Negara');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,population,region,cca3');

        setCountries(response.data); 
      } catch (err) {
        setError('Gagal memuat data negara. Silakan coba lagi.');
      } finally {
        setLoading(false); 
      }
    };

    fetchAllCountries();
  }, []);
  if (loading) {
    return <div className="min-h-screen pt-32 text-center dark:text-white">Memuat data negara...</div>;
  }
  if (error) {
    return <div className="min-h-screen pt-32 text-center text-red-500">{error}</div>;
  }

  return (
    <section className="homepage min-h-screen flex items-center pt-30 pb-12 lg:px-30">
      <div className="container mx-auto px-4">
         <h1 className="text-center text-2xl lg:text-3xl font-medium dark:text-white mb-12">Jelajahi <span className="text-blue-700">250+</span> Negara</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Negara;