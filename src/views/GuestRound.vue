<template>
    <div class="GuestRound">
        <Clock :exerciseSeconds="exerciseSeconds"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Clock from '@/components/training/Clock.vue'

export default defineComponent({
    data() {
        return {
            exerciseSeconds: 30
        }
    },
    components:{
        Clock
    }
})
</script>