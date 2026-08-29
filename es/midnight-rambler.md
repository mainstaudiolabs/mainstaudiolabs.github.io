<script setup>
import { ref } from 'vue'
const btnText = ref('Copiar Correo')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = '¡Copiado!'
  setTimeout(function() { btnText.value = 'Copiar Correo' }, 2000)
}
</script>
<ProductHero id="midnight-rambler" />

<div id="manual"></div>

Este manual describe en detalle el uso, la filosofía de diseño y las especificaciones técnicas del plugin de simulación de amplificador **Midnight Rambler**.

<div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin: 1.25rem 0 1.75rem 0;">
  <a href="/midnight-rambler-manual.pdf" download class="rock-btn rock-btn-secondary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 180px; padding: 0.6rem 1.2rem; text-decoration: none;">Descargar PDF (v1.0.1) 📄</a>
</div>

---

## 1. El Alma del Tweed 5E3: Una Leyenda de Estudio

El **Fender Tweed Deluxe 5E3** (década de 1950) es universalmente reconocido por productores y guitarristas como el amplificador de grabación más venerado en la historia del rock. Su diseño purista a válvulas 6V6 produce una compresión orgánica inconfundible, armónicos cálidos y una respuesta dinámica al toque que los grandes amplificadores de escenario no pueden igualar.

Desde el crujido rítmico de Keith Richards en los discos clásicos de los Rolling Stones (*Sticky Fingers*, *Exile on Main St.*) y la furia de Neil Young, hasta la mordida de Billy Gibbons y las guitarras legendarias de *Hotel California*, el 5E3 definió generaciones de discos inolvidables.

### Por qué Midnight Rambler Marca la Diferencia

A diferencia de las respuestas a impulsos estáticas o los plugins de modelado digital genéricos que se sienten rígidos o artificiales, Midnight Rambler captura la respiración y la respuesta física de un Tweed 5E3 boutique de primera línea:

* **Dinámica Neuronal Auténtica:** Impulsado por redes neuronales de aprendizaje profundo NAM (*Neural Amp Modeler*), reacciona de manera orgánica al potenciómetro de volumen de la guitarra y a la dinámica de tu mano.
* **Protección Inteligente y Supresión de Ruido:** Incorpora un Noise Gate adaptativo (-58 dBFS) y un limitador analógico Waveshaper suave pre-NAM (-0.1 dBFS) que garantizan una señal impecable sin zumbidos de fondo.
* **Suite de Estudio Lista para Mezcla (*Mix-Ready*):** Filtros State-Variable TPT independientes post-amplificador (Bass HP y Tone LP) combinados con convolución a latencia cero de gabinete Oxford 12" de 1971 (cinta Royer R121 y dinámico Shure SM57).
* **Afinador Cromático Retro Integrado:** Motor de afinación de alta precisión con medidor VU analógico iluminado y doble algoritmo de detección (YIN / MPM).
* **Cero Latencia y 100% Gratuito:** Sin cuentas, sin llaves de protección y con consumo ultra bajo de CPU. Enchufa tu guitarra, sube el volumen y suena a disco clásico desde el primer acorde.

---

## 2. Guía Rápida de Controles

El plugin cuenta con 4 perillas principales intuitivas, 3 selectores rotativos y un afinador cromático integrado:

### 🎛️ Perillas Principales
* **VOLUME / GAIN (`1.0` a `10.0`):** Controla la ganancia de entrada. Ajustes bajos ofrecen un sonido limpio cristalino; niveles más altos entregan saturación valvular gruesa y sostenido cremoso.
* **BASS (Filtro HP · `20 Hz` a `300 Hz`):** Aprieta los graves y elimina frecuencias subgraves innecesarias, manteniendo las pistas rítmicas definidas.
* **TONE (Filtro LP · `1.0 kHz` a `20.0 kHz`):** Controla el brillo y suaviza asperezas agudas para un tono cálido y amaderado.
* **MASTER (`1.0` a `10.0`):** Nivel de salida limpio con hasta `+18 dB` de margen de volumen adicional.

### 🔀 Selectores e Interruptores
* **CHANNEL (Edge / Cranked):**
  * **EDGE:** Tono al borde de la ruptura (*edge-of-breakup*) con respuesta hiperdinámica al toque.
  * **CRANKED:** Overdrive vintage rico y saturado con compresión densa de válvulas de potencia.
