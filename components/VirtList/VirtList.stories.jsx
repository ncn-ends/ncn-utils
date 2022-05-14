import {VirtList} from "./VirtList";
import React, {useState} from "react";

export default {
    title: "VirtList",
    component: VirtList
}

const generateItems = numItems => Array.from({length: numItems}, _ => ({
    isActive: false,
    label: Math.random()
        .toString(36)
        .substr(2),
}));


const Template = ({height, width, itemCount}) => {
    const [items, setItems] = useState(generateItems(itemCount));

    const toggleItemActive = index => {
        setItems(prev => {
            const item = prev[index];
            const prevCopy = [...prev];
            prevCopy[index] = {
                ...item,
                isActive: !item.isActive,
            };
            return prevCopy;
        });
    }


    console.log("big daddy", items);

    return (
        <VirtList
            height={height}
            items={items}
            toggleItemActive={toggleItemActive}
            width={width}
        />
    );
};

export const Example = Template.bind({});
Example.args = {
    height: 150,
    width: 300,
    itemCount: 1000
}