<script setup>
import { ref } from 'vue'
const btnText = ref('Copiar Correo')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = '¡Copiado!'
  setTimeout(function() { btnText.value = 'Copiar Correo' }, 2000)
}
</script>

<ProductHero id="tuner-pedal" />

<div id="manual"></div>

*Desarrollado por Main St Audio Labs · Motor DSP de Código Abierto (Licencia MIT)*

<div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin: 1.25rem 0 1.75rem 0;">
  <a href="https://github.com/mainstaudiolabs/pitch-detector-tuner" target="_blank" class="rock-btn rock-btn-secondary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 200px; padding: 0.6rem 1.2rem; text-decoration: none;">Ver Motor en GitHub (MIT) 🐙</a>
</div>

---

## 1. 🌟 Diseñado para el Escenario y el Estudio

El **Vintage Tuner Stompbox** traslada la calidez visual y la precisión balística de los clásicos afinadores analógicos de aguja directamente a tu DAW y a tus actuaciones en vivo. 

Construido con una interfaz retro fotorrealista y un motor DSP de vanguardia desarrollado por **Main St Audio Labs**, ofrece una respuesta de aguja firme y suave que acompaña el movimiento de tu clavijero sin saltos molestos de octava ni temblores en pantalla, funcionando con idéntica solvencia en guitarras acústicas, eléctricas, afinaciones caídas y bajos de 5 cuerdas.

---

## 2. ⚡ Insértalo en Todas tus Pistas: Consumo 0.0% de CPU

Uno de los mayores beneficios de Vintage Tuner Stompbox para tu flujo de trabajo en el DAW es su arquitectura **True Zero-CPU Passthrough**:

* **0.0% de Carga con la Ventana Cerrada:** Cuando cierras la interfaz del plugin en tu DAW o apagas el interruptor `POWER`, el motor de análisis matemático se suspende de inmediato y el audio pasa en bypass transparente sin consumir un solo ciclo de CPU.
* **Un Afinador en Cada Canal de Guitarra y Bajo:** Puedes dejar insertado el afinador en **todas las pistas de tu sesión** listo para usar cuando lo necesites. Tu proyecto no sumará consumo de procesador adicional ni se volverá lento.
* **Auto-Unmute de Seguridad:** ¿Terminaste de afinar con el pedal en `MUTE` y cerraste la ventana para seguir grabando o mezclando? El plugin desactiva el mute automáticamente para que nunca te quede una pista silenciada por descuido en la mezcla.

---

## 3. 🎯 Doble Motor DSP para Guitarra y Bajo (Código Abierto)

