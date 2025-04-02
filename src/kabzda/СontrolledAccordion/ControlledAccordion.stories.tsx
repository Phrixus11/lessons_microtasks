import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {ControlledAccordion, ItemType} from './ControlledAccordion.tsx';
import {useState} from "react";

const meta = {
    component: ControlledAccordion,
} satisfies Meta<typeof ControlledAccordion>;

export default meta;

type Story = StoryObj<typeof meta>;

const setRatingHandler = action("setRating");
const onClickCallback = action("some item was clicked");

export const Default: Story = {
    args: {
        title: "Menu items",
        collapsed: true,
        items: [
            {title: 'Dimych', value: 1},
            {title: 'Yura', value: 2},
            {title: 'Vova', value: 3},
            {title: 'Ignta', value: 4},
        ],
        onChange: () => setRatingHandler(),
        onClick: ()=> action("some item was clicked")

    }
};

const items: ItemType[] = [
    {title: 'Dimych', value: 1},
    {title: 'Yura', value: 2},
    {title: 'Vova', value: 3},
    {title: 'Ignta', value: 4},
]
export const UsersUncollapsedMode = () => {
    const [collapsed, setCollapsed] = useState(true);
    return <ControlledAccordion items={items} title={"Menu"}
                                collapsed={collapsed}
                                onChange={() => setCollapsed(!collapsed)}
    onClick={onClickCallback}/>
}



