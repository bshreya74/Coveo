# Coveo
This project includes complete end-to-end testing for http://todomvc.com/examples/react/#/ 

The main test cases include the following:
1. Reach URL: Tests if url can be reached
2. Create a todo: adds a todo
3. Get todo elements: gets the elements in the todolist
4. Get todo elements value: Gets the values of the elements in the todo list
5. Add todos: Adds multiple todo to the list
6. Complete todo: Completes a Todo
7. Uncheck todo: Unchecks a Todo
8. Edit todo: Edits a todo
7. Remove todo: Removes a todo from the list
9. Complete todos and clear completed: Completes todos and clicks clear completed to clear the completed todos

Test suites:

The project includes the following test suites, each of which cover the above testcases for the corresponding pages:
1. TodoListReact.js : Includes testcases to test https://todomvc.com/examples/react/#/ . The elements and functions in this file is defined in TodoPage.js
2. ReactBackbone.js: Includes testcases to test https://todomvc.com/examples/react-backbone/ . The elements and functions in this file is defined in ReactBackbonePage.js
3. ScalajsReact.js: Includes testcases to test https://todomvc.com/examples/scalajs-react/#/ . The elements and functions in this file is defined in ScalajsReactPage.js
4. TypescriptReact.js: Includes testcases to test https://todomvc.com/examples/typescript-react/#/ . The elements and functions in this file is defined in TypescriptPage.js
5. ReactAlt.js: Includes testcases to test https://todomvc.com/examples/react-alt/#/ . The elements and functions in this file is defined in ReactAltPage.js

I have used Nightwatch to write the testcases

How to run:
1. Clone the project
2. Make sure you have nightwatch and Node.js
3. To run individual test suite run the following command in the terminal with the test suite path: npm test tests/TodolistReact.js



