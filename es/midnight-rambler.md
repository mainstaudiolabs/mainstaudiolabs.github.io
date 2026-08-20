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

## 1. Introducción

Midnight Rambler es un simulador de amplificador de guitarra en formato de pedal, diseñado para ofrecer los tonos sagrados, crudos y sensibles al tacto del legendario amplificador de guitarra **Fender Tweed Deluxe 5E3** de la década de 1950. 

A diferencia de los plugins de simulación convencionales con decenas de perillas y opciones de enrutamiento infinitas, Midnight Rambler condensa el espíritu del hardware clásico en una interfaz ágil de 4 perillas, permitiendo que tu tono de guitarra atraviese instantáneamente una mezcla estéreo sin fatiga por exceso de opciones. Está construido sobre el ecosistema **Neural Amp Modeler (NAM)** de código abierto y convolution IR personalizada, entregando calidez y saturación valvular auténticas sin aliasing digital con un consumo de CPU ultra bajo.

---

## 2. Flujo de Señal y Controles

```text
[ ENTRADA GUITARRA ]
       │
       ▼
 [ CONTROL DE GANANCIA Y FILTRO HPF ]
       │
       ▼
 [ MOTOR NEURAL 5E3 TWEED DE 2 CANALES ]
       │
       ▼
 [ CONTROL DE TONO POST-AMPLIFICADOR Y SALIDA MAESTRA ]
       │
       ▼
 [ CONVOLUCIÓN DE IMPULSO DE GABINETE ]
       │
       ▼
 [ SALIDA ESTÉREO (MIX READY) ]
```

### 1. GAIN (Ganancia de Entrada / Saturación)
* **Función:** Controla el nivel de la señal de entrada antes de entrar a la etapa del amplificador neural. 
* **Rango:** Escala analógica de `1.0` a `10.0` (Predeterminado: `7.0` = `0.0 dB` Ganancia Unitaria, Max: `10.0` = `+6.0 dB`).
* **Respuesta de Hardware (Curva Lineal Pura):**
  * Cada paso ajusta la señal linealmente en incrementos exactos de `+2.0 dB`.
  * **`1.0` (-12.0 dB):** Útil para limpiar el canal Cranked y obtener armónicos sutiles en los bordes de la ruptura.
  * **`7.0` (0.0 dB):** Ganancia unitaria y balance nominal de señal pura.
  * **`10.0` (+6.0 dB):** Nivel de boost analógico masivo, empujando los modelos neuronales hacia un territorio pesado similar al fuzz.

### 2. HPF (Filtro Pasa Altos Analógico)
* **Función:** Un filtro Pasa Altos de primer orden (First Order High-Pass Filter) ubicado *antes* de la etapa del amplificador neural, afinado para domar las pastillas humbucker en amplificadores que de otra manera tendrían graves sucios y desenfocados.
* **Rango:** Frecuencia de corte de barrido continuo desde `20 Hz` hasta `160 Hz` (-3 dB por octava).
* **Uso:** Recorta el ruido subgrave innecesario para mantener las pistas rítmicas ajustadas y contundentes. A 20 Hz el filtro está completamente abierto.

### 3. TONE (Corte de Tono - Filtro LP)
* **Función:** Un Filtro Pasa Bajos de topología State-Variable TPT ubicado después del amplificador, diseñado para controlar la presencia en frecuencias altas.
* **Rango:** `1.0 kHz` a `20.0 kHz`.
* **Uso:** Domestica el "fizz" digital y las frecuencias altas ásperas. Los valores más altos brindan una claridad cristalina, mientras que reducirlo proporciona un carácter vintage cálido, amaderado y rico en medios.

### 4. MASTER (Volumen Maestro)
* **Función:** Control de nivel de salida lineal y limpio.
* **Rango:** Escala analógica de `1.0` a `10.0` (Predeterminado: `7.0` = `0.0 dB` Ganancia Unitaria, Max: `10.0` = `+18.0 dB`).
* **Respuesta (Curva Continua de Amplificador Real):**
  * Cada paso aumenta el nivel en un uniforme `+6.0 dB`.
  * **`1.0` (-36.0 dB):** Nivel suave de práctica de dormitorio, audible de inmediato sin zonas muertas.
  * **`7.0` (0.0 dB):** Ganancia unitaria nominal estándar.
  * **`10.0` (+18.0 dB):** Aumento de volumen limpio masivo para pastillas single-coil vintage de baja salida o para empujar efectos en cadena.

### 5. CHANNEL (Selector de Modo Dual de Amplificador)
Alterna entre dos capturas neuronales boutique de alta resolución distintas:
1. **EDGE (Ruptura):** Captura en el umbral de la ruptura de bulbos (edge-of-breakup) con respuesta táctil hiperdinámica. Responde instantáneamente a los ajustes del potenciómetro de volumen de la guitarra y a la intensidad de la púa. Incluye una compensación de nivel de salida interna de +2.0 dB para igualar la sonoridad percibida con el modo Cranked.
2. **CRANKED (Rock 'N' Roll):** Saturación Tweed al máximo volumen con compresión densa de bulbos de potencia, armónicos cremosos y un sostenido cantante.

### 6. MIC / CAB (Convolución de Impulso de Gabinete)
Alterna entre tres respuestas curadas de gabinetes de altavoces usando convolución en tiempo real sin latencia:
1. **WARM (Micrófono de Cinta Royer R121):** Tono grueso y con mucho cuerpo con agudos suaves y medios graves ricos, ideal para ritmos grasientos y slide guitar.
2. **SHARP (Dinámico Shure SM57):** Mordida de rock clásico con un golpe enfocado en los medios agudos que corta sin esfuerzo en mezclas densas.
3. **BLEND (Mezcla Personalizada 60/40):** La combinación de estudio definitiva (60% SM57 + 40% R121) que ofrece mordida equilibrada, profundidad y realismo tridimensional.

### 7. STANDBY (Interruptor de Silencio / 0% CPU)
* **Función:** Replica un interruptor de standby de un amplificador físico, silenciando completamente la ruta de audio y reduciendo el consumo de CPU al **0%** de inmediato.

### 8. Skin de Fondo Dinámico (Arrastrar y Soltar)
* Puedes arrastrar y soltar cualquier archivo de imagen (`.jpg`, `.jpeg` o `.png`) directamente desde tu explorador de archivos hacia la interfaz del plugin para personalizar su apariencia visual en tiempo real.

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