
const { readFile } = require('fs');

// callback is a function
// callback is a error first function, since first arguments is error and second is data 
// promise is a success first function, first arg is resolve and second one is reject.
//functioms prefixed with the keyword "async" are asynchronous 
//we use await inside async functions only
//await waits until the promise is resolved

// stack
function fileReader(path) {
    // stack
    return new Promise((resolve, rejects) => {
        //Web API
        readFile(path, { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                return rejects(err);
            }
            return resolve(data)
        });

    });
}

async function print_data() {
    try {
        const res1 = await fileReader('one.txt');
        const res2 = await fileReader('two.txt');
        const res3 = await fileReader('three.txt');
        console.log({ res1, res2, res3 });
    }
    catch (err) {
        console.error(err);
    }
}

print_data();