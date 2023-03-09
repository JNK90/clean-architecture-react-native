import { ReactElement, useState } from "react";
import { Text, View } from "react-native";

type Route = "jokes" | "newsletter";

type RouteProps = {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

const Router = ({ children }: RouteProps): ReactElement => {
    const [activeRoute, setActiveRoute] = useState<Route>("jokes");
    const [subscribedUser, setSubscribedUser] = useState<string>("");

    function changeRoute(route: Route): void {
        setActiveRoute(route);
    }

    // function subscriptionSubmitted(data: NewsletterForm): void {
    //     setSubscribedUser(`${data.firstname} ${data.lastname}`);
    //     changeRoute("jokes");
    // }

    return (
        <>
            <View>
                <Text>Jokes</Text>
                <Text>Newsletter</Text>
            </View>
            {children}
        </>
    );
};

export default Router;
