import type {Meta, StoryObj} from '@storybook/react';
// import {action} from '@storybook/addon-actions';

import {OnOff} from './OnOff.tsx';

const meta = {
    component: OnOff,
} satisfies Meta<typeof OnOff>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        defaultOn: true
    }
};


// const setRatingHandler = action("setRating");

export const OnMode = () => <OnOff defaultOn={true}/>
export const OffMode = () => <OnOff defaultOn={false}/>


