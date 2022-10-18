const fs=require('fs')

const readstream=fs.createReadStream('./data.txt')

readstream.on('data', (chunk)=> {
    console.log('..............');
    console.log(chunk);
})

readstream.on('open',()=> {
    console.log('stream is open');
})

setTimeout(()=> {
    readstream.pause()
    console.log('streaming is pause now');
},15)

setTimeout(()=> {
    readstream.resume()
    console.log('stream is resume now');
},8000)