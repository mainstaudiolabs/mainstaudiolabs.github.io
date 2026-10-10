<script setup>
import { ref } from 'vue'
const btnText = ref('Copiar correo')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = '¡Copiado!'
  setTimeout(function() { btnText.value = 'Copiar correo' }, 2000)
}
</script>

<ProductHero id="main-st-63-spring" />

<div id="manual"></div>

Este manual describe el uso, el diseño y las especificaciones técnicas de la reverb **Main St '63 Spring**.

<div style="margin: 1.25rem 0 1.75rem; text-align: center;">
  <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt63Spring-v1.0.0" target="_blank" class="rock-btn rock-btn-primary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 250px; padding: 0.65rem 1.6rem; text-decoration: none; font-size: 1rem;">Descargar Main St '63 Spring v1.0.0 (GRATIS) ⬇️</a>
</div>

---

## Bienvenida

**Main St '63 Spring** simula la unidad de reverb de resorte externa de 1963 completa: la caja con sus propias válvulas y su tanque que se ponía entre la guitarra y el ampli. No es una respuesta al impulso ni un algoritmo de resorte genérico: el circuito se resuelve muestra por muestra.

- **Entrada:** una **12AT7** (V1A y V1B) con el control **Dwell**, que define cuánto se excita el tanque.
- **Driver:** una **6V6** que alimenta la bobina de entrada del tanque a través de su transformador, cargada por la propia bobina. Subí el Dwell y el driver y el transductor empiezan a comprimir, como en la unidad real.
- **Tanque:** dos resortes dispersivos (uno corto y uno largo), con los chirridos, el "drip" y la caída de un tanque de verdad.
- **Recuperación y mezcla:** la etapa de recuperación con **12AX7**, el control **Tone** y el **Mixer**, que mezcla la reverb con la señal seca que pasa por un seguidor de cátodo (V3B), como en el original.

La unidad completa se **validó contra 100 respuestas al impulso medidas en una '63 reedición real**, a lo largo de los controles Dwell y Tone.

**Totalmente funcional y completamente gratis.** Todas las funciones están disponibles sin límites de tiempo ni restricciones. Hay una clave de licencia opcional para apoyar el desarrollo y sacar la breve ventana de bienvenida.

---

## Requisitos del sistema

| | |
|---|---|
| **Windows** | 10 o posterior, 64 bits. No hace falta instalar nada más. |
| **macOS** | 10.13 High Sierra o posterior. Binario universal: corre nativo en Mac Intel y Apple Silicon. |
| **Linux** | x86_64, con glibc 2.35 o posterior (Ubuntu 22.04 y equivalentes en adelante). |
| **Formatos** | VST3 en los tres sistemas; Audio Unit (AU) en macOS para Logic Pro y GarageBand. Es un efecto para tu DAW: no hay aplicación standalone. |
| **CPU** | Liviana: alrededor de 4–5 % de un núcleo a 48 kHz con sobremuestreo en 1× (STEREO suma alrededor de 7 %). |

---

## Instalación

Copiá los archivos en la carpeta que corresponda a tu sistema:

