<script setup>
import { ref } from 'vue'
const btnText = ref('Copiar correo')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = '¡Copiado!'
  setTimeout(function() { btnText.value = 'Copiar correo' }, 2000)
}
</script>

<ProductHero id="main-st-5f1" />

<div id="manual"></div>

Este manual describe el uso, el diseño y las especificaciones técnicas del amplificador **Main St 5F1**.

<div style="margin: 1.25rem 0 1.75rem; text-align: center;">
  <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt5F1-v1.0.0" target="_blank" class="rock-btn rock-btn-primary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 250px; padding: 0.65rem 1.6rem; text-decoration: none; font-size: 1rem;">Descargar Main St 5F1 v1.0.0 (GRATIS) ⬇️</a>
</div>

---

## Bienvenido

**Main St 5F1** es una simulación física a nivel de componentes, no una captura estática ni una biblioteca de muestras por convolución.

Cada etapa del circuito interactúa y se resuelve en tiempo real mediante filtros de onda digital (*Wave Digital Filters*):
- Una válvula **12AX7** en el preamplificador, modelada con precisión según sus curvas de transferencia reales.
- Una etapa de potencia con una **6V6GT** en clase A pura, acoplada al transformador de salida.
- Una fuente de alimentación con rectificadora **5Y3GT**, cuya compresión y caída de tensión (*sag*) reaccionan dinámicamente a la intensidad de tu toque.
- Un parlante **Jensen P10R** representado como una carga eléctrica reactiva interactuando directamente con la válvula de salida.
- Respuestas al impulso de gabinete de alta resolución, diseñadas a partir del modelado físico del parlante, la caja y la posición del micrófono.

El resultado es un amplificador vivo que responde bajo los dedos exactamente igual que el circuito analógico original.

**Completamente funcional y gratuito.** Todas las funciones están disponibles sin limitaciones de tiempo ni procesamientos recortados. La clave de producto es opcional y sirve para agradecer el proyecto y desactivar la pantalla inicial de bienvenida.

---

## Requisitos

| | |
|---|---|
| **Windows** | 10 o posterior, 64 bits. No necesita instalar nada más: el plugin no depende de bibliotecas externas. |
| **macOS** | 10.13 High Sierra o posterior. Binario universal: funciona de forma nativa tanto en Macs Intel como en Apple Silicon. |
| **Linux** | x86_64, con glibc 2.35 o posterior (Ubuntu 22.04 y equivalentes en adelante). |
| **Formatos** | VST3 en los tres sistemas; Audio Unit (AU) en macOS, para Logic Pro y GarageBand. También hay aplicación independiente, que no necesita ningún DAW. |
| **Procesador** | Cualquier equipo capaz de mover un DAW moderno. El modelado resuelve el circuito muestra por muestra, así que el consumo depende del sobremuestreo elegido: con el valor por defecto (2×) es liviano y queda margen de sobra para el resto de la sesión. |

---

## Instalación

La instalación es directa y no requiere instaladores adicionales. Solo copiá los archivos correspondientes a tu sistema:

