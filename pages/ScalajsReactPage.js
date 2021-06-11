module.exports ={
    url : 'https://todomvc.com/examples/scalajs-react/#/',
    
    elements: {
        header: '.todoapp',
        todoplaceholder : 'input[class = "new-todo"]',
    },

    commands : [{
        pressEnter(browser){
            return browser
                        .keys(browser.Keys.ENTER);
        },

        completeTodo(browser, todo){
            return browser
                .elements('css selector', 'ul[class = "todo-list"] div', function(elementList){
                    elementList.value.forEach(function (elementsObj, index) {
                        browser.elementIdText(elementsObj.ELEMENT, function (result) {
                            if(result.value == todo){
                                index = index+1
                                browser.useXpath().click("/html/body/section/div/section/ul/li["+index+"]/div/input")
                            }
                        });
                    });
                });
        },

        uncheckTodo(browser, todo){
            return browser
                .elements('css selector', 'li[class = "completed"] div', function(elementChecked){
                    elementChecked.value.forEach(function (elementsObject, index) {
                        browser.elementIdText(elementsObject.ELEMENT, function (res) {
                            if(res.value == todo){
                                index = index+1
                                browser.useXpath().click("/html/body/section/div/section/ul/li["+index+"]/div/input")
                            }
                        });
                    });
                });
        },

        editTodo(browser, todo, newValue){
            return browser
                .elements('css selector', 'ul[class = "todo-list"] div', function(elementList){
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
                                    //.assert.containsText(".view label", todo+newValue)
                            }
                        });
                    });
                });
        },

        removeTodo(browser, todo){
            return browser
                .elements('css selector', 'ul[class = "todo-list"] div', function(elementList){
                    elementList.value.forEach(function (elementsObj, index) {
                        browser.elementIdText(elementsObj.ELEMENT, function (result) {
                            if(result.value == todo){
                                index = index+1
                                browser
                                .moveTo(elementsObj.ELEMENT, 0, 0)
                                .useXpath().click("/html/body/section/div/section/ul/li["+index+"]/div/button")
                            }
                        });
                    });
                })
        },

        viewActiveTodos(browser){
            return browser
                .elements('css selector', 'div[class = "view"] label', function(elementListNew){
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
                .useCss().click("button[class = 'clear-completed'")
        }
    }]
}