<template>
  <div class="rock-newsletter-card">
    <div class="rock-newsletter-inner">
      <div v-if="!submitted">
        <div class="rock-newsletter-badge">NEWSLETTER</div>
        <h3 class="rock-newsletter-title">{{ t.title }}</h3>
        <p class="rock-newsletter-subtitle">{{ t.subtitle }}</p>

        <!-- Hidden iframe for seamless background submission without page reload -->
        <iframe name="brevo_sink" id="brevo_sink" style="display: none;"></iframe>

        <form
          action="https://94e29f5d.sibforms.com/v2/serve/MUIFAJXXITlgS9kGo1eHE9Y72VI8JaxlJfCtFfsJjKE0aL2O4f3GLir7bKLxoB8QKW_gsy3NcKg2ogOPN7BvVJ60PotGBEVS-b0g5C5wMOwcAPsFvAnAhlrWW2LB3w-C4RxDyH8xDm7v2gEnQ3uvKq-nzFVNJJ42QslJ66e91sUz6DBphq1clQaEGserBzBTOeZ8gsjvSfBkL7NM_Q=="
          method="POST"
          target="brevo_sink"
          class="rock-newsletter-form"
          @submit="handleSubmit"
        >
          <!-- Antispam honeypot field -->
          <input
            type="text"
            name="email_address_check"
            value=""
            style="display:none !important;"
            tabindex="-1"
            autocomplete="off"
          />
          <input type="hidden" name="locale" :value="currentLocale" />

          <div class="rock-newsletter-input-group">
            <input
              type="email"
              name="EMAIL"
              v-model="email"
              required
              :placeholder="t.placeholder"
              class="rock-newsletter-input"
              aria-label="Email address"
            />
            <button
              type="submit"
              class="rock-btn rock-btn-primary rock-newsletter-btn"
              :disabled="loading"
            >
              {{ loading ? t.buttonLoading : t.button }}
            </button>
          </div>
        </form>

        <p class="rock-newsletter-privacy">
          {{ t.privacy }}
        </p>
      </div>

      <div v-else class="rock-newsletter-success">
        <div class="rock-newsletter-success-icon">📻</div>
        <h3 class="rock-newsletter-success-title">{{ t.successTitle }}</h3>
        <p class="rock-newsletter-success-text">{{ t.successText }}</p>
        <button class="rock-newsletter-reset-btn" @click="resetForm">
          {{ currentLocale === 'es' ? '← Suscribir otro correo' : currentLocale === 'ja' ? '← 別のメールアドレスを登録' : '← Subscribe another email' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()

const email = ref('')
const submitted = ref(false)
const loading = ref(false)

const translations = {
  en: {
    title: "Stay in the Lab's Loop",
    subtitle: "Get notified about new tube amp emulations, analog pedals, and free plugin updates.",
    placeholder: "your.email@example.com",
    button: "Subscribe ➔",
    buttonLoading: "Subscribing...",
    privacy: "🔒 No spam. Only major releases, audio tests, and updates. Unsubscribe anytime.",
    successTitle: "You're on the list!",
    successText: "Thank you for subscribing to Main St Audio Labs. You'll be the first to know about new gear.",
  },
  es: {
    title: "¡Recibe Novedades del Lab!",
    subtitle: "Entérate antes que nadie de nuevos amplificadores valvulares, pedales analógicos y actualizaciones.",
    placeholder: "tu.correo@ejemplo.com",
    button: "¡Suscribirme! ➔",
    buttonLoading: "Suscribiendo...",
    privacy: "🔒 Cero spam. Solo lanzamientos oficiales, pruebas de audio y actualizaciones. Desuscribite cuando quieras.",
    successTitle: "¡Ya estás en la lista!",
    successText: "Gracias por sumarte a Main St Audio Labs. Serás el primero en enterarte de nuevos lanzamientos.",
  },
  ja: {
    title: "最新情報・アップデートをお届け",
    subtitle: "新しいチューブアンプシミュレーター、アナログエフェクト、無料アップデートの最新情報をいち早くお届けします。",
    placeholder: "your.email@example.com",
    button: "登録する ➔",
    buttonLoading: "登録中...",
    privacy: "🔒 スパムはありません。主要リリース、音源テスト、アップデートのみ配信します。いつでも解除可能。",
    successTitle: "登録が完了しました！",
    successText: "Main St Audio Labs のニュースレターにご登録いただきありがとうございます。最新情報をお楽しみに！",
  }
}

const currentLocale = computed(() => {
  const currentLang = (lang.value || '').toLowerCase()
  if (currentLang.startsWith('es')) return 'es'
  if (currentLang.startsWith('ja')) return 'ja'
  return 'en'
})

const t = computed(() => {
  return translations[currentLocale.value] || translations.en
})

function handleSubmit() {
  if (!email.value || !email.value.includes('@')) return
  loading.value = true
  
  setTimeout(() => {
    loading.value = false
    submitted.value = true
  }, 600)
}

function resetForm() {
  email.value = ''
  submitted.value = false
}
</script>

<style scoped>
.rock-newsletter-card {
  background-color: var(--vp-c-bg-soft);
  border: 3px solid var(--vp-c-text-1);
  box-shadow: 5px 5px 0px var(--vp-c-text-1);
  padding: 1.75rem 1.5rem;
  margin: 2.25rem auto 1.5rem auto;
  max-width: 960px;
  position: relative;
  text-align: center;
}

.dark .rock-newsletter-card {
  border-color: var(--vp-c-border);
  box-shadow: 6px 6px 0px var(--vp-c-border);
}

.rock-newsletter-badge {
  display: inline-block;
  background-color: var(--rock-red);
  color: #ffffff;
  font-family: 'Special Elite', monospace;
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  padding: 0.2rem 0.75rem;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.rock-newsletter-title {
  font-family: 'Special Elite', Georgia, serif !important;
  font-size: 1.65rem !important;
  color: var(--vp-c-text-1) !important;
  margin: 0 0 0.4rem 0 !important;
  line-height: 1.2 !important;
  border: none !important;
}

.rock-newsletter-subtitle {
  font-family: 'Courier Prime', monospace;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  max-width: 680px;
  margin: 0 auto 1.25rem auto;
  line-height: 1.4;
}

.rock-newsletter-form {
  max-width: 580px;
  margin: 0 auto;
}

.rock-newsletter-input-group {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: stretch;
  justify-content: center;
}

@media (max-width: 640px) {
  .rock-newsletter-input-group {
    flex-direction: column;
  }
}

.rock-newsletter-input {
  flex: 1;
  background-color: #1a1a1a;
  color: #ecc04a !important;
  border: 2px solid var(--vp-c-text-1);
  font-family: 'Courier Prime', monospace;
  font-size: 1rem;
  padding: 0.6rem 1rem;
  border-radius: 3px;
  outline: none;
  min-width: 240px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.dark .rock-newsletter-input {
  border-color: var(--vp-c-border);
  background-color: #121212;
}

.rock-newsletter-input:focus {
  border-color: var(--rock-red) !important;
  box-shadow: 0 0 0 2px rgba(224, 26, 34, 0.35);
}

.rock-newsletter-input::placeholder {
  color: #998855;
  opacity: 0.8;
}

.rock-newsletter-btn {
  padding: 0.6rem 1.4rem !important;
  font-size: 0.95rem !important;
  white-space: nowrap;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.rock-newsletter-privacy {
  font-family: 'Courier Prime', monospace;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-top: 0.85rem;
  margin-bottom: 0;
  line-height: 1.3;
}

/* Success State */
.rock-newsletter-success {
  padding: 1rem 0;
}

.rock-newsletter-success-icon {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.rock-newsletter-success-title {
  font-family: 'Special Elite', Georgia, serif !important;
  font-size: 1.6rem !important;
  color: var(--vp-c-brand-1) !important;
  margin: 0 0 0.5rem 0 !important;
  border: none !important;
}

.rock-newsletter-success-text {
  font-family: 'Courier Prime', monospace;
  font-size: 1rem;
  color: var(--vp-c-text-1);
  max-width: 600px;
  margin: 0 auto 1.25rem auto;
}

.rock-newsletter-reset-btn {
  background: none;
  border: none;
  color: var(--vp-c-text-2);
  font-family: 'Courier Prime', monospace;
  font-size: 0.85rem;
  text-decoration: underline;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
}

.rock-newsletter-reset-btn:hover {
  color: var(--vp-c-brand-1);
}
</style>
