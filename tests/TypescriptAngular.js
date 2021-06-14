module.exports = {
    'Reach Url': function(browser) {
        const page = browser.page.TypescriptAngularPage();

        page
            .navigate()
            .waitForElementVisible('@header')
            .assert.containsText('@header', "todos");

        browser.deleteCookies()
    },

    'Create Todo': function(browser){
        const page = browser.page.TypescriptAngularPage();
        const todo = 'Grocery';

        page
            .navigate()
            .setValue('@todoplaceholder', todo)
            .pressEnter(browser)
            .pause(1000)
            .assert.containsText(".view label", todo)
            .saveScreenshot("tests_output/todo-TypescriptAngular.png");
    },

    'Add todos': function(browser){
        const todo1 ='Finish test'
        const todo2 = 'Laundry'
        const todo3 = 'Water Plants'
        const todo4 = 'Cook dinner'

        const todoplaceholder = 'input[ng-model = "newTodo"]'
        browser
            .url("https://todomvc.com/examples/typescript-angular/#/")
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
            .saveScreenshot("tests_output/todo-added-TypescriptAngular.png")

    },

    'Complete todo': function(browser){
        const page = browser.page.TypescriptAngularPage();
        const todo = "Grocery"
        
        page
            .navigate()
            .completeTodo(browser, todo);
        
       browser.useCss()
            .saveScreenshot("tests_output/todo-completed-TypescriptAngular.png")
           .assert.containsText("li[class = 'ng-scope completed'] label", todo)
    },

    'Uncheck todo': function(browser){
        const page = browser.page.TypescriptAngularPage();
        const todo = "Grocery"

        page
            .navigate()
            .uncheckTodo(browser, todo)

        browser.useCss()
            .saveScreenshot("tests_output/todo-uncheck-TypescriptAngular.png")
            .assert.containsText("li[class = 'ng-scope'] label", todo)

    },

    'Edit todo': function(browser){
        const page = browser.page.TypescriptAngularPage();
        const todo = "Grocery"
        const newValue = " - get bread"

        page
            .navigate()
            .editTodo(browser, todo, newValue)

        browser.useCss()
            .saveScreenshot("tests_output/todo-edit-TypescriptAngular.png")
            .assert.containsText("li[class = 'ng-scope'] label", todo+newValue)
    },

    'Remove todo' : function(browser){
        const page = browser.page.TypescriptAngularPage();
        const todo = "Finish test"

        page
            .navigate()
            .removeTodo(browser, todo);
            
        page.viewActiveTodos(browser);

        browser
            .saveScreenshot("tests_output/todo-removed-TypescriptAngular.png")
    },

    'Complete todos and Clear Completed': function(browser){
        const page = browser.page.TypescriptAngularPage();
        const todo1 = "Grocery - get bread"
        const todo2 = "Laundry"

        page
            .navigate()
            .completeTodos(browser, todo1, todo2);


        page.clearCompleted(browser);
        page.viewActiveTodos(browser);

        browser
            .saveScreenshot("tests_output/todo-clear-completed-TypescriptAngular.png")
            .end();

    }


}