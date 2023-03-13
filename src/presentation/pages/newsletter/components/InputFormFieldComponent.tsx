import { ReactElement } from "react";
import { Text, TextInput, View } from "react-native";

interface InputFormFieldProps {
    label: string;
    value: string;
    isValid: boolean;
    onChange: (newValue: string) => void;
}

export function InputFormFieldComponent({ isValid, label, onChange, value }: InputFormFieldProps): ReactElement {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput value={value} onChangeText={(text: string) => onChange(text)} />
            {!isValid && <Text>Field is invalid</Text>}
        </View>
    );
}
