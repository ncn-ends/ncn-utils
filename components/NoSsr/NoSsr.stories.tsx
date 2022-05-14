import React from "react";
import { NoSsr } from "./NoSsr";

export default {
    title: "NoSsr",
    component: NoSsr
}

const SomeComponent = () => <p>Hello</p>

const Template = ( args ) => <NoSsr { ...args }>
    <SomeComponent />
</NoSsr>

export const Example = Template.bind( {} );