<script setup></script>

<template>
  <footer class="footer">
    <nav class="footer-navigation">
      <ul class="link-list">
        <li class="footer-link"><router-link to="">Il Gruppo</router-link></li>
        <li class="footer-link">
          <router-link to="">Note Legali</router-link>
        </li>
        <li class="footer-link"><router-link to="">Chi Siamo</router-link></li>
        <li class="footer-link">
          <router-link to="">Condizioni d'uso</router-link>
        </li>
        <li class="footer-link"><router-link to="">Privacy</router-link></li>
        <li class="footer-link"><router-link to="">Scrivici</router-link></li>
        <li class="footer-link"><router-link to="">Pubblicità</router-link></li>
      </ul>
      <p>© 1994-2022 Vita Società Editoriale S.p.A.</p>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 48px 40px;
  width: 100vw;

  .footer-navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;

    @media screen and (max-width: 700px) {
      flex-direction: column;
      align-items: start;
      gap: 24px;
    }
  }

  .link-list {
    display: flex;
    align-items: center;
    gap: 0 18px;
    flex-wrap: wrap;
    padding: 0;

    @media screen and (max-width: 700px) {
      flex-direction: column;
      align-items: start;

      .footer-link a {
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
}
</style>