| Sistema | Formato VST3 | Formato AU | Aplicación Standalone |
|---|---|---|---|
| **Windows** | `C:\Program Files\Common Files\VST3\` | — | En la carpeta que prefieras |
| **macOS** | `~/Library/Audio/Plug-Ins/VST3/` | `~/Library/Audio/Plug-Ins/Components/` | `/Applications/` |
| **Linux** | `~/.vst3/` | — | En la carpeta que prefieras |

> **Nota para usuarios de macOS:**  
> Al tratarse de un desarrollo independiente y gratuito sin certificado comercial de Apple, el sistema operativo puede mostrar una advertencia de seguridad al abrirlo por primera vez. El plugin es totalmente seguro; en el archivo `INSTALL.txt` incluido en el paquete encontrarás el comando sencillo de Terminal para autorizarlo en segundos.

Una vez copiado, realizá un escaneo de plugins en tu DAW habitual. Lo encontrarás como **Main St 5F1**, en formato VST3 y —en macOS— también como Audio Unit (AU), compatible con Logic Pro y GarageBand.

---

## Primeros pasos

- **En la versión Standalone (independiente):**  
  Al iniciarlo por primera vez, se abrirá automáticamente el panel de configuración de audio. Seleccioná tu interfaz de audio y, principalmente, **el canal de entrada donde conectaste la guitarra**. Si en algún momento no hay señal seleccionada, la barra inferior te lo indicará de forma clara (podés hacer clic sobre ella o pulsar el ícono de engranaje arriba a la derecha para volver a configurar la placa).

- **En tu DAW:**  
  Insertá el plugin en la pista de audio de tu guitarra. El circuito es mono de punta a punta, así que el plugin acepta **una sola entrada**: usalo en una pista mono. La salida puede ser mono o estéreo, de modo que la mayoría de los DAW también lo ofrecen como efecto mono→estéreo si tu pista ya es estéreo.

Antes de comenzar a tocar, te recomendamos calibrar la entrada con la guía que se detalla a continuación. Es un paso simple que garantiza el tono exacto del amplificador.

---

![La pantalla principal](/MainSt5F1.png)

## Calibración de entrada: el punto justo de tu guitarra

En un circuito valvular real, el comportamiento dinámico no se define por decibeles digitales, sino por los **voltios reales que ingresan al jack de entrada**. 

Esa amplitud determina el comportamiento de la primera 12AX7: cuándo se mantiene cristalina, en qué punto comienza a romper con el ataque y cómo comprime la 6V6. Calibrar la entrada permite que el simulador "sienta" tu instrumento con la misma fidelidad física que el amplificador original.

El indicador **`in`** en la barra inferior muestra precisamente el valor pico en voltios (V pk) que llega al jack, reteniendo el valor unos instantes para que puedas leerlo con comodidad tras rasguear.

### Pasos para calibrar:

1. **Seleccioná el Jack 1** en la interfaz del amplificador (es la entrada principal de alta ganancia; la entrada Jack 2 atenúa la señal en −6 dB).
2. Dejá el control **Input** en `0.0 dB` y tocá con ganas un acorde abierto en la guitarra, con la fuerza máxima habitual de tu interpretación.
3. Asegurate de que tu interfaz de audio no esté saturando físicamente (el LED de clip de la placa debe permanecer apagado). Ajustá primero la ganancia física de tu interfaz si fuera necesario.
4. Ajustá suavemente el deslizador **Input** del plugin hasta que los picos registrados en la lectura `in` coincidan con el rango correspondiente a tus pastillas:

| Tipo de pastillas (Pickups) | Pico sugerido en rasgueo fuerte |
|---|---|
| **Single coil vintage** (Stratocaster, Telecaster, bobinados '50s/'60s) | **0.4 – 1.0 V** |
| **Single coil de alta salida** (Texas Special, SSL-5) | **0.8 – 1.8 V** |
| **Humbucker vintage** (PAF, '59) | **1.0 – 1.8 V** |
| **Humbucker moderno / alta ganancia** (JB, Super Distortion) | **2.0 – 3.5 V** |
| **Pastillas activas** (EMG 81/85, Fishman Fluence) | **1.5 – 2.5 V** |

*Valores medidos con impedancia estándar de 1 MΩ, coincidente con la entrada del amplificador real.*

> **Para esto está el control Input.** No es un control de tono: su única función es adaptar el nivel que entrega tu equipo al que espera el circuito. Por eso conviene rehacer la calibración cada vez que cambie el camino de la señal: otra interfaz, otra entrada física, otra posición de la ganancia del preamplificador de la placa, o al pasar del Standalone a tu DAW. El nivel digital que llega al plugin depende de ese camino, así que el valor que te sirve en un caso no tiene por qué servirte en el otro.


### Dinámica natural de la lectura:
La guitarra eléctrica posee un rango dinámico muy amplio: el golpe de púa inicial suele tener entre 14 y 20 dB más de energía que el sustain de la nota. Por eso es normal que la lectura suba en el instante del ataque y descienda progresivamente. La calibración toma como referencia ese ataque inicial, ya que es el responsable de empujar la válvula hacia la saturación armónica característica.

### Respuesta según el nivel de entrada:
- **Si el nivel queda muy por debajo del rango:** El amplificador sonará excesivamente limpio en todo el recorrido de la perilla de volumen, perdiendo el crunch característico del circuito 5F1.
- **Si el nivel queda excesivamente alto:** La saturación ocurrirá demasiado temprano, comprimiendo la dinámica de tus dedos y haciendo que el control de volumen pierda sutileza en sus posiciones intermedias.
- **En el punto recomendado:** Obtendrás el equilibrio clásico: limpios cálidos al tocar suave y un quiebre cremoso y dinámico al atacar con fuerza las cuerdas o al abrir el pote de volumen de la guitarra.

---

## La barra inferior de control

Además del calibrador de entrada, la barra inferior reúne los controles globales de utilidad y el monitoreo en tiempo real:

- **Input / Output:** Ajustan la ganancia de entrada y el volumen maestro de salida en dB, manteniendo desacoplado el ajuste operativo del carácter del circuito del amplificador.
- **Monitores en tiempo real:**
  - `in [V pk]`: Tensión pico instantánea ingresando al circuito virtual.
  - `out [dBFS]`: Nivel de salida del plugin hacia tu pista o parlantes.
  - `B+ [V]`: Tensión de la fuente de alimentación interna sobre la válvula de potencia 6V6.
  - `[mA]`: Corriente de placa de la válvula 6V6.
  - `Frecuencia y Latencia`: Indica la tasa de muestreo actual y el retardo del procesamiento.

> **El comportamiento de la fuente (Sag):**  
> En reposo, el voltaje `B+` se sitúa alrededor de los 340 V. Al tocar un acorde con fuerza, notarás cómo ese valor desciende momentáneamente y se recupera con suavidad: es el fenómeno de *sag* generado por la rectificadora valvular 5Y3GT. Esta compresión natural es una de las mayores virtudes tonales de los circuitos tweed originales.

- **Sound card (Standalone):** Permite alternar de forma rápida entre los canales de entrada de tu placa de audio.
- **Oversampling (1×, 2×, 4×, 8×):**  
  Controla el sobremuestreo del cálculo no lineal para eliminar cualquier aspereza digital (*aliasing*):
  - **1× / 2×:** Ideales para tocar en vivo o monitorearse en tiempo real con latencia mínima y un uso de procesador sumamente ligero.
  - **4× / 8×:** Recomendados para mezcla final o exportación (*bounce*), ofreciendo una definición armónica inmaculada. Tené en cuenta que a mayor sobremuestreo aumenta el uso de CPU; en computadoras de potencia moderada conviene reservarlo principalmente para el renderizado (ver más abajo en *Preguntas frecuentes* cómo optimizarlo).

---

## Panel del amplificador

Fiel al diseño minimalista y legendario del modelo 5F1 de los años 50, el panel principal conserva su autenticidad:

- **Volume (1 al 12):** El único control interactivo de ganancia y volumen del equipo original. De 1 a 4 entrega limpios brillantes y con cuerpo; de 5 a 8 entra en el clásico crunch tweed blusero; y de 9 a 12 ofrece una saturación rica en armónicos y compresión de potencia.
- **Jacks de entrada:**
  - **Jack 1 (Normal):** Entrada estándar con impedancia de 1 MΩ y respuesta completa.
  - **Jack 2 (Low):** Atenúa la señal en −6 dB y reduce la carga de la pastilla a 136 kΩ (68 k + 68 k, igual que el ampli real), lo que apaga su pico de resonancia en la zona de los 3.6 kHz. Es perfecta para instrumentos con pastillas muy calientes o para lograr un audio más oscuro y aterciopelado.
- **Micrófonos y Gabinete:**
  - **SM57:** La captura clásica de estudio, con un realce de presencia enfocado (+3 dB en 4.5 kHz) que ayuda a cortar en la mezcla.
  - **SM94:** Una alternativa más balanceada, lineal y cálida.
  - **Direct:** Desactiva la simulación de gabinete para que puedas utilizar tus propias respuestas al impulso (IRs) externas.

*Las capturas corresponden a un parlante Jensen P10R montado en un gabinete con parte trasera abierta, calculadas mediante modelado acústico y físico integral.*

---

![El afinador](/MainSt5F1_tuner.png)

## Afinador integrado

Haciendo clic en el ícono del diapasón (arriba a la derecha), el disco rota hacia el afinador incorporado.

- **Diseño clásico:** Medidor de aguja central con indicación de cents y frecuencia exacta. La aguja se iluminará en color **verde** cuando estés afinado dentro de un margen de ±3 cents.
- **Detección ultra limpia:** El circuito del afinador toma la señal de la guitarra antes de entrar al amplificador. De esta forma, los armónicos de la saturación no interfieren con la precisión del análisis de tono.
- **Rango amplio (25 Hz a 1400 Hz):** Compatible tanto con guitarras afinadas en registros estándar o graves como con bajos eléctricos de 5 cuerdas.
- **Silent Tuning:** Permite silenciar la salida del amplificador mientras afinás. Al regresar a la vista del amplificador, el audio se reactiva automáticamente.
- **Reference (A4):** Calibración de la nota La de referencia entre 430 Hz y 450 Hz, en pasos de 1 Hz (por defecto 440 Hz). Tocá los extremos **−** y **+** para ajustarlo —mantené presionado para avanzar rápido— y hacé doble clic **sobre el número del centro** para volver a 440 Hz.
- **Eficiencia inteligente:** Cuando el afinador está oculto, el algoritmo de detección se suspende por completo para liberar recursos del sistema.

---

![Los ajustes de audio](/MainSt5F1_AudioSettings.png)

## Configuración y Licencia (Lado B)

El ícono **`i`** arriba a la derecha accede a la información de versión y ajustes de mantenimiento:

- **License key:** Ventana para registrar tu clave de activación si deseás remover la pantalla de cortesía inicial. Una vez ingresada, queda guardada localmente en tu equipo y funciona de forma definitiva sin requerir conexión a internet.
- **Audio settings (Standalone):** Abre el selector de interfaz de audio, frecuencia de muestreo (*sample rate*), tamaño de buffer y asignación de canales de entrada y salida.

---

## Preguntas frecuentes

**¿Por qué un parlante de 10 pulgadas si el Champ original solía llevar uno de 8"?**  
El parlante de 8" en gabinetes compactos tiende a generar una respuesta de graves recortada y una resonancia nasal muy marcada. Históricamente en los estudios de grabación ha sido habitual conectar estos circuitos a cajas con parlantes de 10" o 12" para ganar calidez, extensión en frecuencias bajas y mayor apertura sonora. El Jensen P10R ofrece el balance tonal ideal para este circuito y permite que tanto el modelado reactivo de impedancia como la respuesta acústica trabajen en perfecta coherencia.

**¿Por qué el procesamiento es mono?**  
Porque el circuito 5F1 es estrictamente mono por naturaleza (un preamplificador, una válvula de potencia y un parlante). Mantener la topología mono original preserva la pureza de fase del instrumento. Si buscás una imagen estéreo amplia en tu mezcla, podés lograrlo fácilmente duplicando tomas o agregando efectos de ambiente y modulación posteriores al amplificador.

**¿Cómo optimizar el uso de recursos y consumo de CPU?**  
El modelado físico por componentes resuelve ecuaciones en cada muestra de audio para reproducir con fidelidad la dinámica analógica del circuito. Para lograr un rendimiento óptimo sin sobrecargar el procesador (especialmente en equipos no muy potentes):
- **Para tocar o monitorear en tiempo real:** Mantené el oversampling en **1× o 2×**. El consumo es muy liviano y la latencia es mínima.
- **Para mezcla y exportación final:** Podés subirlo a **4× u 8×** al momento de hacer el *bounce* o render de tus pistas en el DAW, donde la carga en tiempo real ya no es crítica.

**Ya ingresé la clave de producto, ¿por qué vuelvo a ver la ventana inicial?**  
La ventana de cortesía puede mostrarse brevemente una vez al iniciar la sesión. Si continúa apareciendo de manera recurrente tras haber guardado tu licencia, escribinos a nuestro correo de contacto para asistirte enseguida.

**No obtengo sonido en la aplicación Standalone.**  
Revisá la barra inferior. Si se muestra el mensaje **NO AUDIO INPUT** en color rojo, hacé clic directamente sobre él para verificar que tu interfaz de sonido y el canal correcto donde está conectada la guitarra se encuentren seleccionados en la configuración.

---

## Créditos y marcas registradas

- Modelado matemático de válvulas: Norman Koren (1996); formulación de corriente de grilla: Dempwolf y Zölzer (DAFx 2011).
- Filtros de onda digital (WDF): librería `chowdsp_wdf` desarrollada por Jatin Chowdhury (licencia BSD-3).
- Arquitectura desarrollada sobre JUCE framework.
- Tipografías: Lobster, Caveat e IBM Plex Mono (SIL Open Font License 1.1).

*Todos los nombres de productos, marcas comerciales y modelos mencionados (tales como Fender, Champ, Princeton, Jensen, Shure, SM57, SM94) pertenecen a sus respectivos propietarios y se citan exclusivamente con fines descriptivos e históricos del equipamiento analógico tomado como referencia. Main St Audio Labs es un proyecto independiente y no cuenta con afiliación, patrocinio ni aval comercial por parte de dichas marcas.*

<div style="margin: 1.75rem 0; text-align: center;">
  <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt5F1-v1.0.0" target="_blank" class="rock-btn rock-btn-primary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 250px; padding: 0.65rem 1.6rem; text-decoration: none; font-size: 1rem;">Descargar Main St 5F1 v1.0.0 (GRATIS) ⬇️</a>
</div>

Si grabás algo con este amplificador, queremos escucharlo. Copiá nuestro correo para mandarnos el enlace:

<div class="rock-copy-email-wrapper inline">
  <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
  <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>

<p style="margin-top: 2rem; margin-bottom: 1rem;">Si querés apoyar nuestra investigación independiente y ayudarnos a mantener los plugins gratuitos, podés hacerlo con tarjeta, PayPal o criptomonedas:</p>

<div>
  <a href="/support" class="rock-btn rock-btn-primary" style="display: inline-block; text-align: center;">Apoyar al laboratorio (Ko-fi / Crypto) ☕</a>
</div>

<div class="print-footer">
  Sitio oficial y manual: <a href="https://mainstaudiolabs.github.io/es/main-st-5f1.html" target="_blank">https://mainstaudiolabs.github.io/es/main-st-5f1.html</a>
</div>

<div class="section-head" style="margin-top:3rem;"><h2>Otros plugins</h2></div>

<PluginGrid exclude="main-st-5f1" />
