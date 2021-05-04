
const { readFile } = require('fs');

// callback is a function
// callback is a error first function, since first arguments is error and second is data 
// promise is a success first function, first arg is resolve and second one is reject.

// stack
function fileReader() {
    // stack
    return new Promise((resolve, rejects) => {
        //Web API
        readFile('./one.txt', { encoding: 'utf-8' }, (err, lol) => {
            if (err) {
                return rejects(err);
            }
            readFile('./two.txt', { encoding: 'utf-8' }, (saErr, sasa) => {
                if (saErr) {
                    return rejects(saErr);
                }
                readFile('./three.txt', { encoding: 'utf-8' }, (wErr, wData) => {
                    if (wErr) {
                        return rejects(wErr);
                    }
                     resolve({ lol, sasa, wData });
                });
            });
        });

    });
}

const res = fileReader();
res.then((data) => {
    console.log("File data: ", data);
}).catch((err) => {
    console.log("File not found at: ", err.path);
})