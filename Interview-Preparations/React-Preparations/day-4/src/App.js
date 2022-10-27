// import logo from './logo.svg';
import "./App.css";
import CalculateFactorial from "./components/MemoHook";
import RefHook from "./components/RefHook";
import ComponentDidMountMethod from "./components/LifeCycles/ComponentDidMountMethod.jsx";
import ComponentDidUpdateMethod from "./components/LifeCycles/ComponentDidUpdate";
import ComponentWillUnmount from "./components/LifeCycles/ComponentWillUnmount";

function App() {
  return (
    <div className="App">
      <h2>
        1.
        <a href="https://dmitripavlutin.com/react-useref-guide/">
          What is UseRef Hook ?(Implementation)
        </a>
      </h2>
      <p>
        The useRef Hook is a function that returns a mutable ref object whose
        .current property is initialized with the passed argument
        (initialValue). The returned object will persist for the full lifetime
        of the component.
      </p>
      <RefHook />
      <h2>
        2.
        <a href="https://dmitripavlutin.com/react-usememo-hook/">
          What is UseMemo Hook ?(Implementation)
        </a>
      </h2>
      <CalculateFactorial />
      <h2>
        3.{" "}
        <a href="https://www.loginradius.com/blog/engineering/react-context-api/#:~:text=What%20is%20Context%20API%3F,to%20parent%2C%20and%20so%20on.">
          What is Context api ?
        </a>
      </h2>
      <p>
        The React Context API is a way for a React app to effectively produce
        global variables that can be passed around. This is the alternative to
        "prop drilling" or moving props from grandparent to child to parent, and
        so on.
      </p>
      <h4>How it works ?</h4>
      <p>
        React.createContext() is all you need. It returns a consumer and a
        provider. Provider is a component that as it's names suggests provides
        the state to its children. It will hold the "store" and be the parent of
        all the components that might need that store. Consumer as it so happens
        is a component that consumes and uses the state.
      </p>
      <h2>
        4.{" "}
        <a href="https://medium.com/how-to-react/react-life-cycle-methods-with-examples-2bdb7465332b">
          What are React Life cycles Explain each one with Example
        </a>
      </h2>
      <p>
        As everything goes through a cycle of taking birth, growing, and death
        the same goes with React. Each component in React has a lifecycle that
        goes through three main phases Mounting, Updating, and Unmounting.
      </p>
      <p>
        The react lifecycle method is used in the React class component. It
        helps us in creating our state and mutating them.
      </p>
      <h2>
        5.
        <a href="https://www.freecodecamp.org/news/what-is-lifting-state-up-in-react/">
          What is Props Drilling Concept ?What is State Uplifting ?
        </a>
      </h2>
      <h4>Props Drilling:</h4>
      <p>
        Prop drilling is simply passing down props to child components (whether
        they are functions, variables). The child component will then have
        access to this property. If the prop is not drilled down the child
        component will not have access to it.
      </p>
      <h4>State Uplifting</h4>
      <p>
        We lift up state to a common ancestor of components that need it, so
        that they can all share in the state. This allows us to more easily
        share state among all of these components that need rely upon it.
      </p>
      <h4>Examples :</h4>
      <ComponentDidMountMethod />
      <ComponentDidUpdateMethod />
      <ComponentWillUnmount />
      <h2>
        6.
        <a href="https://medium.com/@stellam777/basic-react-hooks-usestate-useeffect-usecontext-b117380c4f6f">
          Difference between useEffect and useContext ?
        </a>
      </h2>
      UseEffect():
      <p>
        The useEffect() hook lets you perform side effects, or modification to
        some sort of state.This hook can be best thought of as
        componentDidMount(), componentDidUpdate(), and componentWillUnmount()
        all in one, which lets us hook into the life cycle method of functional
        components.
      </p>
      useContext():
      <p>
        The useContext() hook is used to create common data that can be easily
        shared amongst components without having to pass props manually to each
        level.
      </p>
      <h2>
        7.{" "}
        <a href="https://www.knowledgehut.com/blog/web-development/react-functional-components">
          Difference between callback and useCallback Hook ?
        </a>
      </h2>
      useCallback():
      <p>
        useCallback(callback, dependencies) will return a memoized instance of
        the callback that only changes if one of the dependencies has changed.
        Instead of recreating the function object on every re-render, we can use
        the same function object between renders.
      </p>
    </div>
  );
}

export default App;
