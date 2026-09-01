<div class="prose-page">

<ArticleHeader icon="🎸" title="La nota que rompe el amplificador: el Mi grave al aire de una Stratocaster" subtitle="Por qué la cuerda más gruesa, al aire y con el micrófono del mango, suena rota en vez de saturada — y por qué el problema casi siempre se arregla con un destornillador." meta="Cuadernos de Estudio · Física del Instrumento | Main St Audio Labs" />

## 🔊 1. El síntoma que todos conocemos

Tenés el amplificador en el punto justo. Los acordes suenan gordos, las notas del medio del diapasón cantan, la púa responde. Y entonces tocás el **Mi grave al aire** con el micrófono del mango, y de golpe eso ya no es distorsión: es un ruido.

Pega duro, se empasta, se escucha *roto*. No saturado — roto. Y a los pocos segundos se pone a batir, como si la nota se peleara consigo misma.

No es tu amplificador y no es tu técnica. Es la peor combinación posible de cuatro cosas que pasan al mismo tiempo, y tres de ellas son física de la guitarra, no del ampli.

---

## 💪 2. Es la nota más violenta del instrumento

El Mi grave al aire tiene la cuerda **entera** vibrando: 648 mm en una escala Fender, sin ningún dedo que la acorte ni la amortigüe. Es la mayor longitud, la mayor masa y la mayor excursión de todo el instrumento.

Eso significa que su **transitorio de ataque es el más alto que tu amplificador va a ver**. Cualquier nota trasteada tiene un dedo apoyado que le roba energía; ésta no tiene nada. Y el previo, que estaba trabajando cómodo con el resto de las notas, se come de golpe un pico varios decibeles más grande.

Sumale que es la nota más grave: su fundamental de **82,4 Hz** entra a la etapa no lineal con una amplitud enorme. Guardá ese dato, porque en la sección 5 vuelve.

---

## 📐 3. La geometría: el armónico que el micrófono del mango no ve

Acá está la parte que casi nadie tiene presente.

Un micrófono de guitarra no escucha la cuerda entera: escucha **el punto exacto donde está parado**. Y en cada punto de la cuerda, cada armónico tiene una amplitud distinta. Donde un armónico tiene un nodo —un punto que no se mueve— el micrófono simplemente **no lo capta**.

En una Stratocaster, el micrófono del mango está a unos 163 mm del puente. Sobre una escala de 648 mm, eso es **exactamente un cuarto del largo de la cuerda**. Y a un cuarto del largo cae el nodo del cuarto armónico.

```text
   PUENTE                                                         CEJUELA
     │                                                               │
     │◄──── 1/4 del largo ────►│                                     │
     │                         │                                     │
     │      [ MICRO DEL MANGO ]│                                     │
     └─────────────────────────┴─────────────────────────────────────┘

   Cuánto capta el micrófono del mango de cada armónico
   del Mi grave al aire (82,4 Hz):

     armónico    frecuencia    cuánto lo capta
     ────────    ──────────    ─────────────────────────────
        1          82,4 Hz     ██████████████         0,71
        2         164,8 Hz     ████████████████████   1,00
        3         247,2 Hz     ██████████████         0,71
        4         329,6 Hz     ·············· NADA    0,00   ◄── silencio
        5         412,0 Hz     ██████████████         0,71
        6         494,5 Hz     ████████████████████   1,00
        7         576,9 Hz     ██████████████         0,71
        8         659,3 Hz     ·············· NADA    0,00   ◄── silencio
```

O sea que el micrófono del mango entrega un espectro **con agujeros**: fundamental fuerte, segundo enorme, tercero fuerte, **nada en 329,6 Hz**, quinto fuerte, sexto enorme, **nada en 659,3 Hz**.

Esa distribución rara no es un defecto de diseño —es lo que le da al micrófono del mango su carácter redondo y vocal, y es la razón por la que suena tan bien limpio— pero cuando entra a una etapa no lineal, se convierte en un problema.

---

## ⚡ 4. Y encima, la punta de la bobina simple

Una bobina simple de Stratocaster tiene alrededor de 2,3 henrios de inductancia. Con los 500 a 700 picofaradios de capacidad que aporta un cable de guitarra común, eso forma un circuito resonante que **levanta un pico alrededor de los 3 a 4 kHz**.

Ése es el brillo característico de la Strat, el que hace que corte en una mezcla. Pero también significa que el golpe de púa —que ya era el más grande del instrumento— llega al amplificador **con una punta afilada encima del cuerpo grave**.

Grave enorme y agudo puntiagudo, juntos, en el mismo instante.

---

## 🌀 5. Por qué suena "roto" y no "saturado"

Acá se juntan las tres cosas anteriores.

Un amplificador saturando no sólo recorta: **genera frecuencias nuevas**. Genera armónicos, que son múltiplos de lo que entra y suenan musicales, y genera **intermodulación**, que son las sumas y las restas entre todo lo que entra al mismo tiempo. La intermodulación no es musical: cae en frecuencias que no tienen relación armónica con la nota.

