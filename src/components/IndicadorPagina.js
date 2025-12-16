import React from 'react';
import './IndicadorPagina.css';

const IndicadorPagina = ({ currentPage }) => {
  // No mostrar el indicador en la página de inicio
  if (currentPage === 'inicio') {
    return null;
  }

  const getIndicatorText = () => {
    switch(currentPage) {
      case 'noticias':
        return 'NOTICIAS';
      case 'transparencia':
        return 'TRANSPARENCIA';
      case 'quienes-somos':
        return 'QUIÉNES SOMOS';
      case 'clinica':
        return 'CLÍNICA';
      case 'contactanos':
        return 'CONTÁCTANOS';
      case 'dona':
        return 'HAZ TU DONATIVO';
      default:
        return 'NOTICIAS';
    }
  };

  const getIndicatorClass = () => {
    switch(currentPage) {
      case 'noticias':
        return 'noticias-indicator';
      case 'transparencia':
        return 'transparencia-indicator';
      case 'quienes-somos':
        return 'quienes-indicator';
      case 'clinica':
        return 'clinica-indicator';
      case 'contactanos':
        return 'contactanos-indicator';
      case 'dona':
        return 'dona-indicator';
      default:
        return 'noticias-indicator';
    }
  };

  // Si es la página de dona, hacer el indicador clickeable
  if (currentPage === 'dona') {
    return (
      <a 
        href="https://assistant.velpay.mx/recurring-payment/12523"
        target="_blank"
        rel="noopener noreferrer"
        className={`page-indicator ${getIndicatorClass()} clickable-indicator`}
      >
        {getIndicatorText()}
      </a>
    );
  }

  return (
    <div className={`page-indicator ${getIndicatorClass()}`}>
      {getIndicatorText()}
    </div>
  );
};

export default IndicadorPagina;
