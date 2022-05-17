import {FluidIncrementingNumber} from "./FluidIncrementingNumber";

export default {
    title: "FluidIncrementingNumber",
    component: FluidIncrementingNumber
}

const Template = (args) => <FluidIncrementingNumber {...args} />;

export const FirstStory = {
    args: {
        number: 102
    }
}