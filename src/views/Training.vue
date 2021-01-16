<template>
  <div id="Training">
    <div class="title small">
      vvv
    </div>
    <div class="title page">
      Training
    </div>

    <form action="" id="trainingForm">
        <div class="baseSettings">
            <div class="trainingtitleinput">
                <label for="titleInput">Titel:</label>
                <input type="text" id="titleInput" v-model="title">
            </div>
            <div class="roundsandpause">
                <div class="pauseinput">
                    <label for="pauseinput">Pause:</label>
                    <input type="time" id="pauseinput" v-model="pauseTime">
                </div>
                <div class="roundinput">
                    <label for="roundinput">Runden:</label>
                    <input type="number" min="1" max="12" id="roundinput" v-model="rounds">
                </div>
            </div>
        </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data (){
        return {
            title: "",
            pauseTime: "00:30",
            rounds: 3
        }
    }
})
</script>