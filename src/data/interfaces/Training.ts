import { v4 as uuid } from "@lukeed/uuid";
export interface Training {
    id: string;
    start?: Date;
    displayName: string;
    rounds: number;
    pauseDuration: string;
    totalDuration: string;
    exercises: Exercise[];
}

export interface Exercise{
    id: string;
    displayName: string;
    iconUrl?: string;
    exerciseDuration: string;
    state: ExerciseState;
}

export enum ExerciseState {
    NOTSTARTET,
    STARTED,
    PAUSED,
    ENDED
}

export class ExercisePause implements Exercise {
    id: string = uuid();
    displayName = 'Pause';
    iconUrl?: string | undefined = undefined;
    exerciseDuration: string;
    state: ExerciseState = ExerciseState.NOTSTARTET;

    constructor(durationString: string){
        this.exerciseDuration = durationString
    }
}
