
// // const pwd = require('./pwd');


// // pwd();
// const ls = require('./ls')
// ls()
process.stdout.write("File > ");
process.stdin.on('data',(data) => 
{const files = data.toString().trim().split(' ')
const cat = require('./cat')
files.forEach(file => cat(file))
}
)




