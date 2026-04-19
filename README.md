# React Starter Vicky

A minimal React + JSX starter for learning by editing a very small app.

This repo is intentionally tiny:

- no TypeScript
- no router
- no state library
- no testing setup
- no CSS framework

It uses only:

- `react`
- `react-dom`
- `vite`

## What This App Does

The app renders one simple page with:

- a greeting
- a text input
- a counter

It is meant to be easy to break, change, and rebuild while learning the basics of React.

## How To Run It

Make sure you are in this folder:

```bash
cd ~/src/react-starter-vicky
```

Use the project Node version:

```bash
nvm use
```

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Vite will print a local URL, usually:

```text
http://localhost:5173
```

Open that in your browser.

## Main Commands

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## File Overview

### `index.html`

This is the single HTML page for the app.

It contains:

- the root DOM node: `<div id="root"></div>`
- the script tag that loads `src/main.jsx`

### `src/main.jsx`

This is the entry point.

It:

- imports React
- imports `createRoot` from `react-dom/client`
- imports the main `App` component
- imports the CSS file
- mounts React into the `#root` element

This is the bridge between the browser page and your React app.

### `src/App.jsx`

This is the main React component.

It demonstrates two beginner concepts:

- `useState` for changing text input
- `useState` for changing a counter

When state changes, React re-renders the UI automatically.

### `src/styles.css`

This holds the basic styling for the page.

It is plain CSS. No framework, no special tooling beyond Vite loading it.

## React Concepts In This Repo

### Components

`App` is a React component. A component is a function that returns JSX.

Example:

```jsx
export default function App() {
  return <h1>Hello</h1>;
}
```

### JSX

JSX looks like HTML inside JavaScript, but it is not raw HTML. Vite compiles it so the browser can run it.

Example:

```jsx
<h1>Hello, {name}</h1>
```

### State

State is data that can change over time and trigger a re-render.

Example from this repo:

```jsx
const [count, setCount] = useState(0);
```

## Good First Edits

If you are new to React, try these first:

1. Change the default name in `src/App.jsx`
2. Change the starting counter value
3. Add another button like “reset”
4. Change the heading text
5. Change the CSS in `src/styles.css`
6. Add another piece of state with `useState`

## A Simple Mental Model

This app works like this:

1. `index.html` provides a `<div id="root">`
2. `src/main.jsx` mounts React into that div
3. `src/App.jsx` describes what the UI should look like
4. user actions update state
5. React redraws the changed UI

## Notes

- The project is pinned to Node via `.nvmrc`
- Vite is only here for developer experience: fast dev server, JSX support, and builds
- If you want to learn React basics, most of your time should be spent editing `src/App.jsx`
