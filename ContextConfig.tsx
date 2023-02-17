import { createContext, ReactElement, ReactNode } from "react";
import { DataGateway, DataGatewayDummy } from "./src/core/api/data-gateway.interface";
import { HttpBackendService } from "./src/data/services/http-backend.service";

export const DataGatewayContext = createContext<DataGateway>(DataGatewayDummy);

const ContextConfig = ({ children }: { children: ReactNode }): ReactElement => {
    return <DataGatewayContext.Provider value={HttpBackendService} children={children}></DataGatewayContext.Provider>;
};

export default ContextConfig;
