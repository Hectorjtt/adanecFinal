import React, { useState, useEffect } from 'react';
import './QuienesSomos.css';
import ValueModal from './ValueModal';
import quienes1Img from '../assets/images/quienes1.png';
import quienes2Img from '../assets/images/quienes2.png';
import quienes3Img from '../assets/images/quienes3.png';
import quienes4Img from '../assets/images/quienes4.png';
import mv1Img from '../assets/images/mv1.png';
import mv2Img from '../assets/images/mv2.png';
import mv3Img from '../assets/images/mv3.png';
import mapaImg from '../assets/images/mapa.png';
import circluloImg from '../assets/images/circlulo.png';

// Lista de todas las empresas en el orden en que aparecen en la carpeta
const empresas = [
    '1 SECREATARIA DE IGUALDAD .png',
    '2 SECRETARIA DE SALUD.png',
    '3 ARCA CONTINENTAL.png',
    '4 JESUS MONTEMAYOR.png',
    '5 NACIONAL MONTE DE PIEDAD.jpg',
    '6 KENWORTH.png',
    '7 FRISA.png',
    '02 Brillamont® Blue Logo.png',
    '1200px-Ternium-Logo-1.jpg',
    '7-LATINAMERICAN.png',
    'abc4kids.png',
    'alenlogo.png',
    'amaerimed-hospitals.png',
    'Arca_continental_logo.png',
    'asfm.png',
    'BanBajío_Logotipo.png',
    'bebecardio.png',
    'callcom.png',
    'cemefi.png',
    'centro de primera infancia.jpg',
    'centuryfastenersmex.png',
    'clisa.png',
    'cocoasociacion.jpg',
    'comunidar.png',
    'DEACERO.png',
    'elitebridge.png',
    'Escalando_Fronteras_Official_Logo.png',
    'farmacias-iguales.jpg',
    'femsa.png',
    'field_fastener_mexico_logo.jpg',
    'fomentomoral.png',
    'Fundacion-Promax-1-300x300.png',
    'fundacioncemix.jpg',
    'hidalgomaldonado.png',
    'himalaya logo.jpeg',
    'hotelnuve.png',
    'hvcirugia.png',
    'logo gp.jpg',
    'logo secretaria nl.png',
    'logo smart.png',
    'logo_chapa.jpg',
    'Logo_de_la_UANL.svg.png',
    'Logo_of_the_HEB_Grocery_Company,_LP.png',
    'Logo-ACMES-completo-Trans-300x113.png',
    'logo-else_1.png',
    'Logo-Hospital-Farallon.png',
    'Logo-Trayecto.png',
    'maatadvisory.png',
    'maximacomercial.png',
    'medtronic-logo.png',
    'niños360logo.jpeg',
    'operacioncorazon.jpeg',
    'Oxxo_Logo.svg.png',
    'pkf.jpeg',
    'quintadorada.jpg',
    'ruba.png',
    'salvandolatidos.jpg',
    'sanatorioespañol.png',
    'seca.png',
    'sermedicar.png',
    'serycrecer.png',
    'tecmilenio.png',
    'tecnologico-de-monterrey-blue.png',
    'Terumo.svg.png',
    'TREVIÑO consultores.png',
    'treviñoelizondo.png',
    'udem-logotipo-principal.png',
    'universidadlux.png',
    'upf logo.png',
    'yco.png'
];

