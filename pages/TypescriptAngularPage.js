module.exports ={
    url : 'https://todomvc.com/examples/typescript-angular/#/',
    
    elements: {
        header: '.header',
        todoplaceholder : 'input[ng-model = "newTodo"]',
        mainList : 'ul[data-reactid = ".0.1.2"] li',

    },

    commands : [{
        pressEnter(browser){
            return browser
                        .keys(browser.Keys.ENTER);
        },

        completeTodo(browser, todo){
            return browser
                .elements('css selector', 'li[class = "ng-scope"] div', function(elementList){
                    elementList.value.forEach(function (elementsObj, index) {
                        browser.elementIdText(elementsObj.ELEMENT, function (result) {
                            if(result.value == todo){
                                console.log("here")
                                index = index+1
                                browser.useXpath().click("/html/body/section/section/ul/li["+index+"]/div/input")
                            }
                        });
                    });
                });
        },

        completeTodos(browser, todo1, todo2){
            return browser
                .elements('css selector', 'li[class = "ng-scope"] div', function(elementList){
                    elementList.value.forEach(function (elementsObj, index) {
                        browser.elementIdText(elementsObj.ELEMENT, function (result) {
                            if(result.value == todo1 || result.value == todo2){
                                index = index+1
                                browser.useXpath().click("/html/body/section/section/ul/li["+index+"]/div/input")
                            }
                        });
                    });
                });
        },

        uncheckTodo(browser, todo){
            return browser
                .elements('css selector', 'li[class = "ng-scope completed"] div', function(elementChecked){
                    elementChecked.value.forEach(function (elementsObject, index) {
                        browser.elementIdText(elementsObject.ELEMENT, function (res) {
                            if(res.value == todo){
                                index = index+1
                                browser.useXpath().click("/html/body/section/section/ul/li["+index+"]/div/input")
                            }
                        });
                    });
                });
        },

        editTodo(browser, todo, newValue){
            return browser
                .elements('css selector', 'li[class = "ng-scope"] div', function(elementList){
                    elementList.value.forEach(function (elementsObj, index) {
                        browser.elementIdText(elementsObj.ELEMENT, function (result) {
                            if(result.value == todo){
                                browser
                                    .moveTo(elementsObj.ELEMENT)
                                    .pause(100)
                                    .doubleClick()
                                    .pause(100)
                                    .keys(newValue)
                                    .keys(browser.Keys.ENTER)
                                    .pause(100)
                            }
                        });
                    });
                });
        },

        removeTodo(browser, todo){
            return browser
                .elements('css selector', 'li[class = "ng-scope"] div', function(elementList){
                    elementList.value.forEach(function (elementsObj, index) {
                        browser.elementIdText(elementsObj.ELEMENT, function (result) {
                            if(result.value == todo){
                                index = index+1
                                browser
                                    .moveTo(elementsObj.ELEMENT)
                                    .useXpath()
                                    //.waitForElementVisible("/html/body/section/section/ul/li["+index+"]/div/button")
                                    .click("/html/body/section/section/ul/li["+index+"]/div/button");
                            }
                        });
                    });
                })
        },

        viewActiveTodos(browser){
            return browser
                .elements('css selector', 'li[class = "ng-scope"] div', function(elementListNew){
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