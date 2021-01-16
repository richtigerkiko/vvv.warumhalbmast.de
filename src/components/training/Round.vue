<template>
    <div class="GuestRound">
        <Clock :exercise="currentExercise" @countdownReady="changeExerciseClock" :key="currentExercise.id"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Clock from '@/components/training/Clock.vue'
import { trainingStore } from '@/store/trainingStore'
import { Exercise} from '@/data/interfaces/Training'

export default defineComponent({
    setup(){
        return {
            training: trainingStore.getState()
        }
    },
    data() {
        return {
            currentExercise: null as unknown
        }
    },
    methods: {
        changeExerciseClock(){
            this.currentExercise = this.training.exercises[0]
            return console.log('testfired')
        }
    },
    components:{
        Clock
    },
    created(){
        this.currentExercise = this.training.exercises[0]
    }
})
</script>