const QuienesSomos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('dignidad');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(7);

  const handleValueClick = (value) => {
    setSelectedValue(value);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Detectar tamaño de pantalla y ajustar items por slide
  useEffect(() => {
    const updateItemsPerSlide = () => {
      let newItemsPerSlide;
      if (window.innerWidth <= 480) {
        newItemsPerSlide = 2; // 2 columnas en móviles pequeños
      } else if (window.innerWidth <= 768) {
        newItemsPerSlide = 3; // 3 columnas en tablets/móviles
      } else {
        newItemsPerSlide = 7; // 7 columnas en desktop
      }
      
      setItemsPerSlide(newItemsPerSlide);
      
      // Resetear al primer slide cuando cambia el tamaño de pantalla
      setCurrentSlide(0);
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  // Recalcular totalSlides cuando cambia itemsPerSlide
  const totalSlides = Math.ceil(empresas.length / itemsPerSlide);
  
  // Asegurar que currentSlide no esté fuera de rango
  useEffect(() => {
    if (currentSlide >= totalSlides && totalSlides > 0) {
      setCurrentSlide(totalSlides - 1);
    }
  }, [totalSlides, currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev < totalSlides - 1) {
        return prev + 1;
      }
      return prev; // Se queda en el último slide
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev; // Se queda en el primer slide
    });
  };

  return (
    <div className="quienes-somos-page">
      <div className="quienes-somos-content">
               {/* Sección principal con video y logo */}
               <div className="quienes-somos-hero-section">
          <div className="video-section">
            <div className="video-container">
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/qy_ruQyJYr8?start=4&autoplay=0&rel=0&modestbranding=1"
                title="ADANEC 2025 - DÍA MUNDIAL DE LAS CARDIOPATÍAS CONGÉNITAS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="logo-section">
            <div className="adanec-logo">ADANEC</div>
            <div className="adanec-slogan">30 años cuidando<br />pequeños corazones</div>
          </div>
        </div>

        {/* Sección de información */}
        <div className="info-section">
          <div className="info-content">
            <h2 className="info-title">ADANEC (Asociación de Ayuda a Niños<br />en Estado Crítico A.B.P.)</h2>
            <p className="info-text">
              Es una organización legalmente constituida el 15 de agosto de 1995 en Monterrey, Nuevo León, México. Nuestro compromiso es atender a bebés, niñas, niños y adolescentes en un estado crítico de salud, enfrentando condiciones que ponen en riesgo su vida. Nos esforzamos por garantizar diagnósticos precisos y especializados, facilitando así una atención rápida y eficiente para prevenir pérdidas de vida en casos de enfermedades tratables.
            </p>
          </div>
        </div>

        {/* Sección de estadísticas */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <div className="stat-icon-circle">
                  <img src={quienes1Img} alt="Cirugías de corazón" className="stat-icon-image" />
                </div>
              </div>
              <div className="stat-text">
                <div className="stat-number">84 campañas</div>
                <div className="stat-label">cirugía</div>
                <div className="stat-number">+ 900 cirugías</div>
                <div className="stat-label">de corazón</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <div className="stat-icon-circle">
                  <img src={quienes2Img} alt="Servicios médicos" className="stat-icon-image" />
                </div>
              </div>
              <div className="stat-text">
                <div className="stat-number">+ 39,000</div>
                <div className="stat-label">servicios</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <div className="stat-icon-circle">
                  <img src={quienes3Img} alt="Diagnósticos" className="stat-icon-image" />
                </div>
              </div>
              <div className="stat-text">
                <div className="stat-number">111 campañas</div>
                <div className="stat-label">diagnóstico</div>
                <div className="stat-number">+ 3,680 diagnósticos</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <div className="stat-icon-circle">
                  <img src={quienes4Img} alt="Cirugías fetales" className="stat-icon-image" />
                </div>
              </div>
              <div className="stat-text">
                <div className="stat-number">34 cirugías fetales</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Misión, Visión y Objetivo */}
        <div className="mission-vision-section">
          <div className="mission-vision-grid">
            <div className="mission-vision-card">
              <div className="mv-header">
                <div className="mv-icon">
                  <div className="mv-icon-circle">
                    <img src={mv1Img} alt="Misión" className="mv-icon-image" />
                  </div>
                </div>
                <h3 className="mv-title">MISIÓN</h3>
              </div>
              <div className="mv-content">
                <p className="mv-text">
                  Cuidar, proteger y mejorar la salud de pacientes con cardiopatías congénitas en situación de vulnerabilidad, 
                  mediante un modelo especializado, humanizado y corresponsable, que integra diagnóstico, cirugía y seguimiento 
                  integral en México.
                </p>
              </div>
            </div>

            <div className="mission-vision-card">
              <div className="mv-header">
                <div className="mv-icon">
                  <div className="mv-icon-circle">
                    <img src={mv2Img} alt="Visión" className="mv-icon-image" />
                  </div>
                </div>
                <h3 className="mv-title">VISIÓN</h3>
              </div>
              <div className="mv-content">
                <p className="mv-text">
                  Ser la institución referente nacional en cardiología pediátrica humanizada, reconocida por el impacto medible 
                  de nuestros programas y por elevar la calidad de vida de nuestros pacientes más desfavorecidos y sus familias.
                </p>
              </div>
            </div>

            <div className="mission-vision-card">
              <div className="mv-header">
                <div className="mv-icon">
                  <div className="mv-icon-circle">
                    <img src={mv3Img} alt="Objetivo" className="mv-icon-image" />
                  </div>
                </div>
                <h3 className="mv-title">OBJETIVO</h3>
              </div>
              <div className="mv-content">
                <p className="mv-text">
                  Facilitar el acceso a servicios de salud de tercer nivel para niños y niñas con cardiopatías congénitas, 
                  garantizando atención médica digna, oportuna y de calidad.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Valores */}
        <div className="values-section">
          <div className="values-header">
            <h2 className="values-title">Nuestros Valores</h2>
            <p className="values-subtitle">
              Principios que guían cada uno de nuestras acciones y decisiones
            </p>
          </div>
          
          <div className="values-grid">
            <div className="value-card" onClick={() => handleValueClick('dignidad')}>
              <div className="value-icon-circle">
                <img src={process.env.PUBLIC_URL + "/dignidad.png"} alt="Dignidad" className="value-icon-image" />
              </div>
              <div className="value-label">Dignidad</div>
            </div>

            <div className="value-card" onClick={() => handleValueClick('calidad')}>
              <div className="value-icon-circle">
                <img src={process.env.PUBLIC_URL + "/calidad.png"} alt="Calidad" className="value-icon-image" />
              </div>
              <div className="value-label">Calidad</div>
            </div>

            <div className="value-card" onClick={() => handleValueClick('corresponsabilidad')}>
              <div className="value-icon-circle">
                <img src={process.env.PUBLIC_URL + "/corresponsabilidad.png"} alt="Corresponsabilidad" className="value-icon-image" />
              </div>
              <div className="value-label">Corresponsabilidad</div>
            </div>

            <div className="value-card" onClick={() => handleValueClick('transparencia')}>
              <div className="value-icon-circle">
                <img src={process.env.PUBLIC_URL + "/transparencia.png"} alt="Transparencia" className="value-icon-image" />
              </div>
              <div className="value-label">Transparencia</div>
            </div>

            <div className="value-card" onClick={() => handleValueClick('compromiso')}>
              <div className="value-icon-circle">
                <img src={process.env.PUBLIC_URL + "/compromiso.png"} alt="Compromiso solidario" className="value-icon-image" />
              </div>
              <div className="value-label">Compromiso solidario</div>
            </div>

            <div className="value-card" onClick={() => handleValueClick('innovacion')}>
              <div className="value-icon-circle">
                <img src={process.env.PUBLIC_URL + "/innovacion.png"} alt="Innovación" className="value-icon-image" />
              </div>
              <div className="value-label">Innovación</div>
            </div>
          </div>
        </div>

        {/* Sección de Cobertura Nacional */}
        <div className="coverage-section">
          <div className="coverage-content">
            <div className="coverage-text">
              <h2 className="coverage-title">
                Llegamos a todo <span className="coverage-title-highlight">MÉXICO</span>
              </h2>
              <p className="coverage-description">
                ADANEC tiene presencia en 14 estados de la República Mexicana y brinda atención a pacientes de todo el país a través de 3 oficinas regionales. Cuenta con un staff médico integrado por más de 150 especialistas, entre médicos, enfermeras, técnicos y proveedores voluntarios.
              </p>
            </div>
            
            <div className="coverage-visuals">
              <div className="map-container">
                <img src={mapaImg} alt="Mapa de México" className="mapa-image" />
              </div>
              
              <div className="staff-photo-container">
                <img src={circluloImg} alt="Staff médico" className="staff-photo" />
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Donadores y Alianzas */}
        <div className="donors-alliances-section">
          <div className="donors-alliances-content">
            <h2 className="donors-alliances-title">Donadores y Alianzas</h2>
            <p className="donors-alliances-description">
              El respaldo de nuestros donadores y aliados estratégicos ha sido fundamental para el cumplimiento de nuestra misión. Su compromiso social permite a ADANEC fortalecer programas de diagnóstico oportuno, tratamiento y cirugías de alta especialidad, beneficiando a niños con enfermedades del corazón en situación de vulnerabilidad en todo México.
            </p>
            
            <div className="carousel-container">
              <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
                ‹
              </button>
              
              <div className="carousel-wrapper">
                <div 
                  className="carousel-slide" 
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }, (_, slideIndex) => {
                    const startIndex = slideIndex * itemsPerSlide;
                    const endIndex = startIndex + itemsPerSlide;
                    const slideEmpresas = empresas.slice(startIndex, endIndex);
                    
                    // Solo renderizar si hay empresas en este slide
                    if (slideEmpresas.length === 0) {
                      return null;
                    }
                    
                    return (
                      <div key={slideIndex} className="carousel-slide-content">
                        <div className="donors-circles-grid">
                          {slideEmpresas.map((empresa, index) => (
                            <div key={`${slideIndex}-${index}`} className="donors-circle">
                              <div className="donors-circle-content">
                                <img 
                                  src={process.env.PUBLIC_URL + `/empresas/${empresa}`} 
                                  alt={empresa.replace(/\.(png|jpg|jpeg|svg)$/i, '')} 
                                  className="donors-circle-image" 
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
                ›
              </button>
            </div>
            
            <div className="carousel-dots">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <ValueModal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        value={selectedValue} 
      />
    </div>
  );
};

export default QuienesSomos;
