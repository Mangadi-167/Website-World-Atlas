import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/images/hero2.png';
import CountryCard from '../components/CountryCard';
import usePageTitle from '../hooks/usePageTitle';


const Home = () => {
  usePageTitle('Beranda');
  return (
    <>
      <section className="homepage min-h-screen flex items-center pt-24 pb-12 lg:px-30">
        <div className="container mx-auto px-4">
          <div className="hero flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="text-container flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
              <h1 className="order-1 text-2xl lg:text-4xl/tight font-bold text-slate-800 dark:text-white">
                Jelajahi Setiap Sudut Dunia
              </h1>
              <div className="order-3 lg:order-2 mt-6">
                <p className="text-base leading-relaxed mb-8 text-slate-600 dark:text-slate-300 text-justify">
                  Temukan informasi mendetail tentang negara-negara di seluruh dunia, mulai dari bendera, populasi, hingga ibu kotanya. Semua data yang Anda butuhkan ada di sini.
                </p>
                <Link to="/tentang-kami" className="bg-blue-700 hover:bg-blue-600 text-white transition-all duration-300 py-3 px-6 rounded-full inline-block font-semibold">
                  Tentang Kami
                </Link>
              </div>
            </div>
            <div className="image-container order-2 lg:order-3 lg:w-1/2 flex justify-center mt-0 lg:mt-0">
              <img
                src={HeroImage}
                alt="Hero Image"
                className="w-full max-w-xs sm:max-w-sm lg:max-w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      <FeaturedCountriesSection />
    </>
  );
};

const FeaturedCountriesSection = () => {
  const [randomCountries, setRandomCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndSelect = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,population,region,cca3');

        const shuffled = response.data.sort(() => 0.5 - Math.random());
        setRandomCountries(shuffled.slice(0, 3));
      } catch (err) {
        console.error("Gagal mengambil data untuk Beranda:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAndSelect();
  }, []);

  return (
    <section className="homepage h-auto flex items-center pt-8 pb-12 lg:px-30 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="h-auto mt-6">
          <h1 className="text-center text-2xl lg:text-3xl font-medium dark:text-white">Jelajahi <span className="text-blue-700">250+</span> Negara</h1>

          <div className=" mt-4 text-right mb-4">
              <a href="/negara" className='text-blue-500 hover:underline'>Lihat lainya</a>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <p className="dark:text-white col-span-3 text-center">Memuat negara...</p>
          ) : (
            randomCountries.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;