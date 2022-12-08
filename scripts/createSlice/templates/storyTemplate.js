module.exports = (layer, componentName) => `import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ${componentName} } from './${componentName}';

export default {
  title: 'entities/TestEntities',
  component: TestEntities,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TestEntities>;

const Template: ComponentStory<typeof TestEntities> = (args) => (
  <TestEntities {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};`;
