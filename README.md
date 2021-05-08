# SPREADSHEET BY MONKEY-APPROVED

## Build history

### The core app

This app was build using create-react-app with typescript.

```
npx create-react-app spreadsheet --template typescript
cd spreadsheet
```

Next we need to install a few things:

[Ant Design](https://ant.design) is a style library supported by Alibaba and is used for many of our components

```
npm install antd
```

All the styling in the app is done using [less](http://lesscss.org). Unfortunately, create-react-app does not support *less* out of the box. This can fixed by using [craco](https://github.com/gsoft-inc/craco) which provides custom configuration solutions for create-react-app.

```
npm install @craco/craco
npm install craco-less
npm install less less-loader css-loader 
```

Now open *package.json* and change
  
```
"scripts": {
	"start": "react-scripts start",
	"build": "react-scripts build",
	"test": "react-scripts test",
	"eject": "react-scripts eject"
},
```
to
  
```
"scripts": {
	"start": "craco start",
	"build": "craco build",
	"test": "craco test",
	"eject": "react-scripts eject"
},
```

Now create a file *craco.config.js* in our root directory, containing

```
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
```

Now we are ready to start our react app!

```
npm start
```

### Adding new components

React applications are composed of components. All components can be found in *./src/components/*.

A new component can be added to our app by running

```
npx generate-react-cli component PutNameHere
```
in the 
