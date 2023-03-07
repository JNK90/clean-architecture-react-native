import { test } from "@jest/globals";
import { render } from "@testing-library/react-native";
import * as React from "react";
import App from "./App";

test("renders correctly", () => {
    render(<App />);
});
