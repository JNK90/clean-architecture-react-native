import { DataGateway } from '../../core/api/data-gateway.interface';
import { Joke } from '../../core/entities/joke';

const getCategories = (): Promise<string[]> => {
    return Promise.resolve(['A', 'B', 'C']);
};

const getJoke = (category?: string): Promise<Joke> => {
    return Promise.resolve({
        categories: [category ?? 'A'],
        created_at: Date.now().toString(),
        icon_url: '',
        id: '1',
        updated_at: Date.now().toString(),
        url: '',
        value: 'This is a mock'
    });
};

const MockBackend: DataGateway = {
    getCategories: getCategories,
    getJoke: getJoke,
};

export default MockBackend;