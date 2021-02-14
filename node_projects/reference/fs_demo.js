const fs = require('fs');
const path = require('path');


// Creating a folder

//fs.mkdir(path.join(__dirname, './test'), {},function(err){
//   if (err) throw err;
//    console.log("Folder created!");
//});



//console.log(path.join(__dirname, './test','./abc'));

// Writing text on the file
fs.writeFile(path.join(__dirname, './test','hello.txt'), 
    'Happy Bowling Day!',
    function(err) {
        if (err) throw err;
        console.log("Created a file and added text!");
    });

//Reading the file
fs.readFile(path.join(__dirname,'./test','hello.txt'),'utf-8',(err, data) => {
        if (err)
            throw err;
        console.log(data);
    });

