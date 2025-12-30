export default function Hero() {
  const scrollToRooms = () => {
    const element = document.getElementById('rooms');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Bienvenue à l'Hostal Paradis
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Votre refuge de confort et d'authenticité au cœur de la ville
        </p>
        <button
          onClick={scrollToRooms}
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
        >
          Découvrir nos chambres
        </button>
      </div>
    </section>
  );
}
