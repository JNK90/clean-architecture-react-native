import { DataGateway } from '../src/core/api/data-gateway.interface';
import FetchHttpBackendService from '../src/data/services/fetch-http-backend.service';

const useDataGateway = (): DataGateway => {
    return FetchHttpBackendService;
};

export default useDataGateway;