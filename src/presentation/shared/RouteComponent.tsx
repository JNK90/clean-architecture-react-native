import { ReactElement } from "react";
import { View } from "react-native";

type RouteProps = {
    name: string;
    onClick: (route: unknown) => void;
};

const RouteComponent = ({ name, onClick }: RouteProps): ReactElement => {
    return <View onTouchEnd={onClick}>{name}</View>;
};

export default RouteComponent;
