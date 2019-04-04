function runTest(testNumber){
    var tests = [];

    switch(testNumber){
        case 2:
            console.log('Running test for feature set 2');
            tests = [
                {
                    test: 'Does a variable named CoinStack exist',
                    message: 'Unable to detect a variable named CodeStack',
                    result: false
                },
                {
                    test: 'Is CoinStack a function',
                    message: 'CoinStack is not a function',
                    result: false
                },
                {
                    test: 'Does CoinStack contain a value property',
                    message: 'No value property found',
                    result: false
                },
                {
                    test: 'Does a variable named fs1CoinStack exist',
                    message: 'No fs1CoinStack variable found',
                    result: false
                },
                {
                    test: 'Is fs1CoinStack an instance of CoinStack',
                    message: 'fs1CoinStack is not an instance of CoinStack',
                    result: false
                }
            ];

            var csType = typeof CoinStack;

            if(csType !== 'undefined'){
                tests[0].message = 'CoinStack detected';
                tests[0].result = true;
                if(csType === 'function'){
                    tests[1].message = 'CoinStack is a function';
                    tests[1].result = true;

                    var testCS = new CoinStack(50);

                    if(Object.keys(testCS).indexOf('value') >= 0){
                        tests[2].message = 'Found value in CoinStack';
                        tests[2].result = true;
                    } else {
                        tests[2].message = 'No value property found in CoinStack';
                    }

                } else {
                    tests[1].message = 'CoinStack is not a function, it is a ' + csType;
                }
            }

            var fs1Type = typeof fs1CoinStack;

            if(fs1Type !== 'undefined'){
                tests[3].message = 'fs1CoinStack found';
                tests[3].result = true;

                if(fs1CoinStack.constructor.name === 'CoinStack'){
                    tests[4].message = 'fs1CoinStack is an instance of CoinStack';
                    tests[4].result = true;
                }
            }


            break;
        case 3:
            console.log('Running test for feature set 3');
            tests = [
                {
                    test: 'Create new instance of CoinStack with 50 coins',
                    message: 'Unable to create instance of CoinStack with 50 coins',
                    result: false
                },
                {
                    test: 'Verify instance of CoinStack has a addCoins method',
                    message: 'No addCoins method found',
                    result: false
                },
                {
                    test: 'Add 25 coins. Stack should now have 75 coins and method should return 75',
                    message: '',
                    result: false
                },
                {
                    test: 'Verify instance of CoinStack has a removeCoins method',
                    message: 'No removeCoins method found',
                    result: false
                },
                {
                    test: 'Remove 30 coins. Stack should now have 45 coins and method should return 30',
                    message: '',
                    result: false
                },
                {
                    test: 'Remove 100 coins. Stack should now have 0 coins and method should return 45',
                    message: '',
                    result: false
                }
            ];

            if(typeof CoinStack === 'function'){
                var testCS = new CoinStack(50);

                if(testCS.value === 50){
                    tests[0].message = 'New instance created successfully with 50 coins';
                    tests[0].result = true;

                    if(typeof testCS.addCoins === 'function'){
                        tests[1].message = 'addCoins method exists';
                        tests[1].result = true;

                        var addResult = testCS.addCoins(25);
                        if(addResult !== 75){
                            tests[2].message = 'addCoins did not return 75. Returned: ' + addResult + '. ';
                        }
                        if(testCS.value !== 75){
                            tests[2].message += 'Stack value is not 75. Value is: ' + testCS.value;
                        }

                        if(tests[2].message === ''){
                            tests[2].message = '75 was returned and stack value is 75';
                            tests[2].result = true;
                        }
                    }

                    if(typeof testCS.removeCoins === 'function'){
                        tests[3].message = 'removeCoins method exists';
                        tests[3].result = true;

                        var removeResult = testCS.removeCoins(30);
                        if(removeResult !== 30){
                            tests[4].message = 'removeCoins did not return 30. Returned: ' + removeResult + '. ';
                        }
                        if(testCS.value !== 45){
                            tests[4].message += 'Stack value is not 45. Value is: ' + testCS.value;
                        }

                        if(tests[4].message === ''){
                            tests[4].message = '30 was returned and stack value is 45';
                            tests[4].result = true;
                        }

                        var removeResult2 = testCS.removeCoins(100);
                        if(removeResult2 !== 45){
                            tests[5].message = 'removeCoins did not return 45. Returned: ' + removeResult2 + '. ';
                        }
                        if(testCS.value !== 0){
                            tests[5].message += 'Stack value is not 0. Value is: ' + testCS.value;
                        }

                        if(tests[5].message === ''){
                            tests[5].message = '45 was returned and stack value is 0';
                            tests[5].result = true;
                        }
                    }
                }
            }

            break;
        case 4:
            console.log('Running test for feature set 4');
            tests = [
                {
                    test: 'Create 2 instances of CoinStack with 50 coins each',
                    message: 'Unable to create two instances of CoinStack with 50 coins each',
                    result: false
                },
                {
                    test: 'Verify instance of CoinStack has a transferCoins method that is a prototype',
                    message: 'No CoinStack method found',
                    result: false
                },
                {
                    test: 'Transfer 25 coins from stack one to stack two',
                    message: 'Not tested',
                    result: false
                },
                {
                    test: 'transferCoins should of returned 25',
                    message: '',
                    result: false
                },
                {
                    test: 'Stack one should have 25 coins',
                    message: 'Not tested',
                    result: false
                },
                {
                    test: 'Stack two should have 75 coins',
                    message: 'Not tested',
                    result: false
                },
                {
                    test: 'Transfer 150 coins from stack 2 to stack one',
                    message: 'Not tested',
                    result: false
                },
                {
                    test: 'transferCoins should of returned 75',
                    message: '',
                    result: false
                },
                {
                    test: 'Stack one should have 100 coins',
                    message: 'Not tested',
                    result: false
                },
                {
                    test: 'Stack two should have 0 coins',
                    message: 'Not tested',
                    result: false
                }
            ];

            if(typeof CoinStack === 'function'){
                var stack1 = new CoinStack(50);
                var stack2 = new CoinStack(50);

                if(stack1.value === 50 && stack2.value === 50){
                    tests[0].message = 'Stack One and Stack Two created successfully';
                    tests[0].result = true;

                    if(typeof stack1.__proto__.transferCoins === 'function'){
                        tests[1].message = 'Found transferCoins as prototype';
                        tests[1].result = true;

                        try {
                            var transfer1 = stack2.transferCoins(stack1, 25);
                            tests[2].message = 'No errors occurred during transfer';
                            tests[2].result = true;
                        } catch(err) {
                            tests[2].message = 'Error occurred during transfer';
                            console.warn('ERROR: from transfer:', err);
                        }

                        if(transfer1 === 25){
                            tests[3].message = 'transferCoins returned 25';
                            tests[3].result = true;
                        } else {
                            tests[3].message = 'transferCoins did not return 25. Returned value: ' + transfer1;
                        }

                        if(stack1.value === 25){
                            tests[4].message = 'Stack One has 25 coins';
                            tests[4].result = true;
                        } else {
                            tests[4].message = 'Stack One has ' + stack1.value + ' coins';
                        }

                        if(stack2.value === 75){
                            tests[5].message = 'Stack Two has 75 coins';
                            tests[5].result = true;
                        } else {
                            tests[5].message = 'Stack One has ' + stack2.value + ' coins';
                        }

                        try{
                            var transfer2 = stack1.transferCoins(stack2, 150);
                            tests[6].message = 'No errors occurred during transfer';
                            tests[6].result = true;
                        } catch(err) {
                            tests[6].message = 'Error occurred during transfer';
                            console.warn('ERROR: from transfer:', err);
                        }

                        if(transfer2 === 75){
                            tests[7].message = 'transferCoins returned 75';
                            tests[7].result = true;
                        } else {
                            tests[7].message = 'transferCoins did not return 75. Returned value: ' + transfer2;
                        }

                        if(stack1.value === 100){
                            tests[8].message = 'Stack One has 100 coins';
                            tests[8].result = true;
                        } else {
                            tests[8].message = 'Stack One has ' + stack1.value + ' coins';
                        }

                        if(stack2.value === 0){
                            tests[9].message = 'Stack Two has 0 coins';
                            tests[9].result = true;
                        } else {
                            tests[9].message = 'Stack One has ' + stack2.value + ' coins';
                        }
                        
                    } else if(typeof stack1.transferCoins === 'function'){
                        tests[1].message = 'Found transferCoins method but not as a prototype'
                    }
                }
            }


            break;
        default:
            console.log('Unknown Test');
            break

    }

    addResultsToDom(tests);
}

function addResultsToDom(tests){
    var $table = $('.table tbody');

    $table.html('');

    for(var i = 0; i < tests.length; i++){
        var data = tests[i];
        
        var $num = $('<td>' + (i+1) + '</td>');
        var $result = $('<td>' + (data.result ? 'PASS' : 'FAIL') + '</td>');
        var $test = $('<td>' + data.test + '</td>');
        var $msg = $('<td>' + data.message + '</td>');

        var $row = $('<tr>', {
            class: data.result ? 'text-success' : 'text-danger'
        }).append($num, $result, $test, $msg);

        $table.append($row);
    }
}
