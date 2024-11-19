import produtosAvo from "./produtos.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get('/produtos', (req, res) => {
    res.status(200).send(produtosAvo);
});

app.listen(3000,()=>{console.log("rodando....")});
