<script setup>
import { ref } from 'vue'
const btnText = ref('Copy Email')
function copyEmail() {
  navigator.clipboard.writeText('mainstaudiolabs@gmail.com')
  btnText.value = 'Copied!'
  setTimeout(function() { btnText.value = 'Copy Email' }, 2000)
}
</script>

# The '78–'81 Story: How the Stones Met Mesa/Boogie

**Historical Archive & Sound Notes · Main St Audio Labs**

---

### 🚧 Article Under Construction

We are currently compiling archival studio photos, session log notes from *Pathé Marconi Studios* (Paris), *Compass Point* (Nassau), and *Atlantic Studios* (NYC), along with technical interviews detailing how Keith Richards and Ronnie Wood acquired their customized 100W Mesa/Boogie tube heads and Electro-Voice EVM-12L cabinets between 1978 and 1981.

*Full in-depth story coming soon.*

---

<div style="text-align: center; margin: 2rem 0;">
  <a href="/tattoo-you" class="rock-btn rock-btn-primary" style="display: inline-block; padding: 0.6rem 1.5rem;">← Back to Tattoo You Manual</a>
</div>

<div class="rock-card-contact">
  <div class="rock-card-contact-title">Have Archive Photos or Session Stories?</div>
  <p class="rock-card-contact-desc">If you have archival info or stories regarding the Stones' late '70s and early '80s studio rigs, we'd love to hear from you:</p>
  <div class="rock-copy-email-wrapper">
    <span class="rock-email-text">mainstaudiolabs@gmail.com</span>
    <button class="rock-copy-btn" @click="copyEmail">{{ btnText }}</button>
  </div>
</div>