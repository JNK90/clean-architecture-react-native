import { createContext, ReactElement, ReactNode } from "react";
import { DataGateway } from "./src/core/api/data-gateway.interface";
import AxiosHttpBackendService from "./src/data/services/axios-http-backend.service";

export const DataGatewayContext = createContext<DataGateway>({} as DataGateway);

const ContextConfig = ({ children }: { children: ReactNode }): ReactElement => {
    return (
        <DataGatewayContext.Provider value={AxiosHttpBackendService} children={children}></DataGatewayContext.Provider>
    );
};

export default ContextConfig;
