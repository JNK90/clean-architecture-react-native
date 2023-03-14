import { Joke } from '../entities/joke';

export interface DataGateway {
    getCategories: () => Promise<string[]>;
    getJoke: (category?: string) => Promise<Joke>;
}