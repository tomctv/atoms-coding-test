<script setup>
import IconUser from "@/components/Icons/IconUser.vue";
</script>

<template>
  <nav class="utility-navigation" aria-label="Utility navigation">
    <ul class="nav-start">
      <li><router-link to="">Contribuisci</router-link></li>
      <li><router-link to="">Abbonati</router-link></li>
    </ul>
    <ul class="nav-end">
      <li>
        <router-link to="" class="accedi-button">
          <span>
            <IconUser class="icon" />
          </span>
          Accedi
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.utility-navigation {
  height: 48px;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 40px 16px 40px;
  border-bottom: 1px solid var(--color-black);

  .nav-start,
  .nav-end {
    display: flex;
    place-items: center;
    gap: 24px;
    padding: 0;
  }

  .nav-end {
    @media screen and (max-width: 480px) {
      display: none;
    }
  }

  .nav-start {
    @media screen and (max-width: 480px) {
      width: 100%;
      justify-content: space-between;
    }
  }

  .accedi-button {
    display: flex;
    place-items: center;
    gap: 8px;
    span .icon {
      width: 14px;
      height: 14px;
    }
  }
}
</style>
