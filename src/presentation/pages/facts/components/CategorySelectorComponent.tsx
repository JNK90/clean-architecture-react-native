import { Picker } from "@react-native-picker/picker";
import { ReactElement, useCallback, useState } from "react";
import { Button } from "react-native";

type CategorySelectorProps = {
    categories: string[];
    onCategorySelected: (category: string) => void;
};

const CategorySelectorComponent = ({ categories, onCategorySelected }: CategorySelectorProps): ReactElement => {
    const [selection, setSelection] = useState<string>("");
    const onSelection = useCallback(() => onCategorySelected(selection), [onCategorySelected]);

    const onSelectionChanged = (value: string, _: any): void => {
        setSelection(value);
    };

    return (
        <>
            <Picker selectedValue={selection} onValueChange={onSelectionChanged}>
                {categories.map((category) => (
                    <Picker.Item label={category} value={category} key={category} />
                ))}
                <Picker.Item label="all" value="" />
            </Picker>
            <Button onPress={onSelection} title="Get random fact!" />
        </>
    );
};

export default CategorySelectorComponent;
