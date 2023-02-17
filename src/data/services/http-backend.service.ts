import axios from 'axios';
import { DataGateway } from '../../core/api/data-gateway.interface';
import { Joke } from '../../core/entities/joke';

const getCategories = async (): Promise<string[]> => {
    const res = await axios
        .get<string[]>('https://api.chucknorris.io/jokes/categories');
    return res.data;
};

const getJoke = (category?: string): Promise<Joke> => {
    return category ? getJokeFromCategory(category) : getRandomJoke();
};

const getRandomJoke = async (): Promise<Joke> => {
    const res = await axios
        .get<Joke>('https://api.chucknorris.io/jokes/random');
    return res.data;
};

const getJokeFromCategory = async (category: string): Promise<Joke> => {
    const res = await axios
        .get<Joke>('https://api.chucknorris.io/jokes/random', { params: { category } });
    return res.data;
};

export const HttpBackendService: DataGateway = {
    getCategories,
    getJoke
}; 