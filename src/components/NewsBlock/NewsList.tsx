interface newsProps {
    icon: string;
    text: string;
    url?: string;
}

export const NewsList: newsProps[] = [
    {
        icon: '📰',
        text: 'Новости React 18 вышли!',
        url: 'https://reactjs.org/blog/2022/03/29/react-v18.html',
    },
    {
        icon: '⚡',
        text: 'Новая версия TypeScript 4.5 доступна!',
        url: 'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html',
    },
    {
        icon: '🌐',
        text: 'Вышел новый стандарт ECMAScript 2022!',
        url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/',
    },
    {
        icon: '💻',
        text: 'Node.js 18 теперь LTS!',
        url: 'https://nodejs.org/en/blog/release/v18.0.0/',
    },
    {
        icon: '📱',
        text: 'React Native 0.66 вышел!',
        url: 'https://reactnative.dev/blog/2021/09/22/version-066',
    },
    {
        icon: '📦',
        text: 'NPM 8 теперь доступен!',
        url: 'https://github.blog/2021-10-12-npm-8-is-now-generally-available/',
    },
    {
        icon: '🛠️',
        text: 'Webpack 5 теперь поддерживает Module Federation!',
        url: 'https://webpack.js.org/concepts/module-federation/',
    },
    {
        icon: '🎨',
        text: 'CSS Grid теперь поддерживается во всех современных браузерах!',
        url: 'https://caniuse.com/css-grid',
    },
    {
        icon: '🔧',
        text: 'ESLint 8 теперь доступен!',
        url: 'https://eslint.org/blog/2021/10/12/eslint-v8.0.0-released/',
    },
    {
        icon: '🧪',
        text: 'Jest 28 теперь доступен!',
        url: 'https://jestjs.io/blog/2021/10/12/jest-28',
    }
];