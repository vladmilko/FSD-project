import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import Img from '@/shared/assets/tests/storybook.jpg';
import {
  Article,
  ArticleSortField,
  ArticleType,
  ArticleViewType,
} from '@/entities/Article';
import ArticlesPage from './ArticlesPage';

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (props) => (
  <ArticlesPage {...props} />
);

const article = {
  id: '1',
  title: 'Javascript news asfasjf asfjkask f',
  subtitle: 'Что нового в JS за 2022 год?',
  img: Img,
  views: 1022,
  createdAt: '26.02.2022',
  user: {
    id: '1',
    username: 'admin',
    avatar: Img,
  },
  type: ['IT', 'SCIENCE', 'POLITICS', 'ECONOMICS'],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
  ],
} as Article;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    articlesPage: {
      _inited: false,
      isLoading: false,
      error: false,
      ids: ['1', '2', '3'],
      entities: {
        1: article,
        2: { ...article, id: '2' },
        3: { ...article, id: '3' },
      },
      view: ArticleViewType.SMALL,
      page: 1,
      hasMore: true,
      limit: 3,
      sort: ArticleSortField.CREATED,
      search: '',
      order: 'asc',
      type: ArticleType.ALL,
    },
  }),
];

Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_expand=user&_limit=3&_page=2&_sort=createdAt&_order=asc&q=`,
      method: 'GET',
      status: 200,
      response: [
        { ...article, id: '1' },
        { ...article, id: '2' },
        { ...article, id: '3' },
      ],
    },
    {
      url: `${__API__}/articles?_expand=user&_limit=3&_page=2&_sort=createdAt&_order=asc&q&type=IT `,
      method: 'GET',
      status: 200,
      response: [
        { ...article, id: '1' },
        { ...article, id: '2' },
        { ...article, id: '3' },
      ],
    },
  ],
};
