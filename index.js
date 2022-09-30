import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import Schema from './data/schema';
import resolvers from './data/resolvers'

const app = express();


app.get('/',(req,res)=>{
   res.send("learning graphql")
})


const root = resolvers

app.use('/graphql',graphqlHTTP({
    schema:Schema,
    rootValue:root,
    graphiql: true
}))

app.listen(8080,()=>console.log("running on",8080))