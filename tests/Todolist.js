module.exports = {
    'Reach Url': function(browser) {
        browser
            .url("http://todomvc.com/examples/react/#/")
            .waitForElementVisible('.header')
            .assert.containsText(".header", "todos");
    },

    'Create Todo': function(browser){
        const todo = 'Grocery';
        const todoplaceholder = 'input[class = "new-todo"]'

        browser
            .url("http://todomvc.com/examples/react/#/")
            .setValue(todoplaceholder, todo)
            .keys(browser.Keys.ENTER)
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
            .saveScreenshot("tests_output/todo-added.png")
    },

    'Get todo element': function(browser){
        browser
            .url("http://todomvc.com/examples/react/#/")
            .elements('css selector', 'ul[data-reactid = ".0.1.2"] li', function(result){
                    for(var i in result.value) {
                      this.elementIdAttribute(result.value[i].ELEMENT, 'data-reactid', function(res) {
                        console.log(res.value);
                      });
                    }
            });

    },

    'Get todo elements value': function(browser){
        browser
            .url("http://todomvc.com/examples/react/#/")
            .elements('css selector', 'ul[data-reactid = ".0.1.2"] li', function(elementList){
                elementList.value.forEach(function (elementsObj) {
                    browser.elementIdText(elementsObj.ELEMENT, function (result) {
                        console.log(result.value)
                    })
                })
            });
    },

    'Complete todo Grocery': function(browser){
        browser
            .url("http://todomvc.com/examples/react/#/")
            .elements('css selector', 'ul[data-reactid = ".0.1.2"] li', function(elementList){
                elementList.value.forEach(function (elementsObj, index) {
                    browser.elementIdText(elementsObj.ELEMENT, function (result) {
                        if(result.value == "Grocery"){
                            browser
                                .elementIdAttribute(elementsObj.ELEMENT, 'data-reactid', function(res) {
                                    browser
                                        .click("input[data-reactid='"+res.value+".0.0']")
                                        .pause(100)
                                        .saveScreenshot("tests_output/todo-completed.png")
                                        .assert.containsText(".completed label", "Grocery")
                            });
                        }
                    });
                });
            });
    },

    'Uncheck todo Grocery': function(browser){
        browser
        .url("http://todomvc.com/examples/react/#/")
        .elements('css selector', 'ul[data-reactid = ".0.1.2"] li', function(elementList){
            elementList.value.forEach(function (elementsObj, index) {
                browser.elementIdText(elementsObj.ELEMENT, function (result) {
                    if(result.value == "Grocery"){
                        browser
                            .elementIdAttribute(elementsObj.ELEMENT, 'data-reactid', function(res) {
                                browser
                                    .click("input[data-reactid='"+res.value+".0.0']")
                                    .pause(100)
                                    .saveScreenshot("tests_output/todo-completed.png")
                                    .assert.containsText(".view label", "Grocery")
                        });
                    }
                });
            });
        });
    },

    'Edit todo Grocery': function(browser){
        browser
        .url("http://todomvc.com/examples/react/#/")
        .elements('css selector', 'ul[data-reactid = ".0.1.2"] li', function(elementList){
            elementList.value.forEach(function (elementsObj, index) {
                browser.elementIdText(elementsObj.ELEMENT, function (result) {
                    if(result.value == "Grocery"){
                        browser
                            .moveTo(elementsObj.ELEMENT, 0, 0)
                            .doubleClick()
                            .pause(100)
                            .keys(" - get bread")
                            .keys(browser.Keys.ENTER)
                            .pause(100)
                            .assert.containsText(".view label", "Grocery - get bread")
                    }
                });
            });
        });
    },

    'Remove todo Finish Test' : function(browser){
        browser
            .url("http://todomvc.com/examples/react/#/")
            .elements('css selector', 'ul[data-reactid = ".0.1.2"] li', function(elementList){
                elementList.value.forEach(function (elementsObj, index) {
                    browser.elementIdText(elementsObj.ELEMENT, function (result) {
                        if(result.value == "Finish test"){
                            browser
                            .elementIdAttribute(elementsObj.ELEMENT, 'data-reactid', function(reactID){
                                browser
                                    .moveTo(elementsObj.ELEMENT, 0, 0)
                                    .click("button[data-reactid='"+reactID.value+".0.2'")
                                    .pause(100)
                            });
                        }
                    });
                });
            })
            .elements('css selector', 'ul[data-reactid = ".0.1.2"] li', function(elementListNew){
                console.log("Remaining todos:")
                elementListNew.value.forEach(function (elementsObject) {
                    browser.elementIdText(elementsObject.ELEMENT, function (result) {
                        console.log(result.value)
                    })
                })
            });
    },

    'Complete todos and Clear Completed': function(browser){
        browser
            .url("http://todomvc.com/examples/react/#/")
            .elements('css selector', 'ul[data-reactid = ".0.1.2"] li', function(elementList){
                elementList.value.forEach(function (elementsObj, index) {
                    browser.elementIdText(elementsObj.ELEMENT, function (result) {
                        if(result.value == "Grocery - get bread" || result.value == "Laundry"){
                            browser
                                .elementIdAttribute(elementsObj.ELEMENT, 'data-reactid', function(res) {
                                    browser
                                        .click("input[data-reactid='"+res.value+".0.0']")
                                        .pause(100)
                            });
                        }
                    });
                });
            })
            .click("button[class = 'clear-completed'")
            .elements('css selector', 'ul[data-reactid = ".0.1.2"] li', function(elementListActive){
                console.log("Remaining todos:")
                elementListActive.value.forEach(function (elementsActive) {
                    browser.elementIdText(elementsActive.ELEMENT, function (result) {
                        console.log(result.value)
                    })
                })
            });

    }

}