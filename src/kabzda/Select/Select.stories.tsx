import type {Meta} from '@storybook/react';
// import {action} from '@storybook/addon-actions';
import {Select} from './Select.tsx';
import {useState} from "react";


const meta = {
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;

// type Story = StoryObj<typeof meta>;

// const setRatingHandler = action("setRating");
// const onClickCallback = action("some item was clicked");

// export const Default: Story = {
//     args: {
//
//     }
// };

export const CustomSelect = () => {
    const items = [
        {title: 'Dimych', value: 1},
        {title: 'Yura', value: 2},
        {title: 'Vova', value: 3},
        {title: 'Ignat', value: 4},
    ]

    const [value, setValue] = useState<number>(0);
    const onChange = (value: number) => {
        setValue(value);
    }

    // let selectValue: string = '';
    // if (value === 0) selectValue = 'choose';
    // if (value === 1) selectValue = 'Dimych';
    // if (value === 2) selectValue = 'Yura';
    // if (value === 3) selectValue = 'Vova';
    // if (value === 4) selectValue = 'Ignat';
    return <Select value={value}
                   onChange={onChange}
                   items={items}/>
}