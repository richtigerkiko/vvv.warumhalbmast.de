<template>
  <div id="Training">
    <div class="title small">
      vvv <br> training
    </div>
    <div class="title page">
      {{ routename }}
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    computed: {
        routename (): string {
            return this.$route.name as string
        }
    }
})
</script>