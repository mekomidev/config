const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const fs = require('fs');

const buffer = Buffer.from('yahahah');

fs.open('./ciao.json', 'w+', '777', (err, fd) => {
  fs.write(fd, buffer, (err, written, buffer) => {
    console.log('done');
  });
  rl.question('u sure?', confirmation => {
    if(confirmation=='y') {console.log('okidoki'); rl.close();}
    else {console.log('sad'); rl.close();}
  });
});
