import { DataGatewayContext } from "ContextConfig";
import { ReactElement, useCallback, useContext, useEffect, useState } from "react";
import { Button, View } from "react-native";
import { Joke } from "src/core/entities/joke";
import CategorySelectorComponent from "./components/CategorySelectorComponent";
import FavoritesComponent from "./components/FavoritesComponent";
import JokeComponent from "./components/JokeComponent";

const JokeContainer = (): ReactElement => {
    const dataGateway = useContext(DataGatewayContext);
    const [categories, setCategories] = useState<string[]>([]);
    const [joke, setJoke] = useState<Joke>();
    const [favorites, setFavorites] = useState<Joke[]>([]);

    const onAdd = useCallback(() => onAddToFavorites(joke!), [joke]);

    useEffect(() => {
        dataGateway.getCategories().then(setCategories);
    }, []);

    const onSelect = (category: string): void => {
        dataGateway.getJoke(category).then(setJoke);
    };

    const onAddToFavorites = (joke: Joke): void => {
        setFavorites([...favorites, joke]);
    };

    const onRemoveFromFavorites = (joke: Joke): void => {
        const i = favorites.findIndex((e) => e.id === joke.id);
        favorites.splice(i, 1);
        setFavorites([...favorites]);
    };

    return (
        <>
            <CategorySelectorComponent categories={categories} onCategorySelected={onSelect} />
            {joke && (
                <>
                    <JokeComponent categories={joke.categories} createdAt={joke.created_at} value={joke.value} />
                    <Button title="+" onPress={onAdd} />
                </>
            )}
            {favorites.length > 0 && (
                <View>
                    <FavoritesComponent favorites={favorites} onRemoveItem={(item) => onRemoveFromFavorites(item)} />
                </View>
            )}
        </>
    );
};

export default JokeContainer;
