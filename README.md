# Mytheresa

Test task

- `npm i --no-save` - install dependencies
- `npm run build` - production build
- `npm run lint` - code linting
- `npm run lint:fix` - auto fix-up
- `npm run test` - code testing
- `npm run test:coverage` - test coverage

<h3>About testing with Jest-Enzyme:</h3>
<p>
    In this task Jest-Enzyme tech stack was implemented for testing, 
    because I know what in Mytheresa you're prefer Enzyme. <br>
    But in Enzyme there are still no support for React 18 (for this and other reasons I prefer Testing Library). 
    Moreover, maintainer of an adapter for React 17, considers what 
    <a href="https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl" target="_blank">Enzyme is dead</a>. <br> 
    So I used unofficial adapter for it <a href="https://www.npmjs.com/package/@cfaester/enzyme-adapter-react-18" target="_blank">@cfaester/enzyme-adapter-react-18</a> 
</p>
