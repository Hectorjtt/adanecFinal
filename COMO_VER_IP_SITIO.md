# 🔍 Cómo Ver la IP de Tu Sitio Web

## 🎯 Métodos para Encontrar la IP

Hay varias formas de ver la IP de tu sitio. Te muestro las más fáciles:

---

## 🌐 Método 1: Usando la Terminal (Mac/Linux)

### En tu computadora Mac:

1. Abre la **Terminal** (busca "Terminal" en Spotlight)
2. Escribe este comando:

```bash
ping adanecfinal.netlify.app
```

O si ya tienes el dominio configurado:

```bash
ping adanec.org
```

3. Presiona Enter
4. Verás algo como:

```
PING adanecfinal.netlify.app (75.2.60.5): 56 data bytes
```

El número entre paréntesis (`75.2.60.5`) es la IP.

5. Para detener el ping, presiona `Ctrl + C`

---

## 🌐 Método 2: Usando Herramientas Online (MÁS FÁCIL)

### Opción A: whatsmydns.net

1. Ve a [whatsmydns.net](https://www.whatsmydns.net/)
2. Ingresa tu dominio: `adanecfinal.netlify.app` o `adanec.org`
3. Selecciona **"A"** en el tipo de registro
4. Verás la IP de tu sitio

### Opción B: dnschecker.org

1. Ve a [dnschecker.org](https://dnschecker.org/)
2. Ingresa tu dominio
3. Selecciona **"A Record"**
4. Verás la IP y desde dónde se resuelve

### Opción C: mxtoolbox.com

1. Ve a [mxtoolbox.com](https://mxtoolbox.com/DNSLookup.aspx)
2. Ingresa tu dominio
3. Haz clic en **"DNS Lookup"**
4. Busca el registro **"A"** - ahí verás la IP

---

## 🌐 Método 3: Desde Netlify (Para Ver la IP que Netlify Usa)

### Ver la IP en las Instrucciones de DNS:

1. Ve a tu sitio en [Netlify](https://app.netlify.com/)
2. Ve a **Site settings** → **Domain management**
3. Haz clic en **"Pending DNS verification"** (si aún está pendiente)
4. O haz clic en tu dominio y luego en **"DNS"**
5. Verás las instrucciones que incluyen la IP

**Ejemplo de lo que verás:**
```
Point A record to 75.2.60.5
```

Esa es la IP que Netlify usa para tu sitio.

---

## 🌐 Método 4: Usando el Comando `nslookup` (Terminal)

1. Abre la Terminal
2. Escribe:

```bash
nslookup adanecfinal.netlify.app
```

O:

```bash
nslookup adanec.org
```

3. Verás algo como:

```
Name:    adanecfinal.netlify.app
Address: 75.2.60.5
```

El **Address** es la IP.

---

## 🌐 Método 5: Usando el Comando `dig` (Terminal)

1. Abre la Terminal
2. Escribe:

```bash
dig adanecfinal.netlify.app
```

O:

```bash
dig adanec.org
```

3. Busca la línea que dice **"ANSWER SECTION"**
4. Verás algo como:

```
;; ANSWER SECTION:
adanecfinal.netlify.app. 300 IN A 75.2.60.5
```

El número al final (`75.2.60.5`) es la IP.

---

## ⚠️ Importante: Netlify Usa Múltiples IPs

**Nota importante:** Netlify puede usar diferentes IPs dependiendo de:
- La ubicación geográfica del visitante
- El balanceador de carga
- El CDN (Content Delivery Network)

Por eso es mejor usar el **ALIAS/ANAME** o **CNAME** en lugar de un registro A fijo, porque Netlify puede cambiar las IPs automáticamente.

---

## 🎯 Para Tu Caso Específico

### Si usaste Netlify DNS (nameservers):
- Netlify gestiona todo automáticamente
- No necesitas saber la IP específica
- Netlify usa múltiples IPs para mejor rendimiento

### Si usaste registro A:
- La IP que te dio Netlify fue: `75.2.60.5`
- Puedes verificar que está funcionando con los métodos de arriba

---

## 🔍 Verificar que Tu Dominio Apunta Correctamente

### Paso 1: Ver la IP del dominio de Netlify

```bash
ping adanecfinal.netlify.app
```

Anota la IP (ej: `75.2.60.5`)

### Paso 2: Ver la IP de tu dominio personalizado

```bash
ping adanec.org
```

### Paso 3: Comparar

- Si ambas IPs son iguales → ✅ Todo funciona correctamente
- Si son diferentes → ⏳ Aún se está propagando el cambio

---

## 📱 Método Rápido desde el Navegador

También puedes usar herramientas online directamente desde el navegador:

1. **whatsmydns.net** - [https://www.whatsmydns.net/](https://www.whatsmydns.net/)
   - Ingresa tu dominio
   - Selecciona "A Record"
   - Verás la IP

2. **dnschecker.org** - [https://dnschecker.org/](https://dnschecker.org/)
   - Ingresa tu dominio
   - Selecciona "A Record"
   - Verás la IP desde múltiples ubicaciones

---

## 💡 Resumen Rápido

**La forma más fácil:**
1. Ve a [whatsmydns.net](https://www.whatsmydns.net/)
2. Ingresa: `adanecfinal.netlify.app` o `adanec.org`
3. Selecciona **"A Record"**
4. ¡Listo! Verás la IP

**Desde la Terminal (Mac):**
```bash
ping adanecfinal.netlify.app
```
Presiona `Ctrl + C` para detener.

---

## 🎯 ¿Por Qué Puede Cambiar la IP?

Netlify usa un **CDN (Content Delivery Network)**, lo que significa:
- Tu sitio puede tener diferentes IPs en diferentes lugares
- Esto es **normal y bueno** - mejora la velocidad
- Por eso es mejor usar nameservers de Netlify o ALIAS/ANAME en lugar de un registro A fijo

---

¡Espero que esto te ayude a encontrar la IP de tu sitio! 🎉

