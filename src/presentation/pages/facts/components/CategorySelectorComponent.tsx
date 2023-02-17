import { Picker } from "@react-native-picker/picker";
import { ReactElement, useState } from "react";
import { Button } from "react-native";

type CategorySelectorProps = {
    categories: string[];
    onCategorySelected: (category: string) => void;
};

const CategorySelectorComponent = ({ categories, onCategorySelected }: CategorySelectorProps): ReactElement => {
    const [selection, setSelection] = useState<string>("");

    const onSelectionChanged = (value: string, _: any): void => {
        setSelection(value);
    };

    return (
        <>
            <Picker selectedValue={selection} onValueChange={onSelectionChanged}>
                <Picker.Item label="" value="" />
                {categories.map((category) => (
                    <Picker.Item label={category} value={category} key={category} />
                ))}
            </Picker>
            <Button onPress={() => onCategorySelected(selection)} title="Get random fact!" />
        </>
    );
};

export default CategorySelectorComponent;
