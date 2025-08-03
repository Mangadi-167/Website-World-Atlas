import HeroImage from '../assets/images/hero2.png';

export const Home = () => {
  return (
    <div className="homepage min-h-screen flex items-center pt-24 pb-12 lg:px-30">
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




        <div className="">
          <div className="h-auto mt-6">
            <h1 className="text-center text-2xl lg:text-3xl font-medium dark:text-white">Jelajahi <span className="text-blue-700">250+</span> Negara</h1>

          
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
              <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group dark:bg-gray-800">
                <div class="relative">
                  <img src="https://plus.unsplash.com/premium_photo-1680346529160-549ad950bd1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" class="w-full h-60 object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div class="p-5">
                  <h3 class="text-lg font-bold text-gray-900 mb-1 dark:text-white">Indonesia</h3>
                  <p class="text-sm text-gray-500 mb-2 dark:text-gray-400">Memiliki 37 Provinsi</p>
                  <div class="flex justify-between items-center mt-4">
                    <span class="text-lg font-semibold text-blue-700">200jt Penduduk</span>
                    <button class="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 dark:bg-blue-700 dark:hover:bg-blue-500">Lihat</button>
                  </div>
                </div>
              </div>

             

            </div>



          </div>
        </div>
      </div>
    </div>




  )
}
