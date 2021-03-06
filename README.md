<a href="https://gitter.im/Reactlandia/Lobby" target="_blank">
  <img alt="Edit Redux-First Router Demo" src="http://cdn.reactlandia.com/chat-badge-reactlandia.png">
</a>

# Universal Demo React Router 4 Boilderplate

<p align="center">
  <img src="rr4-universal.gif" />
</p>

This is a demo of how to use the *Universal* family of packages with RR4:

- [react-universal-component](https://github.com/faceyspacey/react-universal-component) 
- [webpack-flush-chunks](https://github.com/faceyspacey/webpack-flush-chunks)
- [extract-css-chunks-webpack-plugin](https://github.com/faceyspacey/extract-css-chunks-webpack-plugin)
- [babel-plugin-universal-import](https://github.com/faceyspacey/babel-plugin-universal-import)
- [react-router v4](https://github.com/ReactTraining/react-router)  

Feel free to use it as a boilerpate.

## Installation

```
git clone https://github.com/ideafragments/universal-demo-react-router-4.git
cd universal-demo-react-router-4
yarn
yarn start
```


## Things To Do
- Open [localhost:3000](http://localhost:3000) in your browser
- Click "CHANGE PAGE" to cycle through dynamically imported pages
- refresh on any page
- and then view the source in the browser to see what chunks are being sent on each page
- **view the primary code in:** ***[src/components/App.js](./src/components/App.js)***
- open the Network tab to see when imports are fetched
- edit the components to see that HMR works--even for split chunks.
- edit and save the CSS files to confirm HMR works for CSS as well, thanks to [extract-css-chunks-webpack-plugin](https://github.com/faceyspacey/extract-css-chunks-webpack-plugin)

- examine the build folders to see exactly what chunks and files are built for you 



*Long live the dreams of Universal HMR* and ***Universal Code-Splitting!***


## Contributing
We use [commitizen](https://github.com/commitizen/cz-cli), so run `npm run cm` to make commits. A command-line form will appear, requiring you answer a few questions to automatically produce a nicely formatted commit. If you see anything wrong, feel free to make a PR.

## More from FaceySpacey in Reactlandia
- [redux-first-router](https://github.com/faceyspacey/redux-first-router). It's made to work perfectly with *Universal*. Together they comprise our *"frameworkless"* approach to what Next.js does.
- [React Universal Component 2.0 + babel-plugin-universal-import Launch Article](https://medium.com/faceyspacey/announcing-react-universal-component-2-0-babel-plugin-universal-import-5702d59ec1f4)
