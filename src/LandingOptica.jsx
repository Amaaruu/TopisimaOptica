import React from 'react';

const LandingOptica = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Encabezado Principal */}
      <header className="bg-blue-50 py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">
          Topísima Óptica
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Tu salud visual en las mejores manos, en el centro de Santiago.
        </p>
        
        {/* Prueba Social (Estrellas de Google) */}
        <div className="mt-6 inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
          <span className="mr-2">⭐ 4.8/5</span>
          <span className="text-sm font-normal">(Basado en 322 opiniones en Google)</span>
        </div>

        <div className="mt-8">
          <a href="tel:+56992120467" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
            Llamar Ahora
          </a>
        </div>
      </header>

      {/* Sección de Información y Horarios */}
      <section className="py-12 px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Datos de Contacto */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Visítanos</h2>
          
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700">📍 Dirección</h3>
            <p className="text-gray-600">Teatinos 342, 8320000<br/>Santiago, Región Metropolitana</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-700">📞 Teléfono</h3>
            <p className="text-blue-600 font-medium hover:underline">
              <a href="tel:+56992120467">+56 9 9212 0467</a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-2">🕒 Horarios de Atención</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex justify-between border-b border-gray-200 pb-1">
                <span>Lunes a Viernes</span> <span className="font-medium">10:00 a.m. – 6:30 p.m.</span>
              </li>
              <li className="flex justify-between border-b border-gray-200 pb-1">
                <span>Sábado</span> <span className="font-medium">10:00 a.m. – 3:00 p.m.</span>
              </li>
              <li className="flex justify-between text-red-500 font-medium">
                <span>Domingo</span> <span>Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mapa Referencial */}
        <div className="bg-gray-200 rounded-xl overflow-hidden min-h-[350px] flex items-center justify-center shadow-sm relative">
          <p className="text-gray-600 z-10 px-4 text-center font-medium">
            [ Aquí insertaremos el mapa real de Google en el próximo paso ]
          </p>
          <div className="absolute inset-0 bg-blue-100 opacity-40"></div>
        </div>

      </section>

      {/* Pie de página */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p className="text-sm">&copy; 2026 Topísima Óptica. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingOptica;