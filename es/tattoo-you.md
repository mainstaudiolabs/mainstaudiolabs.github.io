<script setup>
import { ref } from 'vue'
const btnText = ref('Copiar Correo')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = '¡Copiado!'
  setTimeout(function() { btnText.value = 'Copiar Correo' }, 2000)
}
</script>

# Tattoo You: Manual de Usuario

**Versión 1.0.0 · Simulación de Amplificador Virtual & Suite de FX Vintage**

<img :src="'/tattoo-you.png'" alt="Tattoo You Plugin GUI" style="max-height: 300px; display: block; margin: 1.5rem auto; border: 2px solid var(--vp-c-border); border-radius: 6px;" />

> **Creado por Fans de los Stones, para Guitarristas:**  
> **Tattoo You** nació de estudiar minuciosamente cada detalle, cinta de sesión y pista en vivo del sonido de guitarra de los Rolling Stones. Creado por fanáticos incondicionales de los Stones y guitarristas experimentados, está diseñado para que simplemente conectes tu guitarra, subas el volumen y te sumerjas de inmediato en el legendario tono de la era 1978–1981, con toda la sensibilidad al tacto, potencia y arrogancia de las grabaciones originales.

---

## 1. Filosofía de Diseño: La Era Dorada de Bulbos & FX (1978–1981)

**Tattoo You** captura el sonido definitivo de guitarra de estudio y escenario de finales de los 70 y principios de los 80 de Keith Richards y los Rolling Stones. Esta era marcó una transición sonora histórica: el paso de la saturación suelta y cruda de los viejos Tweed al diseño de alta ganancia en cascada y gran margen dinámico (headroom) de los **cabezales de bulbos Mesa/Boogie 100W 6L6** combinados con **altavoces 1x12 Electro-Voice EVM-12L** y modulación analógica frontal.

### La Línea de Tiempo Histórica: 1978–1981

1. **Las Sesiones de París (1978 · *Some Girls* / *Beast of Burden*):**  
   En los *Pathé Marconi Studios* de París, Keith introdujo la icónica combinación de tonos limpios de bulbos comprimidos, el barrido óptico líquido del **Phase '78** (estilo MXR Phase 100) y el cálido eco de cinta analógica slapback, inmortalizados en las texturas de guitarra características de *"Beast of Burden"*, *"Miss You"* y *"Shattered"*.

2. **La Era del Overdrive Tropical (1979–1980 · *Emotional Rescue*):**  
   Continuando entre París y *Compass Point Studios* (Nassau), el equipo evolucionó para manejar dinámicas ajustadas de funk-rock (*"Emotional Rescue"*, *"Dance Part 1"*), skanks mordaces de reggae-rock y solos de blues crujientes con una sensibilidad de púa y un headroom sin precedentes.

3. **El Poder de los Riffs Maestros (1981 · *Tattoo You*):**  
   Ensamblado entre París y *Atlantic Studios* (Nueva York), *Tattoo You* representa el cénit de este equipamiento. El inolvidable crujido rítmico en *"Start Me Up"*, la potencia impulsora de *"Little T&A"*, el groove grasiento de *"Slave"* y la agresión rugiente de *"Hang Fire"* y *"Neighbours"* se erigen como referencias fundamentales para el tono de la guitarra rock.

👉 [**Lee la historia completa: Cómo los Stones adquirieron los equipos Mesa/Boogie (1978–1981) →**](/es/history-mesa-stones)

---

## 2. Arquitectura Neuronal de 3 Canales

**Tattoo You** cuenta con un selector de canales de 3 posiciones que cubre todo el espectro tonal del clásico circuito de bulbos 100W 6L6:

| Modo de Canal | Carácter del Tono | Aplicaciones Ideales |
| :--- | :--- | :--- |
| **`CLEAN`** | Tono limpio inmaculado con compresión natural de bulbos, amplio margen dinámico y agudos suaves y cristalinos. | Ritmos de acordes equilibrados (*"Beast of Burden"*, *"Tops"*), arreglos de funk y baladas de soul. |
| **`CRUNCH`** | Borde de ruptura orgánico con un cuerpo sólido en graves, medios contundentes y respuesta táctil inmediata al ataque de la púa. | Riffs de rock clásico icónicos (*"Start Me Up"*, *"Little T&A"*, *"Hang Fire"*), acordes crujientes y ritmos de blues. |
| **`LEAD`** | Saturación de bulbos abrasadora de alta ganancia con rico sustain armónico, sensación líquida al solear y graves enfocados. | Líneas melódicas cantadas, riffs de rock pesados, slide guitar (*"Slave"*, *"Neighbours"*) y solos sostenidos. |

---

## 3. Flujo de Señal y Guía Completa de Controles

```text
[ ENTRADA GUITARRA ]
       │
       ▼
 [ NOISE GATE ADAPTATIVO (-58 dB) ]
       │
       ▼
 [ PHASE '78 ]  ───►  [ SLAPBACK DELAY ]
       │
       ▼
 [ CONTROL DE GANANCIA (GAIN) ]
       │
       ▼
 [ LIMITADOR WAVESHAPER (-0.1 dBFS) ]
       │
       ▼
 [ PREAMP NEURONAL 100W 6L6 (Clean / Crunch / Lead) ]
       │
       ▼
 [ EQ GRÁFICO 5 BANDAS ]  ───►  [ SIMULACIÓN GABINETE EVM-12L ]
       │
       ▼
 [ MASTER OUTPUT ]  ───►  [ SALIDA ESTÉREO ]
```

### 1. Etapa de Entrada & Protección Dinámica

* **`NOISE GATE ADAPTATIVO`:** Ubicado al inicio de la cadena pura de instrumento, elimina automáticamente ruidos de fondo, hum electromagnético y siseos sin cortar el sostenido (*sustain*) de la guitarra (Ataque ultra rápido 1.5ms, Hold 35ms, Release 140ms).
* **`WAVESHAPER / SOFT CLIPPER (-0.1 dBFS)`:** Etapa de compresión analógica suave mediante tangente hiperbólica situada justo antes del motor neuronal NAM. Asegura transparencia total para la dinámica natural del instrumento y previene colapsos o distorsiones digitales ásperas ante picos extremos de señal.

---

### 2. Controles Principales del Amplificador

* **`GAIN` (Volumen / Drive):** Establece el nivel de señal de entrada hacia el amplificador (`1.0` = -9 dB, `7.0` = 0 dB Ganancia Unitaria, `10.0` = +4.5 dB de aumento).
* **`MASTER`:** Volumen de salida analógica limpia (`1.0` = -36 dB volumen de habitación, `7.0` = 0 dB Ganancia Unitaria, `10.0` = +18 dB de aumento).
* **`CHANNEL SELECTOR`:** Selector giratorio de 3 posiciones para alternar entre `CLEAN`, `CRUNCH` y `LEAD`.
* **`STANDBY`:** Interruptor de silencio rápido para pausas o cambios de instrumento.

---

### 2. Ecualizador Gráfico de 5 Bandas

Una recreación auténtica del clásico ecualizador activo de deslizadores Mesa con un interruptor **`EQ IN`** independiente y LED de estado:

* **`80 Hz` (±12 dB):** Golpe profundo de subgraves y resonancia del gabinete.
* **`240 Hz` (±12 dB):** Control de graves-medios (boxiness). Reducirlo limpia el sonido "embarrado".
* **`750 Hz` (±12 dB):** Pegada de rango medio y "ladrido" vocal.
* **`2200 Hz / 2.2 kHz` (±12 dB):** ¡La frecuencia de ataque! Aporta chasquido a la púa y mordida a los acordes.
* **`6600 Hz / 6.6 kHz` (±12 dB):** Aire suave y brillo característico del altavoz EVM-12L.

---

### 3. Suite Dual de FX Vintage Stones '78

Integrado directamente antes de la etapa del preamplificador, replicando el flujo de señal exacto de la pedalera utilizado en discos clásicos:

#### **Phase '78 (Phaser Óptico Estilo MXR Phase 100)**
*Recrea la modulación óptica característica que se escucha en "Beast of Burden", "Shattered" y "Slave", proporcionando un barrido denso e hipnótico que cortaba a través del ataque de dos guitarras de Richards y Ronnie Wood.*
* **`PHASE '78 Toggle & LED Ámbar`:** Activa o puentea el phaser con un consumo de CPU del 0%.
* **`SPEED` (`0.10 Hz` a `8.00 Hz`):** Controla la tasa de modulación del LFO con visualización numérica dinámica en vivo.
* **`INTENS` (`0%` a `100%`):** Controla la profundidad del barrido y la resonancia vocal.

#### **Slapback Delay (Eco de Cinta Analógica)**
*Recrea el cálido eco analógico de repetición única ajustado en el clásico punto dulce de 110 ms.*
* **`DELAY Toggle & LED Rojo`:** Activa o puentea el eco de cinta.
* **`TIME` (`20 ms` a `300 ms`):** Establece el tiempo de retardo con lectura dinámica en milisegundos. Predeterminado: `110 ms` (el punto dulce clásico del slapback de Keith).
* **`REPEATS` (`0%` a `65%`):** Controla la retroalimentación de la cinta (feedback).
* **`MIX` (`0%` a `50%`):** Controla el equilibrio entre la señal con efecto y sin efecto (wet/dry).

---

### 4. Simulación de Gabinete de Estudio 1x12 EVM-12L

El gabinete con puerto 1x12 cargado con un auténtico altavoz Electro-Voice EVM-12L de 200W ofrece un manejo de potencia inmenso, articulación de rango medio incolora y respuesta de graves ajustada. El selector **`CABINET`** ofrece 6 ubicaciones de micrófonos de estudio coherentes de fase más una opción de bypass:

