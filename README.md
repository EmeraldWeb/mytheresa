# Mytheresa

<h1>Test task: TMDB</h1>
<p>
3 categories of movies from TMDB are presented in the form of carousels
and you can click the movie poster to go to the movie details page,
each category has a unique theme presented on the movie page that belongs to that category
</p>

<h2>How to:</h2>

1. `git clone https://github.com/EmeraldWeb/mytheresa.git` - clone this repo
2. add `.env` file (which I sent to you separately) in the root directory of your local repo
3. `npm i --no-save` - install dependencies, you will need a <a href="https://nodejs.org/" target="_blank">Node.js</a> 
4. `npm run prod` - build bundle and serve webpackDevServer, which open a page `localhost:9000` in your default browser

<h3>Other commands you may find useful</h3>
(Full list in package.json "scripts")

* `npm run build` only production build
* `npm run lint` code linting
* `npm run test` code testing
* `npm run test:coverage` test coverage

<h3>Tech stack:</h3>

* `Webpack` for bundling
* `React` for building UI
* `React Router` for SPA navigation
* `Zustand` as lightweight store/state manager
* `SASS/SCSS` for styling
* `Jest & Enzyme` for testing
* `Eslint & Stylelint` for linting scripts and styles
* `Babel & PostCSS` for cross browser features

<h3>About tech stack</h3>

<h4>Testing with Jest-Enzyme:</h4>
<p>
    In this task Jest-Enzyme tech stack was implemented for testing, 
    because I know what in Mytheresa you're prefer Enzyme. <br>
    But in Enzyme there are still no support for React 18 (for this and other reasons I prefer <a href="https://testing-library.com/" target="_blank">Testing Library</a>). 
    Moreover, maintainer of an adapter for React 17, considers what 
    <a href="https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl" target="_blank">Enzyme is dead</a>. <br> 
    So I used unofficial adapter for it <a href="https://www.npmjs.com/package/@cfaester/enzyme-adapter-react-18" target="_blank">@cfaester/enzyme-adapter-react-18</a> 
</p>

<h4>Prop types and TypeScript</h4>
<p>
    There was a restriction "no usage of TypeScript",
    I believe that for type checking should be used proper instruments, 
    like TypeScript but Prop types are obsolete and almost useless, so there is no type checking. 
    (and frankly speaking I didn't have enough time to recall and implement them).
</p>

<h4>SSR</h4>
<p>
    There was a restriction "Do not use any boilerplate/starter kit",
    My SSR skills based on frameworks (Next.js and react-starter-kit by Kriasoft), 
    so without them I didn't find time to implement SSR (And I've got a cold T_T). 
</p>

<h4>Zustand</h4>
<p>
    Zustand is awesome. I recommend to replace Redux-RTK in your project (if you use them) with Zustand. 
</p>
