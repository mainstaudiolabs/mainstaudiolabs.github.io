<script setup>
import { ref } from 'vue'
const btnText = ref('Copiar correo')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = '¡Copiado!'
  setTimeout(function() { btnText.value = 'Copiar correo' }, 2000)
}
</script>

<ProductHero id="main-st-5e3" />

<div id="manual"></div>

Este manual describe el uso, el diseño y las especificaciones técnicas del amplificador **Main St 5E3**.

<div class="callout" style="margin: 1.25rem 0 1.75rem; text-align: center;">
  <strong>Próximamente.</strong> Main St 5E3 está en las últimas pruebas. Va a salir con una <strong>prueba completa de 30 días</strong> —sin nada deshabilitado— y la licencia cuesta <strong>US$ 9, pago único</strong>. Suscribite al boletín en la página de inicio para enterarte el día que salga.
</div>

---

## Bienvenido

**Main St 5E3** es una simulación física a nivel de componentes del circuito tweed 5E3 de los años 50, no una captura estática ni una convolución.

Cada etapa del circuito interactúa y se resuelve en tiempo real mediante filtros de onda digital (*Wave Digital Filters*):
- **Dos canales, Normal y Bright**, armados con las dos mitades de una **12AY7** que comparten una sola resistencia de cátodo. Por eso los dos volúmenes interactúan, el rasgo por el que el 5E3 es famoso.
- Una etapa de ganancia **12AX7** seguida de un inversor de fase **catodino**, resueltos junto con las grillas de las válvulas de potencia, para que el bloqueo y la manera en que el ampli "se hunde" en la saturación ocurran como en el circuito.
- Un **par push-pull de 6V6GT** con resistencia de cátodo compartida, sobre un transformador de salida modelado.
- Una fuente con rectificadora a válvula **5Y3GT**, cuya caída de tensión (*sag*) comprime y respira con tu púa.
- Un parlante **Jensen P12Q** de 12" alnico modelado como carga eléctrica reactiva (con su bobina semi-inductiva) que interactúa con las válvulas de potencia.
- Respuestas al impulso propias de ese parlante en un gabinete tweed 1×12, con cuatro micrófonos en cuatro posiciones.

El resultado es un ampli que se limpia con el volumen de la guitarra, rompe cuando atacás fuerte y se convierte en el famoso rugido tweed cuando está al máximo.

**Prueba completa de 30 días, después US$ 9 pago único.** Durante la prueba está todo disponible, sin ruidos, sin cortes y sin funciones recortadas. A los 30 días el ampli se silencia hasta que actives una licencia. Sin suscripción, y sin internet después de activar.

---

## Requisitos del sistema

| | |
|---|---|
| **Windows** | 10 o posterior, 64 bits. No hay que instalar nada más: el plugin no depende de bibliotecas externas. |
| **macOS** | 10.13 High Sierra o posterior. Binario universal: corre nativo en Mac Intel y Apple Silicon. |
| **Linux** | x86_64, con glibc 2.35 o posterior (Ubuntu 22.04 y equivalentes en adelante). |
| **Formatos** | VST3 en los tres sistemas; Audio Unit (AU) en macOS para Logic Pro y GarageBand. Incluye además una aplicación independiente (Standalone) que no necesita DAW. |
| **CPU** | Cualquier equipo capaz de correr un DAW actual. El modelo resuelve un ampli push-pull muestra por muestra, así que le pide más a la CPU que el 5F1; con el sobremuestreo por defecto (2×) igual deja margen de sobra para el resto de la sesión. |

---

## Instalación

No hay instaladores complicados. Copiá los archivos a la carpeta que corresponde a tu sistema:

