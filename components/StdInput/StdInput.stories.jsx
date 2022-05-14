import {StdInput} from "./StdInput";

export default {
    title: "StdInput",
    component: StdInput
}

const Template = (args) => <StdInput {...args} />;

export const FirstStory = {
    args: {
        id: "something",
        label: "First Name"
    }
}