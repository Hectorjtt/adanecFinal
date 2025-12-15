import React from 'react';
import './Transparencia.css';
import imagenTransparencia from '../assets/images/transparencia.png';
import informesImg from '../assets/images/informes.png';

const Transparencia = () => {
  const informes = [
    {
      año: '2024',
      titulo: 'Informe anual 2024',
      subtitulo: 'Disponible su descarga',
      url: 'https://www.adanec.org/_files/ugd/655df7_4decfd9630b044138a7d8fe6f67489f5.pdf',
      disponible: true
    },
    {
      año: '2023',
      titulo: 'Informe anual 2023',
      subtitulo: 'Disponible su descarga',
      url: 'https://www.adanec.org/_files/ugd/655df7_a312ae92a1f944bd9cc3b2ab10790906.pdf',
      disponible: true
    },
    {
      año: '2022',
      titulo: 'Informe anual 2022',
      subtitulo: 'Próximamente disponible',
      url: null,
      disponible: false
    },
    {
      año: '2021',
      titulo: 'Informe anual 2021',
      subtitulo: 'Disponible su descarga',
      url: 'https://www.adanec.org/_files/ugd/655df7_3664d7318a844cf7a34b29582d7e6bdb.pdf',
      disponible: true
    },
    {
      año: '2020',
      titulo: 'Informe anual 2020',
      subtitulo: 'Disponible su descarga',
      url: 'https://www.adanec.org/_files/ugd/655df7_db569a57ca6548de9472616b755af515.pdf',
      disponible: true
    }
  ];

  const handleInformeClick = (informe) => {
    if (informe.disponible && informe.url) {
      // Abrir el PDF en una nueva pestaña
      window.open(informe.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="transparencia-page">
      
      <div className="transparencia-content">
        <div className="content-left">
          <h1 className="page-title">Rendición de cuentas</h1>
          <p className="page-subtitle">
            Conoce cómo utilizamos los recursos y el impacto de nuestras actividades a través de 
            nuestros informes anuales.
          </p>
          
          <div className="informes-list">
            {informes.map((informe, index) => (
              <div 
                key={index} 
                className={`informe-item ${informe.disponible ? 'clickeable' : 'no-disponible'}`}
                onClick={() => handleInformeClick(informe)}
              >
                <div className="informe-icon">
                  <div className="informe-icon-circle">
                    <img 
                      src={informesImg} 
                      alt="Informe"
                      className="informe-icon-image"
                    />
                  </div>
                </div>
                <div className="informe-info">
                  <h3 className="informe-titulo">{informe.titulo}</h3>
                  <p className="informe-subtitulo">{informe.subtitulo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="content-right">
          <div className="child-image">
            <img 
              src={imagenTransparencia} 
              alt="Imagen de transparencia"
              className="child-photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparencia;
