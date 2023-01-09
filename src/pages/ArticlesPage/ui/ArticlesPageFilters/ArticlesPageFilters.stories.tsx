import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {
  ArticleSortField,
  ArticleType,
  ArticleViewType,
} from '@/entities/Article';
import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
  title: 'pages/ArticlesPage/ArticlesPageFilters',
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => (
  <ArticlesPageFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    articlesPage: {
      search: '',
      sort: ArticleSortField.CREATED,
      order: 'asc',
      view: ArticleViewType.SMALL,
      type: ArticleType.ALL,
    },
  }),
];
