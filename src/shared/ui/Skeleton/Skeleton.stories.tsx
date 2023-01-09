import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Normal = Template.bind({});
Normal.args = { height: '100%', width: 100 };

export const NormalDark = Template.bind({});
NormalDark.args = { height: '100%', width: 100 };
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Circle = Template.bind({});
Circle.args = { borderRadius: '50%', height: 100, width: 100 };

export const CircleDark = Template.bind({});
CircleDark.args = { borderRadius: '50%', height: 100, width: 100 };
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