1. **`SM57 SweetSpot`:** Shure SM57 en el borde del cono (cap-edge) — ataque equilibrado, medios ricos y pegada sólida.
2. **`SM57 Warm`:** Shure SM57 en el cono exterior — graves profundos, agudos suaves y texturas cálidas.
3. **`SM57 Direct`:** Shure SM57 en el centro — articulación afilada como una navaja y mordida inmediata.
4. **`SM57 BassPort`:** Shure SM57 en el puerto frontal — golpe de graves extendido (80–100 Hz).
5. **`U87 Studio`:** Condensador de diafragma grande Neumann U87Ai — alta fidelidad, amplio rango dinámico y aire 3D abierto.
6. **`U87 Warm`:** Neumann U87Ai en zona cálida — cuerpo armónico denso sin dureza en agudos.
7. **`Bypass IR`:** Desactiva la simulación de gabinete interno para emparejar con cargadores de IR (Respuestas a Impulsos) de terceros externos.

---

## 4. Presets Recomendados y Guías de Calibración

### Preset 1: "Start Me Up" / "Tattoo You Crunch" (Riff Power)
* **Canal:** `CRUNCH`
* **Gain:** `7.5` | **Master:** `7.5`
* **EQ Gráfico 5-Bandas:** `80Hz: +1.5dB` | `240Hz: -3.0dB` | `750Hz: +2.5dB` | `2.2kHz: +4.0dB` | `6.6kHz: +2.0dB`
* **Phase '78:** `OFF`
* **Slapback Delay:** `OFF` (o `ON` con Mix @ `12%` para una sutil profundidad de sala de estudio)
* **Gabinete:** `SM57 Warm` (o `SM57 SweetSpot`)

### Preset 2: "Beast of Burden" / "Shattered" (El Limpio con Phase Líquido)
* **Canal:** `CLEAN`
* **Gain:** `7.0` | **Master:** `7.0`
* **EQ Gráfico 5-Bandas:** `80Hz: 0dB` | `240Hz: -2.0dB` | `750Hz: +2.0dB` | `2.2kHz: +3.0dB` | `6.6kHz: +1.5dB`
* **Phase '78:** `ON` | Speed: `0.80 Hz` | Intensity: `60%`
* **Slapback Delay:** `ON` | Time: `110 ms` | Repeats: `20%` | Mix: `25%`
* **Gabinete:** `SM57 SweetSpot` (o `U87 Studio`)

### Preset 3: "Emotional Rescue" / "Dance Part 1" (Funk-Rock & Groove Ajustado)
* **Canal:** `CLEAN`
* **Gain:** `6.5` | **Master:** `8.0`
* **EQ Gráfico 5-Bandas:** `80Hz: -1.0dB` | `240Hz: -4.0dB` | `750Hz: +1.0dB` | `2.2kHz: +3.5dB` | `6.6kHz: +3.0dB`
* **Phase '78:** `ON` | Speed: `1.20 Hz` | Intensity: `40%`
* **Slapback Delay:** `OFF`
* **Gabinete:** `SM57 Direct`

### Preset 4: "Slave" / "Neighbours" (Líneas y Solos de Bulbo Cantantes)
* **Canal:** `LEAD`
* **Gain:** `8.0` | **Master:** `7.0`
* **EQ Gráfico 5-Bandas:** `80Hz: +2.0dB` | `240Hz: -1.5dB` | `750Hz: +3.5dB` | `2.2kHz: +3.0dB` | `6.6kHz: +2.0dB`
* **Slapback Delay:** `ON` | Time: `140 ms` | Repeats: `30%` | Mix: `25%`
* **Gabinete:** `SM57 Direct` (o `U87 Studio`)

---

## 5. Especificaciones Técnicas y Soporte de Plataformas

* **Formatos de Plugin:** VST3 (64-bit), Aplicación Standalone (.exe).
* **Sistemas Operativos:**
  * **Windows:** Windows 10 / Windows 11 (x64) - *Disponible Ahora*.
  * **macOS:** Binario Universal (Apple Silicon M1/M2/M3/M4 & Intel x64) / AU, VST3, Standalone - *Próximamente*.
  * **Linux:** Ubuntu / Debian / Arch (VST3, CLAP, Standalone) - *Próximamente*.
* **Motor de Procesamiento:** Arquitectura WaveNet de Modelado Neuronal de Amplificadores (NAM) + Convolución DSP en tiempo real.
* **Resolución de Audio Interna:** Procesamiento de coma flotante de doble precisión de 64 bits.
* **Tasas de Muestreo Soportadas:** 44.1 kHz, 48 kHz, 88.2 kHz, 96 kHz, 176.4 kHz, 192 kHz.
* **Latencia:** Cero latencia (0 muestras) para seguimiento y monitoreo en vivo.

---

<div class="rock-card-contact" style="margin-top: 2.5rem;">
  <div class="rock-card-contact-title">Preguntas, Comentarios y Compartir Mezclas</div>
  <p class="rock-card-contact-desc">Tattoo You fue calibrado por guitarristas para guitarristas. Si tienes preguntas, comentarios o quieres compartir pistas creadas con Tattoo You, ponte en contacto con nosotros:</p>
  <div class="rock-copy-email-wrapper">
    <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
    <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
  </div>
</div>