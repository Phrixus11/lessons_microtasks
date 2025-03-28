import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {Star} from './UncontrolledRating.tsx';

const meta = {
    component: Star,
} satisfies Meta<typeof Star>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        selected: true,
        setRating:  () =>{
            console.log('h')}
    }
};



const setRatingHandler = action("setRating");
export const StarDemo = () => {
    return <Star selected={false}
                 setRating={setRatingHandler}/>
};

