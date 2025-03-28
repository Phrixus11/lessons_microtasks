import type {Meta, StoryObj} from '@storybook/react';
// import {action} from '@storybook/addon-actions';

import {ControlledRating} from './ControlledRating.tsx';

const meta = {
    // title: "ControlledRating",
    component: ControlledRating,
} satisfies Meta<typeof ControlledRating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        rating: 0,
    }
};



// const setRatingHandler = action("setRating");

export const ControlledRating0 = () => <ControlledRating rating={0} />
export const ControlledRating1 = () => <ControlledRating rating={1} />
export const ControlledRating2 = () => <ControlledRating rating={2} />
export const ControlledRating3 = () => <ControlledRating rating={3} />
export const ControlledRating4 = () => <ControlledRating rating={4} />
export const ControlledRating5 = () => <ControlledRating rating={5} />


