import React, { useState } from 'react';
import './Clinica.css';
import ClinicaModal from './ClinicaModal';
import { getTestimonioVideoUrl } from '../utils/videoUrls';
import dona4Img from '../assets/images/dona4.png';
import dona5Img from '../assets/images/dona5.png';
import clinica1Img from '../assets/images/clinica1.png';
import clinica2Img from '../assets/images/clinica2.png';
import clinica3Img from '../assets/images/clinica3.png';
import clinica4Img from '../assets/images/clinica4.png';
import clinica5Img from '../assets/images/clinica5.png';
import clinica6Img from '../assets/images/clinica6.png';
import clinica7Img from '../assets/images/clinica7.png';
import clinica8Img from '../assets/images/clinica8.png';

const Clinica = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleIconClick = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const serviciosInfo = [
    {
      titulo: '¿Qué son las cardiopatías?',
      icono: '👶',
      imagen: clinica1Img,
      description: 'Las cardiopatías congénitas son defectos en la estructura del corazón que se originan por alteraciones durante el desarrollo fetal. Se consideran la patología congénita más frecuente, con un alto número de nacimientos afectados cada día.'
    },
    {
      titulo: '¿Se pueden curar?',
      icono: '❤️',
      imagen: clinica2Img,
      description: 'Las cardiopatías congénitas son una patología crónica que requiere atención especializada de por vida. Pueden ser simples o complejas, afectando uno o varios componentes del corazón. El tratamiento varía según cada caso: algunos bebés requieren cirugía pocos días después de nacer, otros meses o años después, y muchos deben someterse a múltiples intervenciones a lo largo de su vida.'
    },
    {
      titulo: 'Impacto en México',
      icono: '🇲🇽',
      imagen: clinica3Img,
      description: 'Las malformaciones congénitas representan la segunda causa de muerte en niños en México, dentro de las cuales las cardiopatías congénitas ocupan el primer lugar como la principal causa de fallecimiento en esta población. En México nacen al año un promedio de 18,000 niños con algún padecimiento del corazón. En todo el país se realizan anualmente cerca de 5,000 cirugías de corazón quedando un rezago de 13,000 niños sin atención médica quirúrgica oportuna.'
    }
  ];

  const programas = [
    {
      titulo: 'Cirugías Pequeños Corazones',
      icono: '❤️',
      imagen: clinica4Img,
      descripcion: 'Cirugías especializadas para niños',
      description: 'Con el Programa de Pequeños Corazones por ADANEC, buscamos mejorar la calidad de vida de los niños mexicanos que sufren de enfermedades del corazón, brindándoles una atención médica adecuada y oportuna, y así contribuir a reducir el impacto de estas enfermedades en nuestra sociedad. Realizamos campañas de diagnóstico y cirugías de corazón, hasta el tratamiento post-operatorio.'
    },
    {
      titulo: 'Medicinas y tratamientos',
      icono: '🏥',
      imagen: clinica5Img,
      descripcion: 'Tratamientos médicos especializados',
      description: 'El programa de medicina y tratamientos brinda asistencia en la adquisición de medicamentos necesarios para los pacientes, ya sea provenientes de consultas pediátricas, neurología, cardiología y oftalmología. Nos aseguramos de que los niños tengan acceso a los medicamentos específicos que necesitan para su tratamiento.'
    },
    {
      titulo: 'Consulta y diagnóstico',
      icono: '📋',
      imagen: clinica6Img,
      descripcion: 'Diagnósticos tempranos y precisos',
      description: 'Este programa ofrece consultas especializadas en diversas áreas médicas, como psicología, neurología, oftalmología, endocrinología, otorrinolaringología, genética, nutrición, neurodesarrollo, cardiología y medicina fetal. Referimos a los pacientes a las consultas correspondientes y brindamos seguimiento para evaluar la evolución de su diagnóstico.'
    },
    {
      titulo: 'Alimentación',
      icono: '🍎',
      imagen: clinica7Img,
      descripcion: 'Programas nutricionales especializados',
      description: 'Este programa de alimentación ofrece consultas de nutrición que incluyen valoración nutricional, plan de alimentación personalizado y seguimiento continuo. Trabajamos para garantizar que los niños reciban una nutrición adecuada que contribuya a su bienestar y recuperación.'
    },
    {
      titulo: 'Medicina y cirugía fetal',
      icono: '🤱',
      imagen: clinica8Img,
      descripcion: 'Atención médica prenatal especializada',
      description: 'Nuestro objetivo es proporcionar los insumos necesarios para la atención de bebes en gestación que han sido diagnosticados con alguna malformación congénita como la espina bífida, ciertas malformaciones del corazón, atresias esofágicas, estenosis pulmonares.'
    }
  ];

  return (
    <div className="clinica-page">
      
      <div className="clinica-content">
        {/* Sección principal */}
        <div className="hero-section">
          <h1 className="clinica-main-title">¿Qué es una</h1>
          <h1 className="clinica-main-title-highlight">CARDIOPATÍA CONGÉNITA?</h1>
          <p className="clinica-main-description">
            Una cardiopatía congénita es un defecto del corazón con el que nace un niño y que, 
            con atención oportuna, puede transformarse en esperanza de vida.
          </p>
        </div>

        {/* Sección de información con iconos */}
        <div className="info-section">
          <div className="info-cards">
            {serviciosInfo.map((servicio, index) => (
              <div key={index} className="info-card" onClick={() => handleIconClick({
                title: servicio.titulo,
                icon: servicio.imagen,
                description: servicio.description
              })}>
                <div className={`info-icon-circle ${index === 1 ? 'heart-background' : ''}`}>
                  <img 
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    className={`info-icon-image info-icon-image-${index + 1}`}
                  />
                </div>
                <h3 className="info-title">{servicio.titulo}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Clínica Pediátrica */}
        <div className="clinic-section">
          <div className="clinic-header">
            <div className="clinic-icon" onClick={() => handleIconClick({
              title: 'Clínica Pediátrica',
              icon: dona4Img,
              description: 'La Clínica Pediátrica ADANEC es una clínica especializada en la atención médica infantil. Ofrecemos consultas en diversas subespecialidades, como Pediatría en el Desarrollo, Neurología, Genética, Oftalmología, Psicología, Nutrición y Cardiología. Nuestro objetivo es brindar una atención integral y personalizada, en un ambiente acogedor para los niños y sus familias.'
            })}>
              <div className="clinic-icon-circle">
                <img 
                  src={dona4Img}
                  alt="Clínica Pediátrica"
                  className="clinic-icon-image"
                />
              </div>
            </div>
            <h2 className="clinic-title">Clínica Pediátrica</h2>
          </div>
          
          <div className="programs-header">
            <div className="programs-icon" onClick={() => handleIconClick({
              title: 'Programas',
              icon: dona5Img,
              description: 'Los programas de ADANEC brindan diagnósticos oportunos, cirugías especializadas, atención fetal, nutrición, medicinas y una clínica pediátrica para mejorar la salud y calidad de vida de niños con enfermedades del corazón.'
            })}>
              <div className="programs-icon-circle">
                <img 
                  src={dona5Img}
                  alt="Programas"
                  className="programs-icon-image"
                />
              </div>
            </div>
            <h2 className="programs-title">Programas</h2>
          </div>
          
          <p className="programs-description">
            Los programas de ADANEC brindan diagnósticos oportunos, cirugías especializadas, atención 
            fetal, nutrición, medicinas y una clínica pediátrica para mejorar la salud y calidad de vida de 
            niños con enfermedades del corazón.
          </p>
        </div>

        {/* Sección de servicios */}
        <div className="services-section">
          <div className="services-grid">
            {programas.map((programa, index) => (
              <div key={index} className="service-card" onClick={() => handleIconClick({
                title: programa.titulo,
                icon: programa.imagen,
                description: programa.description
              })}>
                <div className="service-icon-circle">
                  <img 
                    src={programa.imagen}
                    alt={programa.titulo}
                    className="service-icon-image"
                  />
                </div>
                <h3 className="service-title">{programa.titulo}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Testimonios */}
        <div className="testimonios-section">
          <div className="testimonios-header">
            <h2 className="testimonios-title">Testimonios</h2>
            <p className="testimonios-subtitle">
              Escucha los relatos de vida de pacientes con cardiopatías congénitas.
            </p>
          </div>
          
          <div className="testimonios-grid">
            {[
              "testimonio acapulco marco mendez.mp4",
              "testimonio acapulco sergio rosales.mp4", 
              "testimonio acapulco yeimy diaz.mp4",
              "testimonio cirguia cancun karen lopez.mp4",
              "testimonio cirugia saltillo miranda.mp4",
              "testimonio cirugia saltilo nicole galindo.mp4",
              "testimonio clinica psicologia elisa hdz.mp4",
              "testimonio clinica psicologia javier de jesus.mp4",
              "testimonio saltillo pedro solis.mp4",
              "testimonio toluca - mia garcia.mp4",
              "testimonio toluca anibal cruz.mp4",
              "testimonio toluca elisa sanchez.mp4",
              "testimonio jocelyn sanchez medicina fetal.mp4",
              "testimonio karen garcia medicina fetal .mp4"
            ].map((videoName, index) => (
              <div key={index} className="testimonio-card">
                <video 
                  className="testimonio-video"
                  controls
                  preload="metadata"
                  onLoadedMetadata={(e) => {
                    const video = e.target;
                    console.log(`[Video] ✅ Cargado: ${videoName}`, video.src);
                    // Ir al primer frame
                    video.currentTime = 0.1;
                  }}
                  onError={(e) => {
                    const video = e.target;
                    const error = video.error;
                    console.error(`[Video] ❌ Error cargando: ${videoName}`, {
                      errorCode: error?.code,
                      errorMessage: error?.message,
                      src: video.src,
                      networkState: video.networkState,
                      readyState: video.readyState
                    });
                  }}
                  onLoadStart={(e) => {
                    console.log(`[Video] 🔄 Iniciando carga: ${videoName}`, e.target.src);
                  }}
                  onSeeked={(e) => {
                    const video = e.target;
                    if (!video.poster) {
                      try {
                        // Intentar capturar el primer frame como poster
                        // Nota: Esto puede fallar con videos cross-origin (CORS)
                        const canvas = document.createElement('canvas');
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                        video.poster = canvas.toDataURL('image/jpeg', 0.8);
                      } catch (error) {
                        // Si falla por CORS, simplemente no establecer el poster
                        // El video funcionará normalmente sin poster
                        console.debug(`[Video] No se pudo generar poster para ${videoName} (CORS):`, error.message);
                      }
                    }
                  }}
                >
                  <source src={getTestimonioVideoUrl(videoName)} type="video/mp4" />
                  Tu navegador no soporta el elemento video.
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <ClinicaModal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        content={modalContent} 
      />
    </div>
  );
};

export default Clinica;
