<template>
    <div class="GuestRound">
        <Clock :exercise="currentExercise" @countdownReady="changeExerciseClock" :key="currentExercise.id"/>
        <h3>{{ currentExercise.displayName }}</h3>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Clock from '@/components/training/Clock.vue'
import { trainingStore } from '@/store/trainingStore'
import { Exercise, ExercisePause} from '@/data/interfaces/Training'

export default defineComponent({
    setup(){
        return {
            training: trainingStore.getState()
        }
    },
    data() {
        return {
            currentExercise: {} as Exercise,
            isPause: true,
            currentExerciseIndex: 0
        }
    },
    methods: {
        changeExerciseClock(){
            if(this.isPause){
                this.isPause = false
                this.currentExercise = new ExercisePause(this.training.pauseDuration)
            }
            else{
                if(this.currentExerciseIndex < this.training.exercises.length){
                    this.isPause = true
                    this.currentExercise = this.training.exercises[this.currentExerciseIndex]
                    this.currentExerciseIndex++ 
                }
            }
        }
    },
    components:{
        Clock
    },
    created(){
        this.changeExerciseClock()
    }
})
</script>