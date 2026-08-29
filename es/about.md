---
layout: doc
sidebar: false
aside: false
title: Acerca de - Main St Audio Labs
---

<script setup>
import { ref } from 'vue'
const btnText = ref('Copiar Correo')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = '¡Copiado!'
  setTimeout(function() { btnText.value = 'Copiar Correo' }, 2000)
}
</script>


<div class="prose-page">

# Acerca de Main St Audio Labs

Main St Audio Labs es un proyecto personal nacido en la intersección de la pasión por el rock 'n' roll vintage, el modelado analógico y la ingeniería de software.

---

## La Historia Detrás del Laboratorio

Main St Audio Labs fue fundado por **Emiliano Tegli**, desarrollador de audio independiente, guitarrista y entusiasta del tono, obsesionado con los sonidos de guitarra crudos, dinámicos y sensibles al tacto de finales de los años 60 y principios de los 70.

El nombre es un tributo directo a las legendarias sesiones en el sótano del *Exile on Main St.* de los Rolling Stones, una era en la que los discos eran grasientos, las válvulas se empujaban hasta su punto de fusión y los tonos de guitarra tenían una calidez orgánica y tridimensional que definió la música rock.

---

## ¿Por qué Main St Audio Labs?

Los plugins de audio modernos se han vuelto increíblemente potentes, pero a menudo se interponen en el camino de la creación musical. Los músicos y productores se ven frecuentemente obligados a navegar por parámetros infinitos, coordinar enrutamientos complejos, desplazarse por cientos de ajustes preestablecidos y lidiar con configuraciones infladas que agotan los recursos de la CPU.

Creemos en un enfoque diferente: **El Manifiesto de la Simplicidad.**

### 1. Calibrado a las Grabaciones Originales (Listo para Mezcla)
En lugar de darte emulaciones crudas y sin pulir y dejarte luchar con la post-ecualización, hacemos el trabajo pesado de antemano. Cada plugin está meticulosamente afinado y calibrado estudiando la guitarra exacta y las respuestas dinámicas que se escuchan en los álbumes de estudio clásicos y grabaciones en vivo, asegurando que encajen inmediatamente en tu mezcla.

### 2. CPU Ultra Baja y Máximo Rendimiento
Creemos que tu computadora debe enfocarse en tu música, no en ejecutar gráficos pesados o bucles DSP ineficientes. Todas nuestras herramientas están construidas utilizando motores de audio altamente optimizados y código DSP ligero que ofrecen un rendimiento máximo con un consumo de CPU extremadamente bajo, lo que te permite ejecutar múltiples instancias sin problemas.

---

## Nuestra Misión

Construir herramientas de audio virtuales boutique que suenen crudas, se sientan orgánicas y se aparten por completo del camino de tu inspiración.

Sin muros de registro, sin configuraciones infladas: solo conéctate, gira las perillas y toca.

---

## 🤝 Colaboradores y Amigos

Main St Audio Labs cuenta con el apoyo de músicos apasionados, amantes del tono y amigos que aportan su oído, comentarios y experiencia a nuestros proyectos:

* **Claudio Crespino** &mdash; Agradecimiento especial por su invaluable colaboración, pruebas y constante apoyo en el desarrollo y afinación de nuestras herramientas de audio.

<NewsletterSubscribe />

---

## Contacto y Comentarios

Siempre estamos escuchando. Si tienes alguna sugerencia, pistas de audio que quieras compartir, no dudes en copiar nuestro correo a continuación:

<div class="rock-copy-email-wrapper inline">
  <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
  <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
</div>

<p style="margin-top: 2rem; margin-bottom: 1rem;">Si deseas apoyar nuestra investigación independiente y ayudarnos a mantener nuestros plugins gratuitos, puedes apoyarnos con Tarjeta, PayPal o Criptomonedas:</p>

<div>
  <a href="/es/support" class="rock-btn rock-btn-primary" style="display: inline-block; text-align: center;">Apoya el Laboratorio (Ko-fi / Crypto) ☕</a>
</div>

</div>
