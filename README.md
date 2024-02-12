# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




## Adding New Projects With Logos

The project will need a separate folder in the `assets` folder named suitably. In that folder, the svg files need to placed and another file called `logos.js` needs adding. this file needs to be exported and it should contain an array of objects. Each object represents an logo and will have the keys `altText` and `svg`. the `scg` key will hold the calue of the file path to the logos svg file.

When adding the new project, this file can then be imported and mapped through to display an array of the relevent logos.

Make sure to change all the `ref` values in the `projects` folder as well as the new folder for the actual project
