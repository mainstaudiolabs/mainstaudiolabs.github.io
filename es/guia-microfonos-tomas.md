# 🎙️ Guía Maestra de Micrófonos, Tomas e Ingeniería de Audio
### Acústica del Cono EVM-12L, Física de la Fase, Mezcla Dual y el Secreto del Estéreo en Una Sola Pista
**TattooYou Vintage Amplifier & Studio Suite | Main St Audio Labs**

---

## 📖 Prólogo: El Arte de Capturar un Amplificador Legendario

En las grabaciones legendarias de finales de los años 70 y principios de los 80, el sonido de la guitarra eléctrica dejó de ser un simple micrófono puesto al descuido frente a un amplificador. Los grandes ingenieros de estudio descubrieron que la interacción entre el **mueble de madera dura**, la **fidelidad sin saturación del altavoz** y la **combinación milimétrica de micrófonos en fase** era el verdadero secreto detrás de ese tono gigante, tridimensional y con presencia que salta de los parlantes.

El módulo **1x12 Hardwood Cab Lab** integrado en **TattooYou** recrea con precisión científica todo ese entorno de estudio. Este documento detalla la física acústica detrás del gabinete, la respuesta en frecuencia del cono, el comportamiento de la fase y cómo utilizar el motor de **convolución dual** para lograr mezclas de nivel profesional.

---

## 🔊 1. La Física del Altavoz EVM-12L y el Gabinete Hardwood

### A. Cero Distorsión del Cono (*Zero Speaker Breakup*)
La mayoría de los altavoces de guitarra tradicionales (como los conos británicos clásicos de 25W o 30W) tienen una respuesta no lineal: cuando el amplificador empuja potencia, la membrana de papel flexiona y satura, añadiendo un grano áspero en medios-agudos y comprimiendo los graves.

