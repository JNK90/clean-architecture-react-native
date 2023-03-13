import { ReactElement, useState } from "react";
import { Button } from "react-native";
import { InputFormFieldComponent } from "./components/InputFormFieldComponent";
import { useValidation } from "./hooks/useValidation";
import { containsOnlyLetters, isEmail } from "./services/validation";

export interface NewsletterForm {
    firstName: string;
    lastName: string;
    email: string;
}

interface NewsletterProps {
    submitFn: (formData: NewsletterForm) => void;
}

export function NewsletterContainer({ submitFn }: NewsletterProps): ReactElement {
    const [formState, setFormState] = useState<NewsletterForm>({
        email: "",
        lastName: "",
        firstName: "",
    });

    const isFirstNameValid = useValidation(formState.firstName, [containsOnlyLetters]);
    const isLastNameValid = useValidation(formState.lastName, [containsOnlyLetters]);
    const isEmailValid = useValidation(formState.email, [isEmail]);

    function submitForm() {
        if (isFirstNameValid && isLastNameValid && isEmailValid) {
            submitFn(formState);
        }
    }

    return (
        <>
            <InputFormFieldComponent
                label="First Name"
                value={formState.firstName}
                onChange={(firstName: string) =>
                    setFormState({
                        ...formState,
                        firstName: firstName,
                    })
                }
                isValid={isFirstNameValid}></InputFormFieldComponent>
            <InputFormFieldComponent
                label="Last Name"
                value={formState.lastName}
                onChange={(lastName: string) =>
                    setFormState({
                        ...formState,
                        lastName: lastName,
                    })
                }
                isValid={isLastNameValid}></InputFormFieldComponent>
            <InputFormFieldComponent
                label="Email"
                value={formState.email}
                onChange={(email: string) =>
                    setFormState({
                        ...formState,
                        email: email,
                    })
                }
                isValid={isEmailValid}></InputFormFieldComponent>
            <Button onPress={submitForm} title={"Subscribe"} />
        </>
    );
}
