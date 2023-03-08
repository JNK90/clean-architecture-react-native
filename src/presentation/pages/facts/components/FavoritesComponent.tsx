import { Button, FlatList } from "react-native";
import { Joke } from "../../../../core/entities/joke";
import FavoritesListItemComponent from "./FavoritesListItemComponent";

type FavoritesProps = {
    favorites: Joke[];
    onRemoveItem: (joke: Joke) => void;
};

const FavoritesComponent = ({ favorites, onRemoveItem }: FavoritesProps) => {
    return (
        <FlatList
            data={favorites}
            renderItem={(item) => (
                <FavoritesListItemComponent
                    categories={item.item.categories}
                    created_at={item.item.created_at}
                    joke={item.item.value}>
                    <Button title="-" onPress={() => onRemoveItem(item.item)} />
                </FavoritesListItemComponent>
            )}
        />
    );
};

export default FavoritesComponent;
