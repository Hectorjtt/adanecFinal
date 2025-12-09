/**
 * Utilidad para obtener URLs de videos desde Cloudflare R2
 * Si REACT_APP_R2_PUBLIC_URL está configurado, usa R2
 * Si no, usa los archivos locales (para desarrollo)
 */

const getVideoUrl = (path, videoName) => {
  const r2BaseUrl = process.env.REACT_APP_R2_PUBLIC_URL;
  
  // Debug: mostrar estado de configuración
  console.log('[VideoUrls Debug]', {
    hasR2BaseUrl: !!r2BaseUrl,
    r2BaseUrl: r2BaseUrl,
    path: path,
    videoName: videoName
  });
  
  if (r2BaseUrl) {
    // Usar Cloudflare R2
    // Limpiar la URL base (remover / al final si existe)
    let cleanBaseUrl = r2BaseUrl.endsWith('/') ? r2BaseUrl.slice(0, -1) : r2BaseUrl;
    
    // Remover el nombre del bucket si está en la URL base
    // El dominio público de R2 ya apunta al bucket, no necesita el nombre del bucket en la URL
    // Ejemplo: https://pub-xxx.r2.dev/videos-adanec -> https://pub-xxx.r2.dev
    if (cleanBaseUrl.includes('/videos-adanec')) {
      cleanBaseUrl = cleanBaseUrl.replace('/videos-adanec', '');
    }
    
    // Limpiar el path (asegurar que empiece con /)
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    
    // Codificar el nombre del video para URLs (maneja espacios y caracteres especiales)
    const encodedVideoName = encodeURIComponent(videoName);
    
    // Construir la URL completa: baseUrl + path + videoName
    // Ejemplo: https://pub-xxx.r2.dev/videos/testimonio.mp4
    const finalUrl = `${cleanBaseUrl}${cleanPath}/${encodedVideoName}`;
    
    // Debug: mostrar URL generada
    console.log(`[R2 Video URL] ${videoName}:`, finalUrl);
    
    return finalUrl;
  }
  
  // Fallback a archivos locales (desarrollo)
  console.warn(`[Video URL] ⚠️ R2 no configurado, usando local: ${path}/${videoName}`);
  return `${path}/${videoName}`;
};

export const getTestimonioVideoUrl = (videoName) => {
  return getVideoUrl('/videos', videoName);
};

export const getCampanaVideoUrl = (videoName) => {
  return getVideoUrl('/campañas-eventos', videoName);
};



