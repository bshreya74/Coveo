module.exports = {
    'Reach Url': function(browser) {
        const page = browser.page.ScalajsReactPage();

        page
            .navigate()
            .waitForElementVisible('@header')
            .assert.containsText('@header', "todos");
    },

    'Create Todo': function(browser){
        const page = browser.page.ScalajsReactPage();
        const todo = 'Grocery';

        page
            .navigate()
            .setValue('@todoplaceholder', todo)
            .pressEnter(browser)
            .pause(1000)
            .assert.containsText(".view label", todo)
            .saveScreenshot("tests_output/todo.png");
    },

    'Add todos': function(browser){
        const todo1 ='Finish test'
        const todo2 = 'Laundry'
        const todo3 = 'Water Plants'
        const todo4 = 'Cook dinner'

        const todoplaceholder = 'input[class = "new-todo"]'
        browser
            .url("https://todomvc.com/examples/scalajs-react/#/")
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
            .saveScreenshot("tests_output/todo-added.png")

    },

    'Complete todo': function(browser){
        const page = browser.page.ScalajsReactPage();
        const todo = "Grocery"
        
        page
            .navigate()
            .completeTodo(browser, todo);
            
    },

    'Uncheck todo': function(browser){
        const page = browser.page.ScalajsReactPage();
        const todo = "Grocery"

        page
            .navigate()
            .uncheckTodo(browser, todo)

        browser.pause(1000)
    },

    'Edit todo': function(browser){
        const page = browser.page.ScalajsReactPage();
        const todo = "Grocery"
        const newValue = " - get bread"

        page
            .navigate()
            .editTodo(browser, todo, newValue)

        browser.pause(1000)
    },

    'Remove todo' : function(browser){
        const page = browser.page.ScalajsReactPage();
        const todo = "Finish test"

        page
            .navigate()
            .removeTodo(browser, todo);
            
        page.viewActiveTodos(browser);
    },

    'Complete todos and Clear Completed': function(browser){
        const page = browser.page.ScalajsReactPage();
        const todo1 = "- get breadGrocery"
        const todo2 = "Laundry"

        page
            .navigate()
            .completeTodo(browser, todo1);
        
        page.completeTodo(browser, todo2);

        page.clearCompleted(browser);
        page.viewActiveTodos(browser);

    }



}