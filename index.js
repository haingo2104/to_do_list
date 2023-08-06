import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'
import todoRoute from './routes/todoRoute.js'
import path from 'path'

const app = express()

app.use(expressEjsLayouts)
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.resolve('public')))
app.use('/', todoRoute)

app.listen(9000, ()=>{
    console.log("http://localhost:9000");
})