<template>
  <div class="home">
    <div class="title">
      <h1>VVV</h1>
      <h2>.warumhalbmast.de</h2>
    </div>
    <div class="menu">
      <router-link to="/guestround"><div class="menuitem">
        Gastrunde
      </div></router-link>
      <div class="menuitem">
        Placeholder
      </div>
      <!-- <div class="menuitem">
        Placeholder
      </div>
      <div class="menuitem">
        placeholder
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Home extends Vue {}
</script>
