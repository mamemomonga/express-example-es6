import express from 'express'

const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/hello',(req,res)=>{
	res.send('Hello World')
})

const serve_port=process.env.SERVE_PORT ? process.env.SERVE_PORT : 8888
console.log(`Listening on ${serve_port}`)
app.listen(serve_port)