* **MIC / CAB (Selector Rotativo de 3 Posiciones · Gabinete Oxford 12" de 1971):**
  * **WARM (a las 9 en punto):** Micrófono de cinta Royer R121 para una respuesta suave y con mucho cuerpo.
  * **SHARP (a las 6 en punto):** Micrófono dinámico Shure SM57 con mordida y enfoque en medios-altos.
  * **BLEND (a las 3 en punto):** Combinación de estudio 60/40 (SM57 + R121) para profundidad y balance tridimensional.
* **STANDBY (Play / Mute):** Silencia instantáneamente el audio y reduce el uso de CPU al **0%**.
* **BOTÓN TUNER (Esquina Superior Derecha):** Abre/cierra el afinador cromático retro integrado.
* **Fondo Personalizado:** Arrastra y suelta cualquier archivo de imagen (`.jpg` o `.png`) directamente sobre la ventana del plugin para cambiar su aspecto al instante.

### 📟 Afinador Cromático de Precisión (VU Meter)

<img :src="'/midnightramblertuner.png'" alt="Afinador Cromático Midnight Rambler" style="max-height: 250px; display: block; margin: 1.5rem auto; border: 2px solid var(--vp-c-border); border-radius: 6px;" />

* **Medidor VU Iluminado:** Respuesta balística clásica que indica la desviación de `-50` a `+50 cents` (el centro `0` se ilumina en verde al alcanzar la afinación perfecta).
* **Doble Algoritmo de Detección:**
  * **MPM (McLeod Pitch Method):** Excelente rechazo armónico para notas complejas de guitarra y rápida captura.
  * **YIN:** Algoritmo de autocorrelación estándar de la industria para seguimiento ultrapreciso de la frecuencia fundamental.
* **Frecuencia y Nota:** Muestra la nota detectada (ej., `E2`, `A2`, `D3`, `G3`, `B3`, `E4`) y los Hertz exactos con referencia de concierto estándar ($A4 = 440\text{ Hz}$).
* **0% Consumo de CPU:** El hilo de cálculo se suspende por completo al cerrar la ventana del afinador, garantizando cero impacto en la reproducción.

---

## 3. Configuración de Audio (Standalone)

Cuando ejecutes el pedal como una aplicación independiente, configura tus ajustes de audio de la siguiente manera para un rendimiento óptimo:

1. **Tipo de Dispositivo de Audio:** Selecciona siempre **ASIO** en Windows para evitar latencia y distorsión digital.
2. **Dispositivo:** Selecciona el controlador ASIO nativo de tu interfaz de audio (ej., *Focusrite USB ASIO*).
3. **Frecuencia de Muestreo (Sample Rate):** Ajústalo a **48000 Hz** (48 kHz).
4. **Tamaño de Búfer (Buffer Size):** Ajusta el tamaño del búfer a **128 muestras** (2.3 ms) o **256 muestras** (5.3 ms).

#### 🎸 El Fenómeno del Búfer: Por qué 256 muestras (5.3 ms) podría sonar mejor que 128 muestras (2.3 ms)
Muchos guitarristas experimentan un tono más dulce y fluido a 256 muestras. Esto se debe a dos factores:
* **Estabilidad del Procesador:** A 256 muestras, la CPU procesa bloques de audio con más margen, evitando micro fluctuaciones (jitters) que pueden introducir aspereza sutil en los agudos.
* **Efecto de Duplicación Acústica:** El diminuto retardo de 5.3 ms, combinado con el sonido acústico físico de tus cuerdas eléctricas desenchufadas vibrando en la habitación, crea un efecto orgánico de duplicación (doubling) que agrega profundidad tridimensional, grosor y una sensación natural de reverberación de sala a tu interpretación.

---

## 4. Requisitos del Sistema y Distribución

### Requisitos del Sistema
* **Sistemas Operativos**:
  * **Windows**: Windows 10 o Windows 11 (64-bit).
  * **macOS**: macOS 10.13 o más reciente (soporta de forma nativa Intel y Apple Silicon).
  * **Linux**: Ubuntu 22.04 o distribución de 64-bit compatible.
* **Procesador (CPU)**: Debe soportar instrucciones **AVX2** (Intel Core 4ª Generación / AMD Ryzen o más recientes) en Windows y Linux para calcular los modelos matemáticos en tiempo real. Los procesadores Apple Silicon son compatibles de forma nativa.
* **RAM**: 4 GB mínimo.
* **Tarjeta de Audio (Modo Standalone)**: Interfaz de audio con controladores de baja latencia (**ASIO** nativo en Windows; **CoreAudio** en macOS; **JACK** o **ALSA** en Linux).

### Distribución (Todo en Uno)
**Midnight Rambler es 100% autónomo.** No requiere cargar modelos externos, configuraciones XML ni archivos IR por separado:
* Todos los modelos de amplificadores neuronales y perfiles de gabinetes están **incrustados internamente como recursos binarios** dentro del archivo del plugin.
* **Windows**: Simplemente copia el archivo `.vst3` en tu carpeta de plugins (usualmente `C:\Program Files\Common Files\VST3\`) o ejecuta la aplicación `.exe` (Standalone).
* **macOS**: Copia el `.vst3` o `.component` (AU) en tu carpeta de plugins (usualmente `/Library/Audio/Plug-Ins/VST3/` o `/Library/Audio/Plug-Ins/Components/`) o ejecuta la app `.app` (Standalone).
* **Linux**: Copia el archivo `.vst3` en tu carpeta de plugins (usualmente `~/.vst3/` o `/usr/lib/vst3/`) o ejecuta el binario independiente.
* **Descarga Directa**: Obtén el paquete multiplataforma más reciente desde nuestros [Releases en GitHub](https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/v1.0.1).

<div style="margin: 1.25rem 0; text-align: center;">
  <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/v1.0.1" target="_blank" class="rock-btn rock-btn-primary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 250px; padding: 0.65rem 1.6rem; text-decoration: none; font-size: 1rem;">Descargar Midnight Rambler v1.0.1 (GRATIS) ⬇️</a>
</div>

---

## 5. Solución de Problemas (Troubleshooting)

### El VST3 no aparece en el DAW o falla al escanear
* **Falta C++ Redistributable (Windows)**: Aunque el plugin está compilado estáticamente, algunas instalaciones de Windows pueden carecer de componentes de ejecución básicos. Descarga e instala el [Microsoft Visual C++ Redistributable 2015-2022 (x64)](https://aka.ms/vs/17/release/vc_redist.x64.exe) oficial.
* **Compatibilidad de CPU (AVX2)**: Asegúrate de que tu procesador soporte instrucciones **AVX2**. El motor neuronal subyacente NAM requiere AVX2 para calcular las redes neuronales en tiempo real en Windows y Linux. Si tu CPU carece de AVX2, el plugin no cargará.
* **Ruta de Escaneo**: Verifica que tu DAW esté escaneando la carpeta donde colocaste el archivo `.vst3`.

### La aplicación Standalone muestra una advertencia de "Desarrollador no identificado" (macOS)
* **Explicación**: Debido a que los binarios del plugin se compilan mediante integración continua (CI) automatizada y no están notarizados con una Cuenta de Desarrollador de Apple paga, macOS puede evitar que se inicien.
* **Solución**: Ve a **Configuración del Sistema > Privacidad y Seguridad**, desplázate hacia abajo hasta la sección de Seguridad y haz clic en **Abrir de todos modos** junto a la advertencia de Midnight Rambler. Como alternativa, abre Terminal y ejecuta:
  `xattr -cr /ruta/hacia/MidnightRambler.app`

### Chasquidos, pops o alta latencia en modo Standalone
* **Controladores de Audio (Drivers)**: Asegúrate de estar usando el controlador nativo de baja latencia para tu interfaz de audio (**ASIO** en Windows, **CoreAudio** en macOS, **JACK** o **ALSA** en Linux).
* **Tamaño del Búfer**: Se recomienda un tamaño de búfer de **128** o **256 muestras**. Reducirlo a menos de 64 muestras puede causar picos de CPU y crujidos en el audio dependiendo del rendimiento de tu computadora.

---

## 6. Licencia y Términos de Uso

**Midnight Rambler** se distribuye como **Freeware (Código Cerrado)** bajo el [Acuerdo de Licencia de Usuario Final (EULA) de Main St Audio Labs](/LICENSE.txt):
* **Uso Gratuito:** Sos 100% libre de usar este plugin en cualquier producción musical personal, educativa o comercial, mezcla o actuación en vivo sin pagar ningún tipo de regalía o licencia.
* **Protección de Código Cerrado:** Queda estrictamente prohibida la ingeniería inversa, descompilación, reventa o cobro por la descarga de los archivos binarios del software. Todos los derechos de propiedad intelectual pertenecen exclusivamente a *Main St Audio Labs*.
* **Exención de Responsabilidad:** El software se proporciona "TAL CUAL" ("AS IS"), sin garantías de ningún tipo. Los nombres de marcas registradas de terceros (*Fender*, *Tweed Deluxe*, *5E3*, etc.) se utilizan únicamente con fines descriptivos e históricos para identificar el tono del equipo emulado.

---

### ¡Queremos escuchar tus mezclas!
El comportamiento dinámico de Midnight Rambler se calibró directamente a partir de pruebas de audición de discos clásicos. Si has grabado una canción o mezclado una pista usando este pedal, ¡queremos escucharla!

Copia nuestro correo electrónico de contacto para compartir tus enlaces o comentarios:

<div class="rock-copy-email-wrapper inline">
  <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
  <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>

<p style="margin-top: 2rem; margin-bottom: 1rem;">Si deseas apoyar nuestra investigación independiente y ayudarnos a mantener nuestros plugins gratuitos, puedes apoyarnos con Tarjeta, PayPal o Criptomonedas:</p>

<div>
  <a href="/es/support" class="rock-btn rock-btn-primary" style="display: inline-block; text-align: center;">Apoya el Laboratorio (Ko-fi / Crypto) ☕</a>
</div>

<div class="section-head" style="margin-top:3rem;"><h2>Otros plugins</h2></div>

<PluginGrid exclude="midnight-rambler" />
