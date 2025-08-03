import AboutImage from '../assets/images/peta.png';

const TentangKami = () => {
  return (
    <section className="homepage min-h-screen flex items-center pt-24 pb-12 lg:px-30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center pt-16 lg:pt-0">
          <div className="image-container flex justify-center ">
            <img 
              src={AboutImage} 
              alt="Ilustrasi Peta Dunia" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
          <div className="text-container text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Tentang World <span className='text-blue-700'>Atlas</span>
            </h1>
            <p className="text-base lg:text-lg leading-relaxed text-slate-600 dark:text-slate-300 text-justify">
              Selamat datang di World Atlas, destinasi digital Anda untuk menjelajahi data dan fakta menarik dari setiap negara di seluruh dunia. Misi kami adalah menyajikan informasi yang akurat—mulai dari demografi, geografi, hingga bendera—dalam sebuah antarmuka yang bersih, cepat, dan mudah dinavigasi.
            </p>
            <p className="mt-4 text-base lg:text-lg leading-relaxed text-slate-600 dark:text-slate-300 text-justify">
              Baik Anda seorang pelajar yang mengerjakan tugas, traveler yang merencanakan perjalanan, atau sekadar ingin tahu lebih banyak tentang dunia, World Atlas dirancang untuk memuaskan rasa penasaran Anda dengan data yang terverifikasi dan mudah dipahami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TentangKami;