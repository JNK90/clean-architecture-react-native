import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ContextConfig from "./ContextConfig";
import JokeContainer from "./src/presentation/pages/facts/JokeContainer";
import { NewsletterContainer, NewsletterForm } from "./src/presentation/pages/newsletter/NewsletterContainer";

type Route = "jokes" | "newsletter";

export default function App() {
    const [activeRoute, setActiveRoute] = useState<Route>("jokes");
    const [subscribedUser, setSubscribedUser] = useState<string>("");

    function changeRoute(route: Route): void {
        setActiveRoute(route);
    }

    function subscriptionSubmitted(data: NewsletterForm): void {
        setSubscribedUser(`${data.firstName} ${data.lastName}`);
        changeRoute("jokes");
    }

    return (
        <ContextConfig>
            <View>
                <Text onPress={() => changeRoute("jokes")}>Jokes</Text>
                <Text onPress={() => changeRoute("newsletter")}>Newsletter</Text>
            </View>
            <View style={styles.container}>
                <StatusBar style="auto" />
                {activeRoute === "jokes" && <JokeContainer />}
                {activeRoute === "newsletter" && <NewsletterContainer submitFn={subscriptionSubmitted} />}
            </View>
            {!!subscribedUser && (
                <View>
                    <Text>{subscribedUser}</Text>
                </View>
            )}
        </ContextConfig>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