| Sistema operativo | Formato VST3 | Formato AU (Audio Unit) |
|---|---|---|
| **Windows** | `C:\Program Files\Common Files\VST3\` | — |
| **macOS** | `~/Library/Audio/Plug-Ins/VST3/` | `~/Library/Audio/Plug-Ins/Components/` |
| **Linux** | `~/.vst3/` | — |

> **Nota para usuarios de macOS:**  
> Como es un proyecto independiente distribuido sin certificado comercial de desarrollador de Apple, Gatekeeper puede decir que el plugin está dañado o que es de un desarrollador no identificado. No es ninguna de las dos cosas: en el archivo `INSTALL.txt` incluido vas a encontrar dos comandos simples de Terminal para autorizarlo en segundos.

Una vez copiado, hacé que tu DAW vuelva a buscar plugins. Lo vas a encontrar como **Main St '63 Spring**, de Main St Audio Labs.

---

![Interfaz principal](/MainSt63Spring.png)

## Dos maneras de usarla

### 1. Como la unidad real: en la pista de guitarra, antes del ampli

Así se usaba la '63: guitarra → unidad de reverb → amplificador. Insertá **Main St '63 Spring** en la pista de guitarra **antes** de tu simulador de ampli (o mandá su salida a un ampli de verdad). Dejá **DRY en on** y **STEREO en off**: la unidad pasa la señal seca por sus propias válvulas y mezcla la reverb con el **Mixer**, igual que el original. Después el ampli colorea las dos juntas: ese es el sonido del surf y del rock clásico.

La salida usa la misma escala de voltaje que la entrada, así que se encadena directo con el Main St 5F1 sin tocar niveles.

### 2. Como reverb de estudio: en un envío / bus

Ponela en una pista auxiliar / bus y mandale guitarras, batería o lo que quieras:

1. Poné **DRY** en **off**: el plugin devuelve solo la reverb, y el **Mixer** pasa a ser el nivel de la reverb.
2. Prendé **STEREO** para tener amplitud: el resorte corto del tanque va a la izquierda y el largo a la derecha.
3. Empezá con el **Input** en alrededor de **−12 dB**: una mezcla a nivel de línea es mucho más caliente que una guitarra, y la 12AT7 y la 6V6 comprimirían mucho. Subilo si querés más de ese grano valvular.

> **¿Por qué el seco no desaparece con el Mixer en 10?**  
> Porque en la unidad real tampoco: el Mixer es un pote de 250 k entre la reverb y la señal seca, y en 10 el seco se sigue colando (lo medimos apenas unos 5 dB debajo de su máximo). Eso es parte del sonido cuando la unidad va antes de un ampli, y es justamente por eso que el plugin suma la tecla **DRY** para usarla en un bus.

---

## Controles

- **Dwell (1–10):** Cuánto excitan la entrada y la 6V6 al tanque. Abajo, una reverb liviana y limpia; desde alrededor de 8 el driver y el transductor comprimen y la reverb se pone más gruesa y agresiva.
- **Mixer (1–10):** La mezcla entre seco y reverb (con DRY en off, el nivel de la reverb).
- **Tone (1–10):** Los agudos del retorno de la reverb, de oscura al sonido brillante y salpicado del surf.
- **Tecla REVERB:** Prende y apaga la reverb, como el pedal de la unidad. Con DRY en on, la señal seca sigue pasando por la unidad. La reverb entra y sale en unos milisegundos para no hacer clic. El piloto ámbar muestra el estado (el original no lo tiene).
- **CABLE (off, 330 pF, 680 pF, 2,2 nF):** La capacidad del cable que va de la unidad al ampli, más la entrada del ampli. Los cables más largos le sacan brillo a la salida. 330 pF (unos 3 m) es el valor por defecto; 2,2 nF es un cable muy largo o pesado.
- **DRY (on / off):** On, como la unidad. Off, solo la reverb (para envíos y buses).
- **STEREO (off / on):** Off, mono como la unidad (la misma señal en los dos lados). On, los dos resortes separados: el corto a la izquierda, el largo a la derecha. La entrada siempre se suma a mono, como en la unidad, así que la reverb no sigue al paneo. Cada lado tiene el mismo nivel que la unidad mono.

Doble clic en una perilla la vuelve a 5. Con **Shift** apretado al arrastrar, el ajuste es fino. Cambiar CABLE o STEREO rearma el circuito, así que la cola que estaba sonando se corta.

---

## La franja de abajo

- **Input / Output:** Ajustes digitales en dB. Input define qué tan caliente entra la señal a la unidad (ver la calibración más abajo); Output es el nivel final.
- **Medidores y lecturas:** `in` muestra el voltaje pico que entra a la unidad (V pk); `out` muestra el nivel de salida en dBFS.
- **Oversampling (1×, 2×, 4×):** Reduce el aliasing de la entrada y del driver cuando se los exige. El tanque siempre corre a su propia frecuencia interna. 1× es el valor por defecto y con el que se validó el modelo; 2× y 4× suman 3 y 4 muestras de latencia, que se le informan a tu DAW.
- **INFO:** La versión, cómo está hecha, la web y tu clave de licencia.

### Calibración de la entrada

La reverb responde al **voltaje real** en su jack de entrada, igual que los amplis: un humbucker caliente exige más a la 6V6 que un single coil vintage. `0 dBFS` corresponde a **4,62 V pico** en el jack (una Focusrite Scarlett de 3.ª generación con la ganancia al mínimo, entrada INST). Rasgueá fuerte y ajustá el **Input** para que la lectura `in` quede en el rango de tus micrófonos:

| Tipo de micrófono | Pico sugerido en un rasgueo fuerte |
|---|---|
| **Single-coil vintage** | **0,4 – 1,0 V** |
| **Single-coil caliente** | **0,8 – 1,8 V** |
| **Humbucker vintage** | **1,0 – 1,8 V** |
| **Humbucker caliente / de alta salida** | **2,0 – 3,5 V** |
| **Micrófonos activos** | **1,5 – 2,5 V** |

---

## Preguntas frecuentes

**¿Por qué la entrada es mono?**  
La unidad original es mono: una entrada, un tanque. Una entrada estéreo se suma a mono. Para tener amplitud, usá STEREO, que separa los dos resortes del tanque.

**¿Por qué no tiene pre-delay?**  
La unidad real no lo tiene: la primera reflexión llega cuando la entregan los resortes. Si querés un espacio antes de la reverb en un bus, un delay antes de ella en el mismo bus lo resuelve.

**¿Por qué se corta la cola cuando cambio CABLE, STEREO u OVERSAMPLING?**  
Esos ajustes cambian la estructura del circuito simulado, así que el plugin arma uno nuevo y pasa a usarlo.

**Puse mi clave, pero la ventana de bienvenida sigue apareciendo.**  
Aparece como mucho una vez por sesión y solo sin clave. Si sigue apareciendo después de guardar tu clave, escribinos y te ayudamos.

---

## Créditos y marcas

- Modelo de resorte según Välimäki, Parker y Abel (JAES 2010), Parker (EURASIP 2011) y Gamper, Parker y Välimäki (DAFx 2011).
- Modelado matemático de válvulas: Norman Koren (1996); formulación de corriente de grilla: Dempwolf y Zölzer (DAFx 2011).
- Filtros de onda digital (WDF): librería `chowdsp_wdf` desarrollada por Jatin Chowdhury (licencia BSD-3).
- Arquitectura desarrollada sobre JUCE framework.
- Tipografías: Montserrat e IBM Plex Mono (SIL Open Font License 1.1).

*Todos los nombres de productos, marcas comerciales y modelos mencionados (tales como Fender y Focusrite) pertenecen a sus respectivos propietarios y se citan exclusivamente con fines descriptivos e históricos del equipamiento analógico tomado como referencia. Main St Audio Labs es un proyecto independiente y no cuenta con afiliación, patrocinio ni aval comercial por parte de dichas marcas.*

<div style="margin: 1.75rem 0; text-align: center;">
  <a href="https://github.com/mainstaudiolabs/mainstaudiolabs.github.io/releases/tag/MainSt63Spring-v1.0.0" target="_blank" class="rock-btn rock-btn-primary" style="display: inline-flex; align-items: center; justify-content: center; min-width: 250px; padding: 0.65rem 1.6rem; text-decoration: none; font-size: 1rem;">Descargar Main St '63 Spring v1.0.0 (GRATIS) ⬇️</a>
</div>

Si grabás algo con esta reverb, queremos escucharlo. Copiá nuestro correo para mandarnos el enlace:

<div class="rock-copy-email-wrapper inline">
  <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
  <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>

<p style="margin-top: 2rem; margin-bottom: 1rem;">Si querés apoyar nuestra investigación independiente y ayudarnos a mantener los plugins gratuitos, podés hacerlo con tarjeta, PayPal o criptomonedas:</p>

<div>
  <a href="/support" class="rock-btn rock-btn-primary" style="display: inline-block; text-align: center;">Apoyar al laboratorio (Ko-fi / Crypto) ☕</a>
</div>

<div class="print-footer">
  Sitio oficial y manual: <a href="https://mainstaudiolabs.github.io/es/main-st-63-spring.html" target="_blank">https://mainstaudiolabs.github.io/es/main-st-63-spring.html</a>
</div>

<div class="section-head" style="margin-top:3rem;"><h2>Otros plugins</h2></div>

<PluginGrid exclude="main-st-63-spring" />
