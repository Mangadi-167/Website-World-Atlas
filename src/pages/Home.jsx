import HeroImage from '../assets/images/hero2.png';

export const Home = () => {
  return (
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
              <a href="#" className="bg-blue-700 hover:bg-blue-600 text-white transition-all duration-300 py-3 px-6 rounded-full inline-block font-semibold">
                Tentang Kami
              </a>
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


  )
}
