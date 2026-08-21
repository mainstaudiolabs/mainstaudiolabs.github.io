<script setup>
import { ref } from 'vue'
const btnText = ref('Copiar Correo')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = '¡Copiado!'
  setTimeout(function() { btnText.value = 'Copiar Correo' }, 2000)
}
</script>

# Midnight Rambler: Manual de Usuario

**Stompbox Series #01 · Simulación de Amplificador Neural**

<div class="print-hide">
  <img :src="'/logo.jpg'" alt="Midnight Rambler Label" style="max-height: 280px; display: block; margin: 1.5rem auto; border: 2px solid var(--vp-c-border); border-radius: 4px;" />
</div>

## 1. La Leyenda del Tweed 5E3: El Santo Grial de la Grabación en Estudio

El **Fender Tweed Deluxe 5E3** (creado en la década de 1950) es universalmente reconocido por productores, ingenieros y guitarristas como el amplificador de grabación más venerado en la historia del rock and roll. Su diseño purista con dos válvulas de potencia 6V6, rectificación valvular y controles interactivos produce una compresión elástica y una sensibilidad táctil al ataque de la púa que los grandes cabezales de estadio sencillamente no pueden igualar.

### La Huella Histórica: Los Tonos que Forjaron el Rock
El circuito Tweed 5E3 es el arma secreta detrás de muchas de las grabaciones más icónicas de la música:
* **The Rolling Stones (Era Dorada):** El crujido rítmico inconfundible de Keith Richards, el brillo en afinación abierta de Sol y la saturación pegadiza en obras maestras como *Sticky Fingers* y *Exile on Main St.*.
* **Neil Young & Crazy Horse:** El overdrive furioso, explosivo, cargado de armónicos y sustain infinito que definió el rock crudo de garaje y el grunge.
* **Eagles (*Hotel California*):** El legendario duelo entrelazado de guitarras y los solos afilados grabados por Don Felder y Joe Walsh en los Criteria Studios.
* **Billy Gibbons (ZZ Top):** La saturación densa, los armónicos de púa chirriantes y el empuje de graves que impulsaron el boogie-rock de los 70.
* **The Faces & Ronnie Wood:** Guitarras slide con cuerpo amaderado y rítmicas agresivas de respuesta inmediata.
* **Larry Carlton & Mike Campbell (Tom Petty):** Tonos cristalinos al borde de la ruptura y solos de estudio que se acomodan con total naturalidad en cualquier mezcla.

### Por qué Midnight Rambler Marca la Diferencia
A diferencia de los modelos digitales convencionales que suenan fríos, rígidos o artificiales, **Midnight Rambler** captura la respiración y la respuesta física de un Tweed 5E3 boutique de primera línea:
* **Dinámica Neuronal Auténtica:** Impulsado por redes neuronales de aprendizaje profundo NAM (*Neural Amp Modeler*), reacciona de manera orgánica al pote de volumen de la guitarra y a la fuerza de tu mano derecha.
* **Supresión de Ruido y Protección Dinámica:** Equipado con un Noise Gate adaptativo inteligente (-58 dBFS) al inicio de la cadena y un limitador analógico Waveshaper suave (-0.1 dBFS pre-NAM) que garantizan audio 100% libre de zumbidos o asperezas digitales.
* **Suite de Estudio Lista para Mezcla (*Mix-Ready*):** Filtros de estudio State-Variable TPT independientes (Bass HP de 20-300Hz y Tone LP de 1-20kHz) junto con convolución de gabinete Oxford 12" de 1971 a latencia cero (Royer R121 y Shure SM57).
* **Cero Latencia y 100% Gratuito:** Sin registros, sin llaves de protección y con consumo ultra bajo de CPU. Enchufa tu guitarra, sube el volumen y suena a disco clásico desde el primer acorde.

---

## 2. Flujo de Señal y Arquitectura DSP

```text
[ ENTRADA GUITARRA (Mono / Estéreo) ]
       │
       ▼
 [ SUMA INTELIGENTE ESTÉREO A MONO (Ganancia Normalizada) ]
       │
       ▼
 [ NOISE GATE ADAPTATIVO (Ataque 1.5ms · Retención 35ms · Caída 140ms) ]
       │
       ▼
 [ CONTROL DE GANANCIA / DRIVE (Escala 1.0 a 10.0 -> -18 dB a 0 dB) ]
       │
       ▼
 [ LIMITADOR WAVESHAPER ANALÓGICO (-0.1 dBFS Tangente Hiperbólica) ]
       │
       ▼
 [ PREAMP NEURAL 5E3 TWEED (Canal Dual: EDGE / CRANKED) ]
       │
       ▼
 [ FILTROS TPT DE ESTUDIO (BASS HP 20-300Hz · TONE LP 1k-20kHz) ]
       │
       ▼
 [ CONVOLUCIÓN DE GABINETE CERO LATENCIA (1971 Oxford 12": WARM / SHARP / BLEND) ]
       │
       ▼
 [ VOLUMEN MASTER (+18 dB de Margen Limpio) ]
       │
       ▼
 [ SALIDA ESTÉREO (MIX READY) ]
```

