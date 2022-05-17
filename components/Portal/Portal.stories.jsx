import {Portal} from "./Portal";

export default {
    title: "Portal",
    component: Portal
}

const Template = (args) => <Portal {...args} />;

export const Example = Template.bind( {} );
Example.args = {
    children: <p>Hello</p>
}