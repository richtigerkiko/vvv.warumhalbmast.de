import { Duration } from "date-fns"

export interface Training {
    id: string;
    start?: Date;
    displayName: string;
    rounds: number;
    pauseDuration: Duration | string;
    totalDuration: Duration | string;
    exercises: Exercise[];
}

export interface Exercise{
    id: string;
    displayName: string;
    iconUrl?: string;
    exerciseDuration: Duration | string;
    state: ExerciseState;
}

export enum ExerciseState {
    NOTSTARTET,
    STARTED,
    PAUSED,
    ENDED
}
