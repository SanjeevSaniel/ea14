1.  What is node.js ?

    - Node is a runtime environment for executing JS code.
    - Essentially, Node is a C++ program that embeds Chrome’s v8 engine, the fastest JS engine in the world
    - We use Node to build fast and scalable networking applications. It’s a perfect choice for building RESTful services Node applications are single-threaded. That means a single thread is used to serve all clients.

2.  What is NPM ?

    - Every Node application has a package.json file that includes metadata about the application. This includes the name of the application, its version, dependencies, etc.
    - We use NPM to download and install 3rd-party packages from NPM registry

3.  What are the modules in Node.js ?

    - In Node.js, Modules are the blocks of encapsulated code that communicates
      with an external application on the basis of their related functionality.
    - Modules can be a single file or a collection of multiples files/folders.
    - The reason programmers are heavily reliant on modules is because of their
      re-usability as well as the ability to break down a complex piece of code
      into manageable chunks

4.  What is the purpose of the module.exports?
    The main purpose of module.exports is to achieve modular programming.
    Modular programming refers to separating the functionality of a program
    into independent, interchangeable modules, such that each contains
    everything necessary to execute only one aspect of the desired
    functionality

5.  Difference between default export and named export

    - Named and Default exports are not React-centric ideas. They are ES6
      features
    - With named export, one can have multiple named export per file. And then
      when you want to import a named component, you use the same name it was
      exported with. Names must be imported inside curly brackets
    - Default exports are created by including a default tag in the export. One
      can have only one default export per file. When we import we have to
      specify a nam

6.  How do you import any module in Node.js ?
    - const module = require("module_name");
    - Example:
      const http = require("http");
