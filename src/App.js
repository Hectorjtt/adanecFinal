import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Noticias from './components/Noticias';
import QuienesSomos from './components/QuienesSomos';
import Transparencia from './components/Transparencia';
import Clinica from './components/Clinica';
import Dona from './components/Dona';
import Contactanos from './components/Contactanos';
import Footer from './components/Footer';
import IndicadorPagina from './components/IndicadorPagina';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    // Siempre iniciar en 'inicio', pero permitir hash para enlaces compartidos
    const hash = window.location.hash.substring(1);
    // Solo usar el hash si es una página válida, de lo contrario usar 'inicio'
    const validPages = ['inicio', 'noticias', 'transparencia', 'quienes-somos', 'clinica', 'dona', 'contactanos'];
    return (hash && validPages.includes(hash)) ? hash : 'inicio';
  });

  // Actualizar la URL con el hash, pero no guardar en localStorage
  useEffect(() => {
    window.location.hash = currentPage;
  }, [currentPage]);

  // Hacer scroll hacia arriba cuando cambie la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Manejar cambios en la URL cuando el usuario navega con la barra de dirección
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && hash !== currentPage) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'inicio':
        return <Inicio setCurrentPage={setCurrentPage} />;
      case 'noticias':
        return <Noticias />;
      case 'transparencia':
        return <Transparencia />;
      case 'quienes-somos':
        return <QuienesSomos />;
      case 'clinica':
        return <Clinica />;
      case 'dona':
        return <Dona />;
      case 'contactanos':
        return <Contactanos />;
      default:
        return <Inicio setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="relative">
        <IndicadorPagina currentPage={currentPage} />
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
