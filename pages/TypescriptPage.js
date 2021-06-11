module.exports ={
    url : 'https://todomvc.com/examples/typescript-react/#/',
    
    elements: {
        header: '.header',
        todoplaceholder : 'input[class = "new-todo"]',
        mainList : 'ul[data-reactid = ".0.1.2"] li',

    },

    commands : [{
        pressEnter(browser){
            return browser
                        .keys(browser.Keys.ENTER);
        },

        getElements(browser){
            return browser
                .elements('css selector', 'ul[data-reactid = ".0.1.2"] li', function(result){
                    for(var i in result.value) {
                        browser.elementIdAttribute(result.value[i].ELEMENT, 'data-reactid', function(res) {
                            console.log(res.value);
                        });
                    }
            });
        },

        getElementValues(browser){
            return browser
                .elements('css selector', 'ul[data-reactid = ".0.1.2"] li', function(elementList){
                    elementList.value.forEach(function (elementsObj) {
                        browser.elementIdText(elementsObj.ELEMENT, function (result) {
                            console.log(result.value)
                        })
                    })
                });
        },

        completeTodo(browser, todo){
            return browser
                .elements('css selector', 'ul[data-reactid = ".0.1.2"] li', function(elementList){
                    elementList.value.forEach(function (elementsObj, index) {
                        browser.elementIdText(elementsObj.ELEMENT, function (result) {
                            if(result.value == todo){
                                browser
                                    .elementIdAttribute(elementsObj.ELEMENT, 'data-reactid', function(res) {
                                        browser
                                            .click("input[data-reactid='"+res.value+".0.0']")
                                            .pause(100)
                                            .saveScreenshot("tests_output/todo-completed.png")
                                });
                            }
                        });
                    });
                });
        },

        uncheckTodo(browser, todo){
            return browser
                .elements('css selector', 'ul[data-reactid = ".0.1.2"] li', function(elementList){
                    elementList.value.forEach(function (elementsObj, index) {
                        browser.elementIdText(elementsObj.ELEMENT, function (result) {
                            if(result.value == todo){
                                browser
                                    .elementIdAttribute(elementsObj.ELEMENT, 'data-reactid', function(res) {
                                        browser
                                            .click("input[data-reactid='"+res.value+".0.0']")
                                            .pause(100)
                                            .saveScreenshot("tests_output/todo-completed.png")
                                            .assert.containsText(".view label", todo)
                                });
                            }
                        });
                    });
                });
        },

        editTodo(browser, todo, newValue){
            return browser
                .elements('css selector', 'ul[data-reactid = ".0.1.2"] li', function(elementList){
                    elementList.value.forEach(function (elementsObj, index) {
                        browser.elementIdText(elementsObj.ELEMENT, function (result) {
                            if(result.value == todo){
                                browser
                                    .moveTo(elementsObj.ELEMENT, 0, 0)
                                    .doubleClick()
                                    .pause(100)
                                    .keys(newValue)
                                    .keys(browser.Keys.ENTER)
                                    .pause(100)
                                    .assert.containsText(".view label", todo+newValue)
                            }
                        });
                    });
                });
        },

        removeTodo(browser, todo){
            return browser
                .elements('css selector', 'ul[data-reactid = ".0.1.2"] li', function(elementList){
                    elementList.value.forEach(function (elementsObj, index) {
                        browser.elementIdText(elementsObj.ELEMENT, function (result) {
                            if(result.value == todo){
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
        },

        viewActiveTodos(browser){
            return browser
                .elements('css selector', 'ul[data-reactid = ".0.1.2"] li', function(elementListNew){
                    console.log("Remaining todos:")
                    elementListNew.value.forEach(function (elementsObject) {
                        browser.elementIdText(elementsObject.ELEMENT, function (result) {
                            console.log(result.value)
                        })
                    })
                });
        },

        clearCompleted(browser){
            return browser
                .click("button[class = 'clear-completed'")
        }
    }]
}