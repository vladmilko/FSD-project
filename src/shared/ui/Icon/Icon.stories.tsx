import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Icon } from './Icon';

export default {
  title: 'shared/Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (props) => <Icon {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  Svg: EyeIcon,
};

export const Dark = Template.bind({});
Dark.args = {
  Svg: EyeIcon,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
