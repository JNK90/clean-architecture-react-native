import { Joke } from '../entities/joke';

export interface DataGateway {
    getCategories: () => Promise<string[]>;
    getJoke: (category?: string) => Promise<Joke>;
}

export const DataGatewayDummy: DataGateway = {
    getCategories: function (): Promise<string[]> {
        throw new Error('Function not implemented.');
    },
    getJoke: function (category?: string | undefined): Promise<Joke> {
        throw new Error('Function not implemented.');
    }
};