import express from 'express';
import  mongoose  from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/signinroutes';
import cors from 'cors';

const app=express();
const PORT=4000;




app.get('/',(req,res)=>
res.send('hello world'+PORT));
//mmongoose
mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost/userdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}
);

//bodyparser

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//corssetup
app.use(cors());
routes(app);
app.get('/',(req,res)=>
res.send(req.body)
)

app.listen(PORT,()=>
console.log('server is running on port'+PORT)
);