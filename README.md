# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

Packages Used

- react-helmet-async
  Including the Helmet package is still beneficial for managing the meta tags in your React application, even though React itself does not provide built-in SEO features. While search engines can crawl and index JavaScript-rendered content, having well-defined meta tags can improve how your website appears in search engine results.

The Helmet package, such as react-helmet-async, provides a convenient way to dynamically update the meta tags of your web page based on the current content. It allows you to set the title, description, and other meta tags that are important for SEO.

By using Helmet, you can ensure that the appropriate meta tags are included in the HTML response sent to search engines and social media platforms when your website is shared or indexed. This helps search engines understand the content of your website and display relevant information in search results, which can improve your SEO.

So, while React itself does not directly handle SEO, using Helmet or similar packages allows you to manage and optimize the meta tags for better SEO

- TailwindCSS
- TailwindCss Prettier
- formspree
- React Icons
- Embla Carousel