Y la cantidad de intermodulación depende de **cuánta señal grave de gran amplitud haya**. Un fundamental de 82,4 Hz enorme, modulando un espectro que tiene agujeros, contra un pico de agudos de 3,5 kHz, produce una nube de productos de suma y diferencia repartidos por toda la banda audible.

Eso es lo que tu oído lee como *roto*. No es más distorsión: es distorsión **inarmónica**. Es la diferencia entre un acorde saturado, que suena grande, y un acorde saturado en el que además hay un zumbido raro que no pertenece a ninguna nota.

---

## 🔩 6. El culpable más probable, y se arregla con un destornillador

Todo lo anterior es cierto, pero antes de tocar el amplificador probá lo más aburrido, porque es lo que resuelve el caso nueve de cada diez veces.

**Bajá el micrófono del mango. Sobre todo del lado de los bajos.**

Los micrófonos de una Stratocaster tienen imanes de alnico que van directo debajo de las cuerdas. Ese imán **tira** de la cuerda. En las cuerdas finas la fuerza es despreciable, pero el Mi grave es la que más masa ferromagnética tiene y la que más se mueve: ahí el tirón le pelea a la vibración.

El resultado tiene nombre propio: **wolf tone**. La nota se pone a batir, pierde sustain, la afinación se corre mientras suena, y el ataque se ensucia. Suena exactamente como si se rompiera — porque en cierto modo se rompe: la cuerda no está vibrando libre, está vibrando contra un imán.

Fender especifica más luz del lado grave justamente por esto. Como punto de partida, **pisando el último traste**, dejá alrededor de 3 mm entre la cuerda y el polo del lado grave, y unos 2 del lado agudo. Los valores exactos cambian según el modelo de micrófono, así que ajustá de oído: bajalo de a media vuelta de tornillo hasta que el batido se vaya.

Si al bajarlo el problema desaparece, era esto. Y no era ni tu ampli ni tu plugin.

---

## 🎛️ 7. Qué hacer, en orden

1. **Bajá el micrófono del mango**, lado grave primero. Es gratis y es la causa más frecuente.
2. **Bajá un cuarto de vuelta el volumen de la guitarra.** Las bobinas simples se limpian muchísimo con muy poco — bastante más que un humbucker, porque su impedancia interactúa distinto con la carga.
3. **Picá un poco más cerca del puente.** Cambiás el punto de excitación y con eso el reparto de energía entre armónicos: le das menos fundamental al amplificador.
4. **Cortá los medios-graves.** Alrededor de **240 Hz** es el lugar. Y no es casualidad: ese hueco es exactamente lo que usa el ecualizador gráfico del Mark I para que las notas graves no se conviertan en barro. La mitad de por qué existe el famoso *scoop en V* de Mesa es ésta.
5. **Recién ahí, bajá la ganancia.** Es lo último, no lo primero: si empezás por acá perdés el sonido que querías y no arreglaste la causa.

---

## 🎯 8. Y una reflexión sobre el modelado

Cuando estábamos calibrando **TattooYou**, este fenómeno apareció exactamente igual que en el amplificador real: canal Crunch, micrófono del mango, Mi al aire, y el mismo ruido áspero.

La tentación es tratarlo como un defecto y suavizarlo. Pero un modelado que suena lindo con absolutamente todo es un modelado que **promedió de más**. Los amplificadores de verdad tienen notas feas, tienen zonas donde se empastan y tienen combinaciones de guitarra y posición que no funcionan. Eso no es ruido en los datos: es el instrumento.

Un Mark I con una Strat en el micrófono del mango y la sexta al aire suena así. Si el modelo no lo reprodujera, estaría mintiendo.

---

## 🖐️ 9. El final feliz: Keith y las cinco cuerdas

Hay una nota al pie encantadora en todo esto.

Keith Richards, que grabó *Some Girls*, *Emotional Rescue* y *Tattoo You* justamente con estos amplificadores, terminó tocando en **afinación de Sol abierto con cinco cuerdas**: G–D–G–B–D. Le sacó la sexta a la guitarra. Literalmente la desmontó.

Su motivo declarado fue musical —en Sol abierto esa cuerda le quedaba redundante y le embarraba los acordes— y su resumen es mejor que cualquier explicación técnica: *"cinco cuerdas, tres notas, dos dedos y un imbécil"*.

Pero fijate lo que eso significa: **"Start Me Up" está grabada sin esa cuerda.** El riff más reconocible del disco *Tattoo You* no tiene la nota que acabamos de pasar nueve secciones explicando.

Puede que Keith haya llegado a la misma conclusión que vos, sólo que con un alicate y cuarenta años de anticipación.

---

👉 [**Cómo Keith Richards adoptó los amplificadores Mesa/Boogie (1978–1981) →**](/es/history-mesa-stones)

</div>
