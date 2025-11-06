import e from "express";
import Produto from "../database/models/produtos.js";


const ProdService = {

    async showAllProd(){
        return await Produto.findAll()
    },

    async filterByStock(stock){
        if(!stock){
            return "Campo vazio"
        }

        try{
            const produtos = await Produto.findAll({
                where: {
                    stock: {
                        [Op.gte]: stock 
                    }
                },
                order: [['stock', 'DESC']]
            });
            
            return produtos;
            
        }catch(error){
            console.error(error);
            throw new Error('Erro ao filtrar por estoque');
        }
    },

    async registerProd({name, description, price, stock, category}){
        const NovoRegistro = await Produto.create({
            name: name,
            description, description,
            price: price,
            stock: stock,
            category: category
        })

        return NovoRegistro;
    },

    async alterProd(id, {name, description, price, stock, category}){
        try {
            const produto = await Produto.findByPk(id);
            
            if (!produto) {
                throw new Error('Produto não encontrado');
            }
            
            const produtoAtualizado = await produto.update({
                name: name,
                description: description,
                price: price,
                stock: stock,
                category: category
            });
            
            return produtoAtualizado;
            
        } catch (error) {
            console.error(error)
        }
    },

    async deletarProd(id){
        const produto = await Produto.destroy({
            where: {
                id : id
            }
        })
    }
    
}

export default ProdService