El **EVM-12L** (200W–300W continuos, imán cerámico masivo de 7.5 kg y chasis de fundición de aluminio) fue diseñado con un objetivo opuesto:
* **Fidelidad y Headroom Masivo:** El cono no deforma la señal ni añade distorsión armónica propia. Toda la compresión, saturación y textura armónica que escuchas proviene **puramente de las válvulas 6L6 y del circuito del previo Mark I ('78)**.
* **Separación Quirúrgica de Cuerdas:** Los acordes complejos y las afinaciones abiertas (como el Sol abierto de Keith Richards) mantienen cada cuerda individual perfectamente distinguible, sin empastarse.

### B. Mueble de Madera Dura con Sintonía Bass-Reflex
A diferencia de los gabinetes estándar de aglomerado con fondo abierto (*open back*), esta caja construida en **madera dura maciza (*hardwood*)** cuenta con un puerto de ventilación inferior:
* **Graves Secos y Controlados:** La resonancia acústica del puerto refuerza las frecuencias entre **80 Hz y 160 Hz** con un amortiguamiento crítico, eliminando el retumbe descontrolado o la "bola de graves" al tocar rítmicas pesadas o afinaciones bajas.

---

## 🎯 2. La Acústica del Cono: Mapa de Posicionamiento

La superficie de un altavoz de 12 pulgadas no irradia el sonido de manera homogénea. A medida que alejamos la cápsula del micrófono del centro hacia el borde, la masa acústica del cono atenúa las frecuencias ultra-altas y realza el cuerpo:

```text
                  ┌──────────────────────────────────────────────┐
                  │                 CONO DEL ALTAVOZ             │
                  │                                              │
                  │      ( -3 )      ( -2 )      ( -1 )   ( 0 )  │
                  │      Borde        Cono      Borde Cap  Centro │
                  │     (Oscuro)    (Cálido)    (Balance) (Brillo)│
                  │                                              │
                  │  [ PORT ]  <─── (Ranura bass-reflex de aire) │
                  └──────────────────────────────────────────────┘
```

| Toma | Posición Física | Respuesta en Frecuencia | Carácter Tonal y Caso de Uso Ideal |
| :---: | :--- | :--- | :--- |
| **`0: Direct`** | **Centro / Dust Cap** | Realce en **4 kHz – 8 kHz**. | Máximo ataque de púa, súper brillante y cortante. Ideal para solos que deben atravesar mezclas densas o funk percusivo. |
| **`+1: Edge`** | **Borde del Cap** | Ataque claro con agudos levemente suavizados. | El tono clásico de rock rítmico con mordida definida y presencia enérgica. |
| **`-1: Sweet`** | **Transición Cap-Cono** | Curva equilibrada (**Punto Dulce**). | **El estándar de estudio:** Balance óptimo de graves, medios crujientes y agudos sedosos. Excelente punto de partida para cualquier estilo. |
| **`-2: Warm`** | **Cuerpo del Cono** | Medios redondos, caída suave sobre 5 kHz. | Sonido cálido y fuera de eje. Ideal para domar pastillas de puente muy brillantes (Telecaster, Stratocaster). |
| **`-3: Dark`** | **Borde Exterior** | Graves profundos, agudos totalmente atenuados. | Tono grueso y oscuro. Perfecto para Jazz aterciopelado, Blues vintage o guitarras con afinaciones agresivas. |
| **`Port: Bass`** | **Ranura Bass-Reflex** | Pico de energía en **80 Hz – 160 Hz**. | Captura el empuje de aire del puerto inferior. Añade la pegada en el pecho y el peso característico de una caja 4x12. |
| **`Room 3D`** | **Sala de Grabación** | Acústica tridimensional y reflexiones naturales. | Par estéreo a distancia en la sala del estudio. Elimina la sensación artificial de "caja seca" y sitúa el ampli en un espacio real. |

---

## 🎧 3. El Secreto Físico de las Tomas Left (L) y Right (R)

Todas las posiciones cuentan con tomas **`L` (Izquierda)** y **`R` (Derecha)** (ejemplo: `57 L -1` y `57 R -1`):

### ¿Por qué suenan sutilmente distintas si el parlante es redondo?
1. **Asimetría Física de la Bobina:** Los cables flexibles que conectan los terminales con la bobina móvil (*tinsel leads*) van soldados sobre uno de los hemisferios del cono. Esa microscópica diferencia de masa y rigidez altera la respuesta armónica entre el lado izquierdo y derecho.
2. **Veta y Estructura del Mueble:** La madera natural y el flujo de aire del puerto interior generan micro-reflexiones asimétricas que un micrófono de estudio de alta gama registra con total fidelidad.

---

## 🔬 4. La Ciencia de la Fase: Cero Cancelación Destructiva

### A. El Peligro del Filtro Peine (*Comb Filtering*)
En un estudio físico real, si colocas dos micrófonos frente al cono con una mínima diferencia de distancia de apenas 1 o 2 milímetros:
* La onda llega a un micrófono unos microsegundos antes que al otro.
* Las frecuencias cuya longitud de onda coincide con ese retardo chocan a $180^\circ$ de polaridad opuesta y **se anulan mutuamente**.
* **El resultado sonoro:** La guitarra pierde toda su pegada en graves y suena "flaca, nasal y hueca".

```text
                ONDA MIC A:    ──/\──\/──/\──\/──
                ONDA MIC B:    ──\/──/\──\/──/\──  (Desfasada 180°)
                               ──────────────────
                SUMA RESULTANTE: ────────────────  (¡Cancelación / Sonido a lata!)
```

### B. Cómo Resuelve la Fase TattooYou: Alineación por Transiente (*Sample-Accurate*)
En el desarrollo de **TattooYou**, todas las tomas del gabinete fueron calibradas mediante **Transformada de Fase Mínima (*Minimum Phase Transform*)**:
1. El ataque transitorio inicial de cada micrófono y posición comienza exactamente en la **muestra cero ($t = 0$)**.
2. **Correlación Positiva Superior a $+0.92$:** En todo el rango de graves y medios fundamentales (80 Hz a 3 kHz), la correlación es prácticamente $+1.0$. **Los graves nunca se cancelan; se suman y se refuerzan con mayor solidez**.
3. **Micro-textura en Agudos (> 4 kHz):** Las micro-diferencias en el extremo agudo actúan como un suavizado analógico natural (*phase smoothing*), eliminando asperezas sin destruir la señal.

---

## 🎛️ 5. Perfiles de Micrófonos

### 1. Shure 57 (Dinámico Cardioide)
* **Carácter:** El estándar indiscutido de la historia del rock.
* **Respuesta:** Realce característico en los 3 kHz – 6 kHz que empuja la guitarra hacia el frente de la mezcla con ataque de púa y mordisco definido.

### 2. Neumann 87 (Condensador de Gran Diafragma)
* **Carácter:** Fidelidad de estudio de gama alta (*Hi-Fi*).
* **Respuesta:** Curva de frecuencia ancha y lineal, con graves profundos, cuerpo aterciopelado y agudos ultra detallados con "aire" de estudio.

### 3. U87 Room L / Room R (Par Estéreo de Sala)
* **Carácter:** Captura la acústica tridimensional de la sala de grabación.
* **Uso:** Perfecto para monitoreo con auriculares o para aportar profundidad espacial real sin necesidad de añadir reverbs artificiales.

---

## 🎛️ 6. Arquitectura DSP: Motor de Convolución Dual en Paralelo

En lugar de limitarte a un solo archivo IR fijo, **TattooYou** integra la consola **1x12 Hardwood Cab Lab** con dos motores de convolución (`cab1Convolution` y `cab2Convolution`) corriendo en paralelo a latencia cero:

```text
                                  SEÑAL DEL PREVIO Y ETAPA 6L6
                                                │
                       ┌────────────────────────┴────────────────────────┐
                       ▼                                                 ▼
             [ CONVOLUCIÓN MIC 1 ]                             [ CONVOLUCIÓN MIC 2 ]
             Toma: 57 L (-1) Sweet                             Toma: 87 L (0) Direct (o 57 R)
             Fader: -24 dB a +6 dB                             Fader: -24 dB a +6 dB
             Nivel ponderado: w1                               Fase: Normal / Invertida (Ø)
                       │                                       Nivel ponderado: w2
                       │                                                 │
                       └────────────────────────┬────────────────────────┘
                                                ▼
                                    SECCIÓN MASTER DEL CAB LAB
                                  (Perilla BLEND: Equal-Power)
                                                │
                        ┌───────────────────────┴───────────────────────┐
                        ▼                                               ▼
               MODO MONO (MONO SUM)                           MODO STEREO SPREAD 3D
          Suma ponderada al centro:                      Canal Izquierdo = Mic 1 * (w1 * √2)
          Out = (Mic1 * w1) + (Mic2 * w2)                Canal Derecho   = Mic 2 * (w2 * √2)
```

---

## ⚖️ 7. MONO vs. STEREO SPREAD: ¿Cómo Aplicar el Blend según tu Necesidad?

El verdadero poder de TattooYou radica en cómo combinas los dos micrófonos mediante los dos modos de salida disponibles:

---

### A. Modo MONO (`Mono Sum` - Switch Stereo Spread Apagado)
En este modo, ambos micrófonos procesan la señal y **se suman directamente en fase al centro de la pista**.

#### ¿Cuándo usar Modo Mono?
* Guitarras rítmicas principales dentro de una mezcla densa de banda completa (batería pesada, bajo, teclados y voces).
* Pistas de guitarra mono tradicionales donde buscas un **tono ultra compacto, gordo y con pegada central**.

#### ¿Cómo aplicar el `BLEND` en Mono?

1. **El Truco del Promedio de Cono (Sumar Toma L + Toma R del MISMO Micrófono):**
   * **Mic 1:** `57 L (-1) Sweet`
   * **Mic 2:** `57 R (-1) Sweet`
   * **Blend al 50% en Mono:**
     ```text
     Toma 57 "L" ──┐
                   ├───> SUMA EN MONO ───> SUAVIZADO NATURAL DE AGUDOS (PHASE SMOOTHING)
     Toma 57 "R" ──┘
     ```
   * **Qué ocurre acústicamente:** Como los picos resonantes de los agudos ocurren en frecuencias ligeramente distintas en el lado izquierdo y derecho del cono, al sumarse en mono se promedian. Se eliminan las asperezas o "chispazos" estridentes y los medios ganan un cuerpo y densidad analógica impresionante sin necesidad de usar ecualizadores.

2. **Combinación Dinámico + Condensador (Ataque + Cuerpo Hi-Fi):**
   * **70% Mic 1 (57 Sweet) + 30% Mic 2 (87 Direct):** El 57 aporta la presencia y el crujido para cortar la mezcla, mientras que el 87 rellena los graves y el aire superior.

3. **Inyección de Sub-Graves (Ataque + BassPort):**
   * **75% Mic 1 (57 Sweet) + 25% Mic 2 (57 BassPort):** Mantienes la definición en el ataque de púa mientras inyectas el empuje y peso en el pecho de una caja 4x12.

---

### B. Modo STEREO (`STEREO SPREAD 3D` - Switch Stereo Spread Encendido)
En este modo, el **Micrófono 1 se envía al canal izquierdo (L)** y el **Micrófono 2 al canal derecho (R)** con una compensación automática de ganancia de **+3 dB ($\sqrt{2}$)** para mantener la energía intacta.

#### 🚀 El Gran Beneficio: Estéreo Gigante en UNA SOLA PISTA (*Sin Duplicar Pistas*)
* **Te ahorras clonar pistas en el DAW:** No necesitas crear dos canales, desfasar eventos ni lidiar con plugins de ensanchamiento artificial que arruinan la compatibilidad mono.
* **Espacialidad analógica real:** Al alimentar cada oído con una perspectiva acústica ligeramente distinta del mismo cono (o con dos micrófonos complementarios), tu cerebro percibe inmediatamente el **tamaño físico real del amplificador en la habitación**.

#### ¿Cómo aplicar el `BLEND` en Modo Stereo?
1. **La Técnica de Doble Tracking Ancho (*Wide Double Track*):**
   * **Mic 1:** `57 L (-1) Sweet` (100% al oído izquierdo).
   * **Mic 2:** `57 R (-1) Sweet` (100% al oído derecho).
   * **Blend en 50%:** Logras una separación estéreo inmensa, limpia y ultra-natural para guitarras rítmicas abiertas con una sola pista en el proyecto.
2. **La Técnica de Directo en Estudio (*Studio Live 3D*):**
   * **Mic 1:** `57 L (-1) Sweet` (Sonido directo pegado al frente a la izquierda).
   * **Mic 2:** `87 Room L 3D` (Ambiente y reflexiones de la sala a la derecha).
   * **Blend en 25%–30%:** Tienes la guitarra perfectamente ubicada con un halo tridimensional de sala que se abre naturalmente en el espacio estéreo.
3. **Monitoreo con Auriculares sin Fatiga:**
   * Tocar o practicar con auriculares en modo Stereo Spread elimina la fatiga auditiva que causan los simuladores tradicionales que suenan "en el centro exacto del cráneo".

---

### 📊 Cuadro Comparativo: ¿Mono o Stereo Spread?

| Necesidad de Producción | Modo Recomendado | Configuración de Micrófonos | Ajuste de Blend Sugerido |
| :--- | :---: | :--- | :---: |
| **Guitarras Rítmicas en Mezcla Completa** | **MONO** | Mic 1: `57 L Sweet` + Mic 2: `87 L Direct` | **30% a 40%** |
| **Suavizar Agudos Estridentes / Tono Gordo** | **MONO** | Mic 1: `57 L Sweet` + Mic 2: `57 R Sweet` | **50% (Suma L + R)** |
| **Riffs Pesados / Afinaciones Bajas** | **MONO** | Mic 1: `57 L Sweet` + Mic 2: `57 L BassPort` | **20% a 30%** |
| **Rítmica Estéreo en 1 Sola Pista** | **STEREO** | Mic 1: `57 L Sweet` + Mic 2: `57 R Sweet` | **50% (Balance Central)** |
| **Intros, Arpegios Limpios y Solos Espaciales** | **STEREO** | Mic 1: `57 L Sweet` + Mic 2: `87 Room L 3D` | **25% a 35%** |
| **Tono Solista Clásico Directo** | **MONO** | Mic 1: `57 L Sweet` + Mic 2: *Off* | **0% (100% Mic 1)** |
| **Guitarras Acústicas / Hi-Fi Transparentes** | **MONO / STEREO** | Mic 1: `87 L Direct` + Mic 2: `87 R Open` | **50%** |

---

## 🏆 8. Presets de Estudio Integrados

En el menú superior de la consola **Cab Lab** puedes cargar con un solo clic las 6 combinaciones maestras:

```text
 1. 🎸 Studio Standard  ──> 57 L Sweet + 87 L Direct  (Blend 30%, Mono)
 2. 🥊 Heavy Punch      ──> 57 L Sweet + 57 L BassPort (Blend 25%, Mono)
 3. 🌌 Live Room 3D     ──> 57 L Sweet + 87 Room L 3D  (Blend 25%, Stereo)
 4. 🎧 Wide Double Track──> 57 L Sweet + 57 R Sweet   (Blend 50%, Stereo)
 5. ⚡ Solo 57 Classic  ──> 57 L Sweet (Mic 2 Apagado, Mono)
 6. ✨ Solo 87 Hi-Fi    ──> 87 L Direct (Mic 2 Apagado, Mono)
```

---

## 💡 9. Flujo de Trabajo Rápido en tu DAW

1. **Ajuste en Tiempo Real desde la Carátula:**
   * En la esquina superior derecha del frontal del amplificador tienes la **mini-perilla BLEND**.
   * Puedes ajustar la proporción de la mezcla de micrófonos en cualquier momento mientras reproduces la canción en tu DAW sin abrir la ventana flotante.
2. **Acceso a la Consola Completa:**
   * Haz clic sobre el botón **`CAB LAB`** o directamente sobre el nombre del micrófono en la pantalla superior para abrir la consola detallada, ajustar los faders individuales de ganancia (-24 dB a +6 dB) o alternar entre Mono y Stereo Spread.
3. **Compatibilidad Mono Garantizada:**
   * Gracias a la alineación a muestra cero ($t=0$), incluso si utilizas el modo Stereo Spread, cuando tu mezcla se reproduzca en un altavoz monofónico (como la radio de un coche o el altavoz de un teléfono móvil), la señal **no sufrirá cancelaciones de fase destructivas**, manteniendo todo el volumen y la pegada del amplificador.
