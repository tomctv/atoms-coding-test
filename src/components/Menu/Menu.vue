<script setup>
import MenuItemSmall from "./MenuItemSmall.vue";
import MenuItemLarge from "./MenuItemLarge.vue";
</script>

<template>
  <div class="menu">
    <ul class="menu-grid">
      <MenuItemLarge :to="''">
        <template #title>Articoli</template>
        <template #description>
          Trend, dati e novità del Terzo Settore.
        </template>
      </MenuItemLarge>

      <MenuItemLarge :to="''">
        <template #title>Storie</template>
        <template #description>
          Letture ed approfondimenti dei fenomeni complessi.
        </template>
      </MenuItemLarge>

      <MenuItemLarge :to="''">
        <template #title>Interviste</template>
        <template #description>
          Racconti reali di persone ed organizzazioni.
        </template>
      </MenuItemLarge>

      <MenuItemLarge :to="''">
        <template #title>Opinioni</template>
        <template #description>
          Riflessioni e confronti dei nostri opinionisti.
        </template>
      </MenuItemLarge>

      <MenuItemLarge :to="''">
        <template #title>Podcast</template>
        <template #description>
          Un luogo per dare voce ai protagonisti della sostenibilità.
        </template>
      </MenuItemLarge>

      <MenuItemLarge :to="''">
        <template #title>Bookazine</template>
        <template #description>
          Una rivista da leggere e un libro da conservare.
        </template>
      </MenuItemLarge>

      <MenuItemSmall :to="''">Chi siamo</MenuItemSmall>
      <MenuItemSmall :to="''">Comitato editoriale</MenuItemSmall>
      <MenuItemSmall :to="''">Servizi</MenuItemSmall>
      <MenuItemSmall :to="''">Agenda / Eventi</MenuItemSmall>
      <MenuItemSmall :to="''">Mappa dell'attivismo</MenuItemSmall>
      <MenuItemSmall :to="''">Inchieste di crowdfunding</MenuItemSmall>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  position: absolute;
  top: 96px;
  left: 0;
  right: 0;
  overflow-y: auto;

  @media screen and (max-width: 600px) {
    top: 52px;
  }
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 313px 313px 130px;
  gap: 1px;
  padding: 0;
  background: var(--color-black);
  border-bottom: 1px solid var(--color-black);

  @media screen and (max-width: 846px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
  }
}
</style>
