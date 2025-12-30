export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Notre Histoire</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Notre équipe à l'Hostal Paradis"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Fondé en 2015, l'Hostal Paradis est né de la passion de créer un lieu où les voyageurs
              du monde entier peuvent se sentir chez eux. Notre établissement familial combine
              l'authenticité d'un hébergement traditionnel avec le confort moderne que vous méritez.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Situé dans un quartier vivant et sécurisé, notre hostal vous offre un accès facile
              aux principales attractions touristiques, aux restaurants locaux et aux transports en commun.
              Que vous soyez en voyage d'affaires ou en vacances, nous avons la chambre parfaite pour vous.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Notre équipe multilingue est à votre disposition pour vous conseiller sur les meilleurs
              endroits à visiter, les restaurants à ne pas manquer, et pour rendre votre séjour
              aussi agréable que possible. Nous croyons que l'hospitalité va au-delà du simple
              hébergement : c'est créer des expériences mémorables et des amitiés durables.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Nos Valeurs</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-gray-700">Accueil chaleureux et personnalisé</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-gray-700">Respect de l'environnement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-gray-700">Qualité et propreté irréprochables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-gray-700">Engagement envers notre communauté locale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