El núcleo de detección de tono del pedal está impulsado por nuestra librería matemática propia, disponible de forma abierta bajo **Licencia MIT** en GitHub ([pitch-detector-tuner](https://github.com/mainstaudiolabs/pitch-detector-tuner)):

### 🔀 Dos Modos de Detección al Instante:
* **Modo MPM (McLeod Pitch Method):** Diseñado para guitarra eléctrica y acústica. Captura al instante el ataque inicial de la púa y responde con máxima agilidad tanto en acordes abiertos como en punteos y solos rápidos.
* **Modo YIN (De Cheveigné & Kawahara):** Especialmente optimizado para bajo eléctrico (4 y 5 cuerdas), guitarras de 7/8 cuerdas y afinaciones caídas (*Drop D, Drop C, etc.*). Rastrea con total estabilidad hasta la fundamental del **$B_0$ (Si grave a 30.87 Hz / 25 Hz)** sin confundirse con armónicos superiores.

### 🛡️ Afinación Cómoda, Rápida y Estable:
* **Balística de Aguja sin Oscilaciones:** La aguja cuenta con un suavizado exponencial calibrado con zona muerta central ($\pm 0.6\text{ cents}$). Te indica con claridad si estás alto o bajo sin bailar erráticamente.
* **Retención de Decaimiento (*Hold Window* de ~0.6 s):** Cuando la vibración de la cuerda se va extinguiendo acústicamente, la aguja sostiene la última nota detectada y regresa suavemente al centro en lugar de cortarse en seco.
* **AGC Dinámico (+41 dB Boost):** Detecta pastillas pasivas *single-coil* de baja salida y sostiene notas largas sin perder la lectura.
* **Duplicación Mono a Estéreo Automática:** Si conectas tu instrumento a la entrada 1 (Mono) de tu placa, el plugin centra la señal automáticamente en ambos lados de tus monitores y auriculares.

---

## 4. 🎛️ Guía Rápida de Controles

```
+-------------------------------------------------------------+
|                      [ VÚMETRO ANALÓGICO ]                  |
|                 b FLAT     [-50 .. 0 .. +50]     SHARP #    |
|                                                             |
|   [ MODE ]               [ DISPLAY NOTA ]         [ A4 REF ]|
|   MPM / YIN                E2 · 82.4 Hz           440 Hz    |
|                            -0.5 cents                       |
|                                                             |
|   [ MUTE ]                                        [ POWER ] |
|   ON / OFF                                        ON / OFF  |
+-------------------------------------------------------------+
```

* **VÚMETRO DE AGUJA:** Muestra la desviación exacta en centésimas de semitono (`-50` a `+50 cents`). La zona central ($\pm 3\text{ cents}$) se ilumina en verde cuando la afinación está perfecta.
* **MODE (MPM / YIN):** Conmuta entre el algoritmo para guitarra (MPM) y el algoritmo para bajo / notas graves (YIN).
* **A4 REFERENCE (432 Hz - 448 Hz):** Ajusta la frecuencia de referencia del concierto. Haz **doble clic** sobre el control para restablecer al estándar **440 Hz**.
* **MUTE (Silent Tuning):** Silencia la salida hacia tu amplificador o monitores para afinar en silencio en vivo o durante la grabación.
* **POWER:** Enciende o apaga el pedal. Al apagarlo, la aguja descansa en su posición de reposo y el audio pasa en bypass puro (0% CPU).
* **Personalización Visual (Drag & Drop):** Arrastra cualquier imagen `.png` o `.jpg` sobre el pedal para cambiar la apariencia del fondo o del medidor.

---

## 5. 💡 Mejores Prácticas: Ubicación en la Cadena y Consejos de Estudio

Para exprimir al máximo la precisión de **Vintage Tuner Stompbox**, ten en cuenta estas recomendaciones de producción:

### 🥇 Colócalo Siempre en el Primer Slot (Inicio de tu Cadena FX)
* **Señal Directa y Pura (DI Limpia):** El afinador debe recibir la señal cruda directamente desde tu interfaz o pastillas antes de cualquier otro plugin.
* **Evita Efectos Previos:** 
  * Las **distorsiones, overdrives y fuzzes** generan armónicos adicionales que saturan y enmascaran la frecuencia fundamental.
  * Los **chorus, phasers, flangers y vibratos** modulan la frecuencia en el tiempo, haciendo que la aguja oscile intentando seguir la desafinación del efecto.
  * Los **delays y reverbs** superponen ecos de notas anteriores sobre la nota que intentas afinar.
* **Mute Limpio en el Escenario:** Al estar al inicio de la cadena, accionar el interruptor `MUTE` corta la señal antes de los amplificadores de alta ganancia, logrando silencio absoluto sin soplidos ni zumbidos.

### 🎸 Consejos de Interpretación para Afinar con Máxima Precisión:
* **Usa la Pastilla del Mástil (*Neck Pickup*):** La pastilla del mástil capta una mayor proporción de fundamental y menos agudos metálicos que la del puente. Si recortas levemente el potenciómetro de tono de la guitarra, la señal será aún más pura y el algoritmo responderá con velocidad quirúrgica.
* **Pulsación Suave y Firme:** Evita golpear la cuerda con excesiva fuerza (*pick attack* violento), ya que la tensión momentánea estira la cuerda y produce un leve cambio de tono transitorio (*pitch drift*). Toca con la yema del dedo o una pulsación constante a la altura del traste 12.
* **Para Bajos de 5 Cuerdas ($B_0$ @ 25 Hz):** Asegúrate de tener seleccionado el modo **YIN** para un seguimiento rocoso de los subgraves. También puedes afinar usando el armónico natural del traste 12 para una respuesta instantánea.

---

## 6. ⚙️ Ajustes de Buffer Recomendados

* **Escenario y Grabación en Vivo (Tracking):**
  * Configura tu interfaz de audio en **128 muestras @ 48 kHz (~2.6 ms)** con drivers ASIO nativos (Windows) o CoreAudio (macOS) para una monitorización en tiempo real sin latencia ni retraso.
* **Sesiones de Mezcla:**
  * Tamaños de buffer de **256 a 512 muestras** para proyectos con muchas pistas y cadenas de plugins pesadas.

---

## 7. 🔬 Bajo el Capó: Ingeniería DSP y Estándares en Tiempo Real

Para desarrolladores, técnicos de audio y entusiastas del DSP, el plugin fue programado en **Modern C++ / JUCE** siguiendo el *Estándar de Oro de Main St Audio Labs*:

* **Procesamiento de Audio Asíncrono:** El hilo de audio real del DAW ejecuta el bloque en `<0.5 microsegundos`, limitándose a escribir en un buffer circular *lock-free* de 16,384 muestras. Las matemáticas pesadas de autocorrelación (8,192 muestras) se calculan de manera independiente en un hilo secundario en segundo plano a 100 FPS, garantizando **cero riesgo de *audio dropouts* o chasquidos**.
* **Cero Asignaciones Dinámicas (`malloc`/`new`):** Toda la memoria DSP y los buffers se pre-asignan en `prepareToPlay()`.
* **Protección contra Números Denormales (`ScopedNoDenormals`):** Evita picos innecesarios de CPU en silencio.
* **Portabilidad Total con `BinaryData`:** Todos los gráficos y texturas están compilados dentro del propio archivo del plugin. No requiere instaladores complejos ni carpetas sueltas de imágenes.
* **Repositorio Open Source:** La implementación matemática de los detectores YIN y MPM se encuentra disponible en GitHub bajo Licencia MIT:  
  👉 [https://github.com/mainstaudiolabs/pitch-detector-tuner](https://github.com/mainstaudiolabs/pitch-detector-tuner)

---

## 8. 💻 Compatibilidad y Descargas

| Sistema Operativo | Formatos | Requisitos |
| :--- | :--- | :--- |
| **Windows** | VST3 (64-bit), Standalone (`.exe`) | Windows 10 / 11 (64-bit) |
| **macOS** | VST3, AU (`.component`), Standalone (`.app`) | macOS 10.13+ (Universal: Apple Silicon M1/M2/M3 e Intel) |
| **Linux** | VST3 (64-bit), Standalone ejecutable | Ubuntu 22.04+ o distros compatibles (x64) |

* **Instalación:** Simplemente descomprime el archivo descargado y copia el `.vst3` en tu carpeta habitual de plugins (ej. `C:\Program Files\Common Files\VST3\` en Windows).

<div style="margin: 1.5rem 0; text-align: center;">
  <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/vintage-tuner-v1.0.1" target="_blank" class="rock-btn rock-btn-primary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 250px; padding: 0.65rem 1.6rem; text-decoration: none; font-size: 1rem;">Descargar Vintage Tuner Stompbox (GRATIS) ⬇️</a>
</div>

---

## 9. 📄 Licencia y Términos

* El plugin **Vintage Tuner Stompbox** se distribuye como **Freeware (Gratuito)** bajo el EULA de Main St Audio Labs para uso personal y producciones comerciales.
* El motor DSP subyacente es **Open Source (Licencia MIT)** y puede consultarse en [pitch-detector-tuner](https://github.com/mainstaudiolabs/pitch-detector-tuner).

---

### ¡Queremos conocer tu experiencia!
Envíanos tus comentarios, sugerencias o dudas a nuestro correo oficial:

<div class="rock-copy-email-wrapper inline">
  <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
  <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>

<p style="margin-top: 2rem; margin-bottom: 1rem;">Si deseas apoyar nuestra investigación independiente y ayudarnos a mantener nuestros plugins gratuitos, puedes apoyarnos con Tarjeta, PayPal o Criptomonedas:</p>

<div>
  <a href="/es/support" class="rock-btn rock-btn-primary" style="display: inline-block; text-align: center;">Apoya el Laboratorio (Ko-fi / Crypto) ☕</a>
</div>

<div class="section-head" style="margin-top:3rem;"><h2>Otros plugins</h2></div>

<PluginGrid exclude="tuner-pedal" />
