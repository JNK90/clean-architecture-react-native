
import axios from 'axios';
import { DataGateway } from '../../core/api/data-gateway.interface';
import { Joke } from '../../core/entities/joke';


const BASE_URL = 'https://api.chucknorris.io/jokes/';

const getCategories = async (): Promise<string[]> => {
    const res = await axios
        .get<string[]>(BASE_URL + 'categories');
    return res.data;
};

const getJoke = (category?: string): Promise<Joke> => {
    return category ? getJokeFromCategory(category) : getRandomJoke();
};

const getRandomJoke = async (): Promise<Joke> => {
    const res = await axios
        .get<Joke>(BASE_URL + 'random');
    return res.data;
};

const getJokeFromCategory = async (category: string): Promise<Joke> => {
    const res = await axios
        .get<Joke>(BASE_URL + 'random', { params: { category } });
    return res.data;
};

const AxiosHttpBackendService: DataGateway = {
    getCategories,
    getJoke
};

export default AxiosHttpBackendService;