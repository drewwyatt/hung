import { Letter } from './letter.model';
export interface Game {
    word: string;
    wordProvider: number;
    guesses: Letter[];
}