---

## 3. Guía de Controles y Especificaciones Técnicas

El plugin presenta controles analógicos intuitivos diseñados para operar como un equipo físico vintage:

### 🎛️ 1. VOLUME / GAIN (Ganancia de Entrada / Drive)
* **Función:** Controla el nivel de la señal que ingresa a la etapa de emulación valvular neural.
* **Rango:** Escala analógica calibrada de `1.0` a `10.0` (Predeterminado: `7.0`).
* **Curva de Respuesta:**
  * **`1.0` (-18.0 dB):** Tono limpio cristalino con amplio margen dinámico (headroom).
  * **`5.0` (-10.0 dB):** Limpio cálido que rompe armónicamente al atacar fuerte con la púa.
  * **`7.0` (-6.0 dB):** El punto dulce del ampli — acordes rítmicos crujientes y mordida de blues.
  * **`10.0` (0.0 dB):** Nivel nominal de captura que entrega compresión valvular densa y sustain sin asperezas digitales.

### 🎛️ 2. BASS (Filtro Pasa Altos · 20 Hz a 300 Hz)
* **Función:** Un filtro Pasa Altos de topología State-Variable TPT ubicado después del amplificador, diseñado para eliminar sub-graves retumbantes y apretar las pistas rítmicas.
* **Rango:** `20.0 Hz` a `300.0 Hz` (escala logarítmica). A 20 Hz el filtro está completamente abierto.

### 🎛️ 3. TONE (Filtro Pasa Bajos · 1 kHz a 20 kHz)
* **Función:** Un filtro Pasa Bajos State-Variable TPT diseñado para controlar la presencia y el brillo superior.
* **Rango:** `1.0 kHz` a `20.0 kHz`. Al recortarlo se obtiene un carácter vintage cálido, amaderado y rico en medios.

### 🎛️ 4. MASTER (Volumen Maestro)
* **Función:** Control de nivel de salida lineal y limpio.
* **Rango:** Escala analógica de `1.0` a `10.0` (Predeterminado: `7.0` = `0.0 dB` Ganancia Unitaria, Max: `10.0` = `+18.0 dB`).
* **Respuesta (Curva Continua de Amplificador Real):**
  * **`1.0` (-36.0 dB):** Nivel suave para práctica doméstica, audible desde el inicio sin zonas muertas.
  * **`7.0` (0.0 dB):** Ganancia unitaria nominal estándar.
  * **`10.0` (+18.0 dB):** Gran aumento de volumen limpio para pastillas vintage de baja salida o para empujar procesadores en cadena.

### 🔀 5. CHANNEL (Selector de Modo Dual de Amplificador)
Alterna entre dos capturas neuronales boutique de alta resolución:
1. **EDGE (Ruptura):** Captura en el umbral de ruptura valvular (*edge-of-breakup*) con respuesta táctil hiperdinámica. Responde al instante al potenciómetro de la guitarra y a la intensidad de la mano. Incluye una compensación interna de +2.0 dB para nivelar la sonoridad aparente respecto al modo Cranked.
2. **CRANKED (Rock 'N' Roll):** Saturación Tweed al máximo volumen con compresión de válvulas de potencia, armónicos cremosos y un sostenido cantante.

### 📻 6. MIC / CAB (Convolución de Impulso de Gabinete)
Alterna entre tres respuestas de gabinete Oxford 12" de 1971 mediante convolución en tiempo real sin latencia:
1. **WARM (Cinta Royer R121):** Tono grueso y profundo con agudos suaves y medios-graves con cuerpo, ideal para ritmos grasientos y slide.
2. **SHARP (Dinámico Shure SM57):** Mordida de rock clásico con un golpe enfocado en medios-altos que corta cualquier mezcla densa.
3. **BLEND (Mezcla 60/40):** La combinación de estudio definitiva (60% SM57 + 40% R121) que aporta mordida equilibrada, profundidad y realismo 3D.

### 🎛️ 7. STANDBY (Interruptor de Silencio / 0% CPU)
* **Función:** Replica el switch de standby de un amplificador real, silenciando completamente la señal y reduciendo el consumo de CPU al **0%** instantáneamente.

### 🖼️ 8. Skin de Fondo Dinámico (Arrastrar y Soltar)
* Puedes arrastrar y soltar cualquier archivo de imagen (`.jpg`, `.jpeg` o `.png`) directamente desde el explorador de archivos hacia la interfaz del plugin para personalizar su apariencia visual en tiempo real.

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