<template>
    <div class="GuestRound" style="width:100%; margin-top:50px;">
        <Clock :exerciseSeconds="60"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Clock from '@/components/training/Clock.vue'

export default defineComponent({
    components:{
        Clock
    }
})
</script>