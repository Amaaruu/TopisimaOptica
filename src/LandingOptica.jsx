import React from 'react';
// Importamos el logo desde la carpeta assets
import logoImg from './assets/logo topisima.jpg';

const LandingOptica = () => {
  // Base de datos de sucursales para mapearlas fácilmente
  const sucursales = [
    { nombre: 'Santiago', rating: '4.8', reviews: 322, dir: 'Teatinos 342, 8320000 RM', fono: '992120467' },
    { nombre: 'Rancagua', rating: '5.0', reviews: 989, dir: 'P.º Independencia 692, local 71', fono: '979622306' },
    { nombre: 'Viña del Mar', rating: '4.8', reviews: 150, dir: 'Arlegui 262, Valparaíso', fono: '972874117' },
    { nombre: 'Chillán', rating: '4.8', reviews: 140, dir: 'Av. Libertad 768, local 1', fono: '956767987' },
    { nombre: 'Curicó', rating: '4.9', reviews: 757, dir: 'Merced esq. Membrillar, Maule', fono: '974131249' },
    { nombre: 'Talca', rating: '4.9', reviews: 222, dir: 'Calle 6 Ote. 1035, Maule', fono: '967040741' },
    { nombre: 'Linares', rating: '5.0', reviews: 479, dir: "O'Higgins 701, Maule", fono: '990805740' },
  ];

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Barra de Navegación */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="text-xl font-black text-pink-600 tracking-tighter flex items-center gap-2">
          {/* Logo pequeño en el nav */}
          <img src={logoImg} alt="Logo" className="h-8 w-8 rounded-full object-cover" />
          TOPÍSIMA
        </div>
        <div className="hidden md:flex space-x-6 font-medium text-gray-600">
          <a href="#nosotros" className="hover:text-pink-500 transition">Nosotros</a>
          <a href="#servicios" className="hover:text-pink-500 transition">Servicios</a>
          <a href="#chequeo" className="hover:text-pink-500 transition">Chequeo Gratis</a>
          <a href="#sucursales" className="hover:text-pink-500 transition">Sucursales</a>
        </div>
        <a href="#sucursales" className="bg-pink-600 text-white px-5 py-2 rounded-full font-bold hover:bg-pink-700 transition text-sm">
          Cotiza Aquí
        </a>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-pink-600 to-fuchsia-700 py-24 px-6 text-center text-white overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          
          {/* Logo Centrado */}
          <div className="mb-8 p-1 bg-white/20 rounded-3xl backdrop-blur-sm shadow-2xl">
            <img 
              src={logoImg} 
              alt="Topísima Óptica" 
              className="h-28 w-28 md:h-36 md:w-36 rounded-[1.5rem] object-cover"
            />
          </div>

          <span className="uppercase tracking-widest text-pink-200 font-bold text-sm">Salud Visual con Estilo</span>
          <h1 className="text-5xl md:text-7xl font-black mt-2 mb-6 leading-tight">
            Mira el mundo con <br/><span className="text-pink-200">mejor actitud.</span>
          </h1>
          <p className="text-xl text-pink-50 mb-10 max-w-2xl mx-auto font-medium">
            Lentes con estilo, atención personalizada y la mejor tecnología para tus ojos.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 w-full md:w-auto">
            <a href="#chequeo" className="bg-white text-pink-600 px-8 py-4 rounded-xl font-black text-lg hover:bg-pink-50 transition shadow-lg">
              AGENDAR EXAMEN GRATIS
            </a>
          </div>
        </div>
      </header>

      {/* Barra de Beneficios (Minimalista) */}
      <div className="bg-gray-900 text-white py-4 overflow-hidden border-b-4 border-pink-500">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 px-4 text-sm md:text-base font-medium">
          <span className="flex items-center gap-2">📱 Filtro Bluelight para pantallas</span>
          <span className="flex items-center gap-2">🇨🇱 Enviamos a todo Chile</span>
          <span className="flex items-center gap-2">💳 Todo medio de pago</span>
        </div>
      </div>

      {/* Sección Nosotros */}
      <section id="nosotros" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-pink-50 rounded-[2rem] p-8 shadow-inner relative overflow-hidden flex justify-center items-center h-full min-h-[300px]">
            {/* Elemento de diseño abstracto */}
            <div className="absolute w-64 h-64 bg-fuchsia-200 rounded-full blur-3xl opacity-50 -top-10 -left-10"></div>
            <div className="absolute w-64 h-64 bg-pink-300 rounded-full blur-3xl opacity-50 -bottom-10 -right-10"></div>
            <h2 className="text-4xl font-black text-pink-600/20 text-center z-10 leading-none">MÁS DE 7 <br/> SUCURSALES <br/> EN CHILE</h2>
          </div>
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-6">Nuestra Historia</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              En <strong>Topísima Óptica</strong>, no solo vendemos lentes; cuidamos tu forma de ver el mundo. Somos una red en constante crecimiento, llevando salud visual de calidad y diseños vanguardistas a lo largo de todo Chile.
            </p>
            <div className="bg-pink-50 p-6 rounded-2xl border-l-4 border-pink-500">
              <p className="text-pink-800 font-medium">
                Miles de clientes confían en nosotros diariamente. Descubre por qué nuestras sucursales tienen calificaciones casi perfectas en Google.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Chequeo */}
      <section id="chequeo" className="py-16 px-6 bg-pink-50">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] p-8 md:p-14 shadow-xl border border-pink-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-pink-600 text-white px-6 py-2 font-black rounded-bl-2xl text-sm md:text-base">
            ¡SIN COSTO!
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-pink-600 mb-4">Examen Visual Gratis</h2>
              <p className="text-gray-600 mb-6">
                Visítanos en cualquiera de nuestras sucursales y realiza tu chequeo preventivo sin compromiso.
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <span className="text-pink-500 font-bold uppercase text-xs tracking-wider">Línea Económica</span>
                <p className="text-2xl font-black text-gray-900 mt-1">Lentes desde <span className="text-pink-600">$24.990</span></p>
              </div>
            </div>
            <div className="text-center space-y-4 bg-pink-50 p-8 rounded-3xl">
              <p className="font-bold text-gray-800">Habla con un asesor ahora</p>
              <a href="#sucursales" className="block w-full bg-green-500 text-white py-4 rounded-xl font-black text-lg hover:bg-green-600 transition shadow-lg shadow-green-200">
                COTIZAR POR WHATSAPP
              </a>
              <p className="text-xs text-gray-500 font-medium">Atención rápida y personalizada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Sucursales y Contacto (Diseño de Tarjetas) */}
      <section id="sucursales" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-pink-400 mb-4">Nuestras Sucursales</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Encuentra la Topísima Óptica más cercana a ti. Selecciona tu ciudad para contactarnos directamente.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sucursales.map((sucursal, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-pink-500 hover:bg-white/10 transition group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-pink-300 transition">{sucursal.nombre}</h3>
                  <div className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    ⭐ {sucursal.rating} <span className="text-xs text-yellow-400/70 font-normal">({sucursal.reviews})</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-6 h-10">{sucursal.dir}</p>
                <a 
                  href={`https://wa.me/56${sucursal.fono}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full flex justify-center items-center gap-2 py-3 bg-white/10 rounded-xl font-bold text-sm hover:bg-green-500 hover:text-white transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Contactar Local
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer con Redes Sociales */}
      <footer className="py-12 px-6 text-center text-gray-400 border-t border-gray-800 bg-gray-950">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <img src={logoImg} alt="Topísima" className="h-12 w-12 rounded-full mb-6 grayscale opacity-50" />
          
          <div className="flex gap-6 mb-8">
            <a href="https://www.instagram.com/opticatopisima/" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
              <span className="sr-only">Instagram</span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.facebook.com/opticatopisima/" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
              <span className="sr-only">Facebook</span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
          </div>

          <p className="font-medium text-sm">© 2026 Topísima Óptica. Diseñada para ver mejor.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingOptica;