import { Text } from "react-native";

type JokeProps = {
    categories: string[];
    createdAt: string;
    value: string;
};

const JokeComponent = ({ categories, createdAt, value }: JokeProps) => {
    return (
        <>
            <Text>
                Categories:
                {categories.map((c) => ` ${c}`)}
            </Text>
            <Text>Created at: {createdAt}</Text>
            <Text>Value: {value}</Text>
        </>
    );
};

export default JokeComponent;
