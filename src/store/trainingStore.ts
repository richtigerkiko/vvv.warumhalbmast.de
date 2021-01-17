import { Exercise, ExerciseState, Training } from "@/data/interfaces/Training";
import {Store} from "./main";
import { v4 as uuid } from "@lukeed/uuid";

class TrainingStore extends Store<Training> {
    protected data(): Training {
        return {
            
                id: uuid(),
                displayName: "",
                rounds: 3,
                pauseDuration: "00:00:2",
                totalDuration: "00:00:00",
                exercises: new Array<Exercise>({
                    id: uuid(),
                    displayName: "laufen",
                    exerciseDuration: "00:00:10",
                    state: ExerciseState.NOTSTARTET
                } as Exercise,
                {
                    id: uuid(),
                    displayName: "raufen",
                    exerciseDuration: "00:00:08",
                    state: ExerciseState.NOTSTARTET
                } as Exercise)
        };
    }
    // incrementCount() {
    //     this.state.count++;
    // }
}

export const trainingStore = new TrainingStore("TRAINING_STORE");
