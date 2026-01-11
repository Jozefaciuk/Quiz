type Questions = {
    number: number;
    type: "many";
    description: string;
    answers: Array<{
        content: string;
        isCorrect: boolean;
    }>;
}[];

