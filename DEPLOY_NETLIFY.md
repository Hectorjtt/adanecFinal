# 🚀 Guía de Despliegue en Netlify

## ⚠️ Problema Común: Videos no se muestran en producción

Si los videos funcionan en desarrollo (`npm start`) pero no en Netlify, es porque **faltan las variables de entorno** en la configuración de Netlify.

## 📝 Pasos para Configurar Variables de Entorno en Netlify

### 1. Ve al Dashboard de Netlify

1. Inicia sesión en [Netlify](https://app.netlify.com/)
2. Selecciona tu sitio (el proyecto ADANEC)

### 2. Configura las Variables de Entorno

1. Ve a **Site settings** (Configuración del sitio)
2. En el menú lateral, busca **Environment variables** (Variables de entorno)
3. Haz clic en **Add a variable** (Agregar variable)

### 3. Agrega la Variable Requerida

**Variable necesaria:**
- **Key (Clave):** `REACT_APP_R2_PUBLIC_URL`
- **Value (Valor):** `https://pub-80451220dd0a4ad681ee8be3c8eeb876.r2.dev/videos-adanec`

⚠️ **IMPORTANTE:** 
- El nombre de la variable DEBE empezar con `REACT_APP_` para que React la reconozca
- El valor debe ser exactamente como está en tu archivo `.env` local

### 4. Guarda y Redespliega

1. Haz clic en **Save** (Guardar)
2. Ve a **Deploys** (Despliegues)
3. Haz clic en **Trigger deploy** > **Clear cache and deploy site** (Limpiar caché y desplegar sitio)

## ✅ Verificación

Después del despliegue, verifica en la consola del navegador (F12):
- Deberías ver logs como: `[R2 Video URL] ...` 
- Los videos deberían cargarse correctamente

## 🔍 Si Aún No Funciona

1. **Verifica que la variable esté configurada:**
   - En Netlify: Site settings > Environment variables
   - Debe aparecer `REACT_APP_R2_PUBLIC_URL`

2. **Verifica el valor:**
   - Debe ser: `https://pub-80451220dd0a4ad681ee8be3c8eeb876.r2.dev/videos-adanec`
   - Sin espacios al inicio o final

3. **Limpia el caché de Netlify:**
   - Deploys > Trigger deploy > Clear cache and deploy site

4. **Revisa los logs de build:**
   - En Deploys, abre el último deploy
   - Revisa si hay errores en el build

## 📸 Capturas de Pantalla (Referencia)

### Ubicación de Environment Variables:
```
Netlify Dashboard
  └── Tu Sitio
      └── Site settings
          └── Environment variables (en el menú lateral)
```

### Configuración de la Variable:
```
Key:   REACT_APP_R2_PUBLIC_URL
Value: https://pub-80451220dd0a4ad681ee8be3c8eeb876.r2.dev/videos-adanec
Scope: All scopes (o Production, según prefieras)
```

## 🎯 Resumen Rápido

1. Netlify Dashboard → Tu Sitio → Site settings
2. Environment variables → Add a variable
3. Key: `REACT_APP_R2_PUBLIC_URL`
4. Value: `https://pub-80451220dd0a4ad681ee8be3c8eeb876.r2.dev/videos-adanec`
5. Save → Redesplegar con caché limpio

¡Listo! Los videos deberían funcionar en producción. 🎉


