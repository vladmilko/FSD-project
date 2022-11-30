import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageWrapper } from './PageWrapper';

export default {
  title: 'shared/PageWrapper',
  component: PageWrapper,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageWrapper>;

const Template: ComponentStory<typeof PageWrapper> = (args) => (
  <PageWrapper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
