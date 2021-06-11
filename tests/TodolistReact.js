module.exports = {
    'Reach Url': function(browser) {
        const page = browser.page.TodoPage();

        page
            .navigate()
            .waitForElementVisible('@header')
            .assert.containsText('@header', "todos");

        browser.deleteCookies()
    },

    'Create Todo': function(browser){
        const page = browser.page.TodoPage();
        const todo = 'Grocery';

        page
            .navigate()
            .setValue('@todoplaceholder', todo)
            .pressEnter(browser)
            .pause(1000)
            .assert.containsText(".view label", todo)
            .saveScreenshot("tests_output/todo-React.png");
    },

    'Get todo element': function(browser){
        const page = browser.page.TodoPage();

        page
            .navigate()
            .getElements(browser)

    },

    'Get todo elements value': function(browser){
        const page = browser.page.TodoPage();
        page
            .navigate()
            .getElementValues(browser)
    },

    'Add todos': function(browser){
        const todo1 ='Finish test'
        const todo2 = 'Laundry'
        const todo3 = 'Water Plants'
        const todo4 = 'Cook dinner'

        const todoplaceholder = 'input[class = "new-todo"]'
        browser
            .url("http://todomvc.com/examples/react/#/")
            .setValue(todoplaceholder, todo1)
            .keys(browser.Keys.ENTER)
            .pause(100)
            .setValue(todoplaceholder, todo2)
            .keys(browser.Keys.ENTER)
            .pause(100)
            .setValue(todoplaceholder, todo3)
            .keys(browser.Keys.ENTER)
            .pause(100)
            .setValue(todoplaceholder, todo4)
            .keys(browser.Keys.ENTER)
            .pause(100)
            .saveScreenshot("tests_output/todo-added-React.png")

    },

    'Complete todo': function(browser){
        const page = browser.page.TodoPage();
        const todo = "Grocery"
        
        page
            .navigate()
            .completeTodo(browser, todo);
        
        browser
            .saveScreenshot("tests_output/todo-completed-React.png")
            .assert.containsText(".completed label", todo)
    },

    'Uncheck todo': function(browser){
        const page = browser.page.TodoPage();
        const todo = "Grocery"

        page
            .navigate()
            .uncheckTodo(browser, todo)
    },

    'Edit todo': function(browser){
        const page = browser.page.TodoPage();
        const todo = "Grocery"
        const newValue = " - get bread"

        page
            .navigate()
            .editTodo(browser, todo, newValue);

        page.viewActiveTodos(browser);

        browser
            .saveScreenshot("tests_output/todo-edited-React.png")
    },

    'Remove todo' : function(browser){
        const page = browser.page.TodoPage();
        const todo = "Finish test"

        page
            .navigate()
            .removeTodo(browser, todo);
            
        page.viewActiveTodos(browser);

        browser
            .saveScreenshot("tests_output/todo-remove-React.png")
    },

    'Complete todos and Clear Completed': function(browser){
        const page = browser.page.TodoPage();
        const todo1 = "Grocery - get bread"
        const todo2 = "Laundry"

        page
            .navigate()
            .completeTodo(browser, todo1);
        
        page.completeTodo(browser, todo2);

        page.clearCompleted(browser);
        page.viewActiveTodos(browser);

        browser
            .saveScreenshot("tests_output/todo-Clear-completed-React.png")
            .end()

    }

}