# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

React Texas(Text Ellipsis) component for trucating long text with ellipsis(three dots)

## Install

```javascript
npm i react-texas
```

## Examples

### single-line ellipsis

```tsx
import Ellipsis from 'react-texas'
<Ellipsis style={{ width: 200, fontSize: 16, border: "1px solid orange", padding: 4 }}>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</Ellipsis>
```

### multiple-line ellipsis

```tsx
import Ellipsis from 'react-texas'
<Ellipsis maxLiens={3} style={{ width: 200, fontSize: 16, border: "1px solid orange", padding: 4 }}>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</Ellipsis>
```

### place ellipsis on the left

by default, ellipsis will be placed on the right. But sometimes, you may want the ellipsis to be placed on the left. 

one example would be a super long URL with many subdomains, in this case, TLD matters more:

```tsx
import Ellipsis from 'react-texas'
<Ellipsis style={{ width: 200, fontSize: 16, border: "1px solid orange", padding: 4 }}>
  github-production-user-asset-6210df.optimizationguide-pa.details.info.user.s3.amazonaws.com
</Ellipsis>
```

### specify the underlying HTML element

by default, this component is represented as a `div` tag. You can specify it to be any valid HTML tag.

```tsx
import Ellipsis from 'react-texas'
<Ellipsis as="span" style={{ width: 200, fontSize: 16, border: "1px solid orange", padding: 4 }}>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</Ellipsis>
```