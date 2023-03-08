import { Text } from "react-native";

type FavoritesListItemProps = {
    categories: string[];
    created_at: string;
    joke: string;
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};

const FavoritesListItemComponent = ({ categories, created_at, joke, children }: FavoritesListItemProps) => {
    return (
        <>
            <Text>{categories.map((c) => ` ${c}`)}</Text>
            <Text>{created_at}</Text>
            <Text>{joke}</Text>
            {children}
        </>
    );
};

export default FavoritesListItemComponent;
