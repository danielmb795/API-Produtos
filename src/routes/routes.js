import {Router} from 'express';
import ProdService from '../services/serviceProdutos.js';

const router = Router();

router.get("/listar-produtos", async (req,res) => {
    const produtos = await ProdService.showAllProd();
    res.status(200).json(produtos)
});

router.get("/filtrar-stock", async (req,res) => {
    const stock = req.body;

    if(!stock){
        res.json({message: "Dados Vazos"})
    }

    const produtos = await ProdService.filterByStock(stock);
    res.status(200).json(produtos);
});

export default router;