import { ReactElement, useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { DataGatewayContext } from "../../../../ContextConfig";
import { Joke } from "../../../core/entities/joke";
import CategorySelectorComponent from "./components/CategorySelectorComponent";

const JokeContainer = (): ReactElement => {
    const dataGateway = useContext(DataGatewayContext);
    const [categories, setCategories] = useState<string[]>([]);
    const [joke, setJoke] = useState<Joke>();

    useEffect(() => {
        dataGateway.getCategories().then(setCategories);
    }, []);

    const onSelect = (category: string): void => {
        dataGateway.getJoke(category).then(setJoke);
    };

    return (
        <>
            <CategorySelectorComponent categories={categories} onCategorySelected={onSelect} />
            {joke && <View>{joke?.value}</View>}
        </>
    );
};

export default JokeContainer;
