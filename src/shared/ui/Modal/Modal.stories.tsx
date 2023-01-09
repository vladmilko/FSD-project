import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Modal } from "./Modal";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos omnis " +
    "laborum at officiis repudiandae. Animi aperiam harum, illo rem " +
    "consectetur, vero molestiae perferendis iusto quo provident molestias " +
    "voluptatibus. Veritatis, aspernatur?",
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos omnis " +
    "laborum at officiis repudiandae. Animi aperiam harum, illo rem " +
    "consectetur, vero molestiae perferendis iusto quo provident molestias " +
    "voluptatibus. Veritatis, aspernatur?",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
