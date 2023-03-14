import { createContext, ReactElement, ReactNode } from "react";
import { DataGateway } from "./src/core/api/data-gateway.interface";
import FetchHttpBackendService from "./src/data/services/fetch-http-backend.service";

export const DataGatewayContext = createContext<DataGateway>({} as DataGateway);

const ContextConfig = ({ children }: { children: ReactNode }): ReactElement => {
    return (
        <DataGatewayContext.Provider value={FetchHttpBackendService} children={children}></DataGatewayContext.Provider>
    );
};

export default ContextConfig;
