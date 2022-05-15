import {Portal} from "./Portal";

export default {
    title: "StdInput",
    component: Portal
}

const Template = (args) => <Portal {...args} />;

export const Example = Template.bind( {} );
Example.args = {
    children: <p>Hello</p>
}