const http = require('http')
const showDate = require('./my-module')
const calculator = require('./calculator')
const host = 'localhost'
const port = '9000'

const server = http.createServer((req, res)=> {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text-html')
    res.write('<h1>Hello, Welcome to my Page</h1>')
    res.write(showDate.myDate())
    res.write(req.url+'<p>')
    res.write('5 + 3 = ' + calculator.addition(5,3)+'</p>') 
    res.write('5 - 3 = ' + calculator.subtraction(5,3)+'</p>') 
    res.write('5 / 3 = ' + calculator.division(5,3)+'</p>')
    res.write('5 * 3 = ' + calculator.multiplication(5,3))
    res.end()
})

server.listen(port, host,() => {
    console.log(`Server running at http://${host}:${port}`) 
})