| Sistema | VST3 | AU (Audio Unit) | Aplicación Standalone |
|---|---|---|---|
| **Windows** | `C:\Program Files\Common Files\VST3\` | — | Cualquier carpeta |
| **macOS** | `~/Library/Audio/Plug-Ins/VST3/` | `~/Library/Audio/Plug-Ins/Components/` | `/Applications/` |
| **Linux** | `~/.vst3/` | — | Cualquier carpeta |

> **Nota para usuarios de macOS:**  
> El plugin se distribuye sin certificado comercial de desarrollador de Apple, así que Gatekeeper puede mostrar un aviso de seguridad la primera vez. El plugin es seguro; en el `INSTALL.txt` incluido hay tres líneas para la Terminal, listas para copiar y pegar, que lo autorizan en segundos.

Después de copiarlo, volvé a escanear los plugins en tu DAW. Lo vas a encontrar como **Main St 5E3**, en VST3 y —en macOS— también como Audio Unit (AU), compatible con Logic Pro y GarageBand.

---

## Prueba y licencia

- **30 días, completo.** Los días que quedan se ven arriba de la ventana (**TRIAL · 23 DAYS LEFT**). Se pone en rojo los últimos cinco días.
- **Comprá cuando quieras.** La licencia cuesta **US$ 9, pago único**. Podés activarla en cualquier momento de la prueba: tocá el aviso **TRIAL** de arriba (o el botón **`i`** → **LICENSE** → **OPEN**), pegá la clave que te llegó por correo y tocá **activate**.
- **Internet una vez.** Al activar se verifica la clave con la tienda una sola vez. Después el plugin funciona sin conexión para siempre.
- **Cuando termina la prueba,** el ampli se silencia y el panel de licencia se abre solo, con el campo para la clave y el botón **BUY A LICENSE · $9**.
- **macOS:** GarageBand y Logic Pro (en Apple Silicon) corren los plugins dentro de un sandbox, y cada uno de esos programas guarda su propia prueba y su propia licencia. Pegá la clave una vez en cada uno.
- **¿No podés activar?** Si tu computadora, un firewall o el programa no llega a internet, escribinos con tu clave y te mandamos un **código de desbloqueo** (empieza con `MSAL1-`) que activa sin conexión. Va en el mismo campo.

---

## Primeros pasos

- **Aplicación Standalone:**  
  La primera vez se abre sola la ventana de audio. Elegí tu placa y, sobre todo, **el canal de entrada donde está conectada la guitarra**. Podés volver a abrirla cuando quieras con el botón **AUDIO** de la franja de abajo.

- **En tu DAW:**  
  Insertá el plugin en la pista de guitarra. El circuito del ampli es mono, así que el plugin toma **una sola entrada mono**: usalo en una pista mono. La salida es mono o estéreo (el gabinete puede panear sus dos micrófonos), así que la mayoría de los DAW también lo dejan insertar como efecto mono→estéreo.

Antes de tocar, te recomendamos ajustar el nivel de entrada con la guía de abajo. Lleva unos segundos y hace que el ampli responda como tiene que responder.

---

![Interfaz principal](/MainSt5E3.png)

## Ajustar el nivel de entrada

En un circuito valvular real, la respuesta no depende de decibeles digitales sino de **la tensión que la guitarra mete en el jack de entrada**. Esa tensión decide cuánto se exige la primera 12AY7, cuándo empieza a romper el ampli y cuánto comprime la etapa de potencia. Tu placa de audio cambia ese nivel (su perilla de ganancia, su modelo), así que lo primero es ajustar **INPUT** para que el ampli reciba lo que le mandaría una guitarra.

Debajo del medidor de **INPUT**, en la franja de abajo, el plugin muestra la **tensión pico que llega al ampli** (después de INPUT), sostenida alrededor de 1,5 segundos.

1. Poné la ganancia de la placa como siempre (sin saturar, su propio medidor bien lejos del tope).
2. Rasgueá fuerte con tu micrófono de siempre.
3. Mové **INPUT** hasta que la lectura debajo del medidor muestre más o menos el valor de "rasgueo fuerte" para tu tipo de micrófono:

| Tipo de micrófono | Tocando normal | Rasgueo fuerte |
|---|---|---|
| **Single coil vintage** (Strat, Tele) | 0,05 – 0,10 V | **0,3 – 0,5 V** |
| **Single coil caliente, P-90** | 0,10 – 0,20 V | **0,5 – 0,8 V** |
| **Humbucker** (tipo PAF) | 0,10 – 0,25 V | **0,6 – 1,0 V** |
| **Humbucker caliente** | 0,20 – 0,40 V | **1,0 – 1,5 V** |
| **Activos** | 0,30 – 0,60 V | **1,5 – 2,5 V** |

Son puntos de partida aproximados; los micrófonos varían mucho. Desde ahí, confiá en tu oído: menos INPUT se comporta como un micrófono más débil (más limpio, más margen), más INPUT como uno más caliente.

> **Para eso está el control Input.** No es un control de tono: ajusta el nivel que entrega tu equipo al nivel que espera el circuito. Rehacelo cada vez que cambie la cadena: otra placa, otra entrada, otra ganancia en tu equipo, o al pasar del Standalone al DAW.

*Referencia: con una Focusrite Scarlett (3.ª generación) con la ganancia al mínimo en modo INST, el plugin lee la tensión real en el jack (0 dBFS = 4,62 V pico), así que con INPUT en 0 dB ya está bien para esa placa.*

---

## Controles del amplificador

La cara del ampli sigue el panel original: dos volúmenes, un tono, cuatro jacks.

- **Normal (1 a 12):** Volumen del canal Normal: más oscuro y redondo.
- **Bright (1 a 12):** Volumen del canal Bright, que además alimenta la red de tono a través de un capacitor chico: más filo y más brillo.
- **Tone (1 a 12):** El único control de tono, compartido por los dos canales.
- **La interacción:** Los dos canales comparten el cátodo de la primera válvula y se mezclan en la etapa siguiente, así que el volumen del canal que *no* usás igual cambia el sonido. Con ese volumen al mínimo, el otro canal se oscurece un poco, exactamente como en el ampli real. Es el rasgo más famoso del 5E3, y está en el circuito, no agregado encima.
- **Jacks de entrada:** Tocá el jack donde va la guitarra.
  - **Hi:** sensibilidad completa.
  - **Lo:** −6 dB, por el divisor original de 68 kΩ: más suave, para micrófonos calientes.
- **JUMPER (OFF / TO HI / TO LO):** El truco clásico de tender un cable corto desde el jack libre de tu canal al otro canal, para que suenen los dos a la vez, cada uno con su volumen. **TO LO** le manda un cuarto de la señal (−12 dB) al otro canal, antes de su válvula, para una mezcla más sutil.
- **MODS (no originales, apagados por defecto):**
  - **Lead:** Separa el cátodo de la primera válvula para que el canal Normal tenga graves más ajustados y más medios.
  - **V2A cathode:** **stock** (como el original), **no bypass** (unos 6 dB menos de ganancia, más firme) o **nfb** (agrega realimentación negativa desde el parlante: menos ganancia, graves más ajustados, más margen).

---

![Gabinete](/MainSt5E3Cabinet.png)

## El gabinete

Tocá el gabinete chico de la cara del ampli para abrir el gabinete. Las respuestas al impulso son propias, de un parlante **Jensen P12Q** de 12" alnico en un gabinete tweed **1×12**.

- **Uno o dos micrófonos:** **SM57**, **SM94**, **R121** y **MD421** (el segundo puede ser **NONE**).
- **Posición sobre el parlante:** Tocá (o arrastrá) sobre el dibujo del parlante donde querés cada micrófono: el centro del domo, el borde del domo, el cono o el borde del cono. Al pasar el mouse se ilumina el anillo con su nombre.
- **BLEND** entre los dos micrófonos, **paneo** de cada uno (la salida pasa a estéreo) y **Ø fase** en el segundo.
- **Pares clásicos** con un clic: 57 + 121, 57 + 421, 94 + 121 y un par estéreo abierto.
- **DIRECT · NO CAB:** Saca el gabinete, para usar tus propias respuestas al impulso o un plugin de parlante.

---

## Presets

La píldora de presets de arriba pasa de un preset al otro (anterior / siguiente) y muestra un punto rojo cuando cambiaste algo.

- **De fábrica:** *default* (el plugin recién abierto), *clean normal*, *edge of breakup*, *jumpered crunch*, *cranked tweed* y *tight · nfb*.
- **Propios:** **save** guarda los tuyos; el menú suma **SAVE AS NEW**, **RENAME**, **DELETE**, **IMPORT** y **OPEN FOLDER**.
- Un preset guarda el ampli y el gabinete (volúmenes, tono, jack, mods, micrófonos), no Input, Output, sobremuestreo ni el afinador.

---

## La franja de abajo

- **Input / Output:** Ajustes de ganancia digital (en dB) con sus medidores. Debajo: la tensión pico que llega al ampli (ver *Ajustar el nivel de entrada*) y el nivel de salida en dBFS.
- **Oversampling (1×, 2×, 4×, 8×):**
  - **1× / 2×:** Para grabar y tocar en vivo: poca CPU y poca latencia. 2× es el valor por defecto.
  - **4× / 8×:** Para mezclar y exportar, con armónicos todavía más limpios. Aumentan la CPU en proporción: en equipos modestos, dejalos para la exportación.
- **AUDIO (Standalone):** Abre los ajustes de audio (placa, canal de entrada, frecuencia de muestreo, buffer).

---

![Afinador integrado](/MainSt5E3tunner.png)

## Afinador integrado

Tocá el diapasón de arriba a la derecha para ver el afinador.

- **Aguja de ±50 cents** con la nota detectada; se pone **verde** cuando estás afinado.
- **Toma limpia:** El afinador escucha la guitarra antes del ampli, así que la distorsión nunca lo confunde.
- **Silencio al afinar:** Opcional; el sonido vuelve siempre al salir del afinador.
- **Referencia (A4):** De 430 Hz a 450 Hz (440 Hz por defecto).
- **Cero consumo en reposo:** El afinador solo corre mientras su cara está abierta.

---

## Información y ajustes

Tocá la **`i`** de arriba a la derecha: cómo está hecho el ampli, la versión y los ajustes: la carpeta de presets, el tamaño de ventana por defecto y tu **LICENSE** (el estado y el botón para abrir el panel de licencia). La ventana se puede agrandar libremente, de 960×540 hasta 4K, y guarda su tamaño con tu proyecto.

---

## Preguntas frecuentes

**¿En qué se diferencia del 5F1?**  
El 5F1 es single-ended, con una válvula de potencia y una perilla. El 5E3 es push-pull con dos 6V6GT, inversor catodino, dos canales que interactúan y un parlante de 12": más margen, más graves y una manera de romper completamente distinta, de redondo y limpio a un rugido suelto y comprimido.

**¿Puedo activar la licencia antes de que termine la prueba?**  
Sí, en cualquier momento. Desde ahí la prueba deja de contar.

**¿Necesito internet para tocar?**  
Solo una vez, para activar. Después, nunca. Si no podés activar en línea, escribinos y te mandamos un código de desbloqueo que funciona sin conexión.

**¿Por qué el motor es mono?**  
El circuito original del 5E3 es mono. El estéreo viene del gabinete, si paneás sus dos micrófonos.

**¿Cómo bajo el uso de CPU?**  
Dejá el sobremuestreo en **1× o 2×** para grabar o tocar en vivo, y pasalo a **4× u 8×** antes de exportar la mezcla final.

**No suena nada en la aplicación Standalone.**  
Abrí **AUDIO** en la franja de abajo y fijate que estén elegidos tu placa y el canal de entrada correcto. Si terminó la prueba, el ampli está en silencio hasta que actives una licencia.

---

## Créditos y marcas

- Modelos de válvula: Norman Koren (1996); corriente de grilla: Dempwolf y Zölzer (DAFx 2011).
- Filtros de onda digital (WDF): biblioteca `chowdsp_wdf` de Jatin Chowdhury (licencia BSD-3).
- Mods: valores de los conocidos artículos de Rob Robinette sobre mods del 5E3.
- Respuestas al impulso del gabinete hechas con Caja Sintética, nuestro modelo físico de gabinete.
- Agradecimiento especial: Horst Zankl.
- Verificación de los códigos de desbloqueo: Monocypher (BSD-2 / CC0).
- Desarrollado con el framework JUCE.
- Tipografías: Caveat e IBM Plex Mono (SIL Open Font License 1.1).

*Todos los nombres de productos y marcas mencionados (incluidos Fender, Tweed Deluxe, 5E3, Jensen, Triad, Shure, Royer y Sennheiser) pertenecen a sus respectivos dueños y se citan solo como contexto histórico e identificación descriptiva del equipo analógico modelado. Main St Audio Labs es un desarrollador independiente y no tiene afiliación, aval ni patrocinio de estas empresas.*

Si querés enterarte cuando salga, o probarlo antes, copiá nuestro correo y escribinos:

<div class="rock-copy-email-wrapper inline">
  <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
  <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>

<div class="print-footer">
  Sitio y manual oficial: <a href="https://mainstaudiolabs.github.io/es/main-st-5e3.html" target="_blank">https://mainstaudiolabs.github.io/es/main-st-5e3.html</a>
</div>

<div class="section-head" style="margin-top:3rem;"><h2>Otros plugins</h2></div>

<PluginGrid exclude="main-st-5e3" />
