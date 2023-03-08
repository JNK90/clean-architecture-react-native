import { DataGateway } from '../../core/api/data-gateway.interface';
import { Joke } from '../../core/entities/joke';


const BASE_URL = 'https://api.chucknorris.io/jokes/';

const getCategories = (): Promise<string[]> => {
    return fetch(BASE_URL + 'categories', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(res => res.data)
        .catch(console.error);
};

const getJoke = (category?: string): Promise<Joke> => {
    return category ? getRandomJokeFromCategory(category) : getRandomJoke();
};

const getRandomJoke = (): Promise<Joke> => {
    return fetch(BASE_URL + 'random', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(res => res.data)
        .catch(console.error);
};

const getRandomJokeFromCategory = (category: string): Promise<Joke> => {
    return fetch(BASE_URL + `random?category=${category}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(res => res.data)
        .catch(console.error);
};

const FetchHttpBackendService: DataGateway = {
    getCategories: getCategories,
    getJoke: getJoke,
};

export default FetchHttpBackendService;