import type {Meta, } from '@storybook/react';


import {UncontrolledAccordion} from './UncontrolledAccordion.tsx';

const meta = {
    component: UncontrolledAccordion,
} satisfies Meta<typeof UncontrolledAccordion>;

export default meta;

export const UncontrolledAccordionDemo = () => <UncontrolledAccordion/>