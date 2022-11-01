import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <h2>1. What is an event in react ?</h2>
      <p>
        An event is an action that could be triggered as a result of the user
        action or system generated event. For example, a mouse click, loading of
        a web page, pressing a key, window resizes, and other interactions are
        called events. React has its own event handling system which is very
        similar to handling events on DOM elements. The react event handling
        system is known as Synthetic Events. The synthetic event is a
        cross-browser wrapper of the browser's native event.
      </p>

      <h2>2. What is memory leak and how to overcome ?</h2>
      <p>
        Memory leaks in React applications are primarily a result of not
        canceling subscriptions made when a component was mounted before the
        component gets unmounted. These subscriptions could be
        <li>DOM Event Listener</li>
        <li> WebSocket Subscription</li>
        <li>Request to an API</li>
        <br />
        Basically, when we add an Event Listener in React, we need to remove
        them in order to avoid memory leaks.
        <br />
        <a
          href="https://levelup.gitconnected.com/react-memory-leaks-and-how-to-avoid-them-bb05c571e728"
          target="_blank"
          rel="noreferrer"
        >
          Reference
        </a>
      </p>

      <h2>3. Do you prefer function-based or class component and why ?</h2>
      <p>
        It depends on the usage of the component.
        <br />A functional component is just a plain JavaScript pure function
        that accepts props as an argument and returns a React element(JSX).
        where as <br />A class component requires you to extend from React.
        Component and create a render function which returns a React element.
      </p>

      <h2>4. Explain reducer as pure function in redux</h2>
      <p>
        Reducers are the major portion of the redux integration and hold a lot
        of the business logic. Since reducers are designed to be pure functions,
        they carry a lot of benefits along.
        <li>
          Business logic is maintained in clean, simple and elegant functions
          because they are pure functions.
        </li>
        <li>
          Reducers are pure functions, and therefore easier to maintain, test
          and debug.
        </li>
        <li>
          It is also easy to extend and add additional functionality to the
          reducers.
        </li>{" "}
        <br />
        Of course, writing clean pure functions is possible even if you do not
        use redux. But the fact that when we use redux in complex apps for state
        management, adhering to these principles is awesome. <br />
        <a href="https://programmingwithmosh.com/redux/understand-the-redux-reducer/">
          Reference Link
        </a>
      </p>

      <h2>5. Why do we use redux thunk ?</h2>
      <p>
        Redux Thunk is middleware that allows you to return functions, rather
        than just actions, within Redux. This allows for delayed actions,
        including working with promises. <br /> One of the main use cases for
        this middleware is for handling actions that might not be synchronous,
        for example, using axios to send a GET request. Redux Thunk allows us to
        dispatch those actions asynchronously and resolve each promise that gets
        returned.
      </p>

      <h2>6. What do you know about NPM ?</h2>
      <p>
        Npm stands for Node Package Manager. It is a package manager for the
        Node JavaScript platform. Npm is known as the world’s largest software
        registry. Open-source developers all over the world use npm to publish
        and share their source code.
      </p>
      <p>
        npm allows you to install a new package from the registry. This is what
        you will do most of the time with npm.
      </p>
      <p>
        In general, every npm project has a file called package.json located in
        the root directory. The package.json is a plain text file that contains
        important information that npm uses to identify the project and handle
        dependencies.
      </p>
      <a href="https://www.javascripttutorial.net/nodejs-tutorial/what-is-npm/">Reference</a>
    </React.Fragment>
  );
}

export default App;
