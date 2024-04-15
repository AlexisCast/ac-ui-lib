# React + TypeScript + Vite ac-ui-lib

```bash
npm i
npm run build
npm run storybook
```

- To run/use components in your project:

`package.json`
```bash
...
  "dependencies": {
    ...
    "ac-ui-lib": "file:../../ac-ui-lib",
    ...
  },
...
```

`HelloWorld.jsx`
```bash
import { Button, ButtonT, Header } from "ac-ui-lib";
const HelloWorld = () => {
	const token = useRouteLoaderData("root");

	return (
		<div className={styles.Home}>
			<ButtonT size="lg" label="hello">
				Hello World
			</ButtonT>
			<Header user="user">df</Header>
	);
};

export default HelloWorld;
```