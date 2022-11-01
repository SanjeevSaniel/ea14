// import logo from './logo.svg';
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <h2>
        1.{" "}
        <a href="https://programmingwithmosh.com/react/react-higher-order-components-for-the-newbie/">
          High Order Component in react js ?
        </a>
      </h2>
      <p>
        The Higher Order Component is essentially a function, that takes in a
        component as an argument, and returns a new component. It can also
        render the original component that was passed to it as an argument.
        <li>
          HOC function that takes in a component and returns a new component.
        </li>
        <li>
          It is primarily use to reuse code and follow the DRY principle in
          React.
        </li>
        <li>
          It is not an API and is a design pattern that fits well within React.
        </li>
      </p>

      <h2>
        2. Do you know about SEO ? Is it true that react js supports SEO support
        ?
      </h2>
      <p>
        Search engine optimization (SEO) is the process of structuring and
        organizing a website to expand the volume of traffic by increasing its
        position and frequency of appearance in search engines, focusing on
        keywords that reveal the specifics of the site. It helps bring as many
        people to your web service as possible and helps create organic traffic
        on your website, turning your visitors into customers.
      </p>
      <p>
        React is a JavaScript framework developed to build interactive and
        modular UIs. SEO is not a design goal of React but content websites
        built with React can be optimized to achieve better indexing and
        ranking.
      </p>

      <h2>3. clean up in useEffect</h2>
      <p>
        Just like the name implies, the useEffect cleanup is a function in the
        useEffect Hook that allows us to tidy up our code before our component
        unmounts. When our code runs and reruns for every render, useEffect also
        cleans up after itself using the cleanup function.
      </p>
      <p>
        The useEffect Hook is built in a way that we can return a function
        inside it and this return function is where the cleanup happens. The
        cleanup function prevents memory leaks and removes some unnecessary and
        unwanted behaviors.
      </p>

      <h2>4. What is the use of useCallback and useMemo</h2>
      <p>
        React is heavily optimized out of the box, and so in general, re-renders
        aren't a big deal. But, in certain situations, these snapshots do take a
        while to create. This can lead to performance problems, like the UI not
        updating quickly enough after the user performs an action.
      </p>
      <p>
        Fundamentally, useMemo and useCallback are tools built to help us
        optimize re-renders. They do this in two ways:
      </p>
      <li>
        Reducing the amount of work that needs to be done in a given render.
      </li>
      <li>Reducing the number of times that a component needs to re-render.</li>

      <h2>5. Why do we need keys in react ?</h2>
      <p>
        A “key” is a special string attribute you need to include when creating
        lists of elements in React. Keys are used in React to identify which
        items in the list are changed, updated, or deleted. In other words, we
        can say that keys are used to give an identity to the elements in the
        lists.
      </p>

      <h2>6. Do you know about redux</h2>
      <p>
        Redux is a predictable state container designed to help you write
        JavaScript apps that behave consistently across client, server, and
        native environments, and are easy to test. While it’s mostly used as a
        state management tool with React, you can use it with any other
        JavaScript framework or library.
      </p>
    </React.Fragment>
  );
}

export default App;
