interface Training {
    id: string,
    start: Date,
    displayName: string,
    rounds: Round[]
}

interface Round {
    id: string,
    displayName: string
    pauseSeconds: number,
    totalTime: number
    exercises: Exercise[]
}

interface Exercise{
    id: string,
    displayName: string,
    iconUrl: string
}
