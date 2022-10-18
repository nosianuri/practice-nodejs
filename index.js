const events=require('events')
const eventEmitter= new events.EventEmitter()

//creating an event handler
const chitkarDibo=()=> {
    console.log('oi beta koi tui?? ami darai asi !!');
}

//assign the handlr into event
eventEmitter.on('scream',chitkarDibo).chitkarDibo

//firing the event
eventEmitter.emit('scream')

// --------------- Exploring File--------------------

// local module
// const other = require('./other')

// const res=other.substract(5,4)
// console.log(res);

// const http=require('http');
// // const url=require('url')
// const fs = require('fs')

// const server=http.createServer((req,res)=>{
//     if (req.url = '/') {
        // fs.readFile('data.txt',(err, data)=>{
        //     if (req.url = '/'){
        //         fs.readFile('data.txt',(err, data)=>{
        //             if(err){
        //                 res.write('Failed To Read Data !!!')
        //                 res.end()
        //             } else{
        //                 res.write(data)
        //                 res.end()
        //             }
        //         })
        //     }
        // })

        // const data=fs.readFileSync('data.txt')
        // res.write(data)
        // res.end()

    //     fs.writeFile('data.txt','Hello Node js !!!',(err)=>{
    //         if(err){
    //             res.write('Data failed to write')
    //             res.end()
    //         } else{
    //             res.write('data written successfully')
    //             res.end()
    //         }
    //     })
    // }


    // const address_url='http://localhost:5000/contact?name=nosia&country=bangladesh';

    // const parsed_url= url.parse(address_url,true)
    // const queryObject=parsed_url.host
    // console.log(queryObject);


    // if(req.url =='/'){
    //     res.writeHead(200,{'Content-Type':'text/html'})
    //     res.write('<p> This is Home Page </p>')
    //     res.end()
    // }

    // if(req.url =='/'){
    //     res.writeHead(200,{'Content-Type':'application/json'})
    //     res.write(JSON.stringify({course:"ACC"}))
    //     res.end()
    // }

    // if(req.url =='/contact'){
    //     res.writeHead(200,{'Content-Type':'text/html'})
    //     res.write('<p> This is Contact Page </p>')
    //     res.end()
    // }
    // if(req.url =='/about-us'){
    //     res.writeHead(200,{'Content-Type':'text/html'})
    //     res.write('<p> This is About Us Page </p>')
    //     res.end()
    // }

    // console.log(req.url)
    // res.end('hello node.js')
// })
// // console.log(url)
// const PORT=5000;
// server.listen(PORT)
// console.log(`server is running at ${PORT}`);

// -------------
//core modules
// const http = require('http');

//third party module-> underscore
// const _=require('underscore')


// const server = http.createServer(function(req, res){
//     // console.log(`server is running`);
// });
// server.listen(5000);

// const result=add(2,3)
// console.log(result);

// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name:'curly', age: 60}];

// const res = _.pluck(stooges, 'name');
// console.log(res);