import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from "react-native";
import ContextConfig from "./ContextConfig";
import Router from "./Router";
import JokeContainer from "./src/presentation/pages/facts/JokeContainer";

export default function App() {
    return (
        <ContextConfig>
            <Router>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    <JokeContainer />
                </View>
            </Router>
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
