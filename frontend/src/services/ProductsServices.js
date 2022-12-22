/* import axios from "axios" //pour tconnecta lpartie backend
import http from "./http-common"

async function getAllProducts(){
        return await http.get("/products")
    }

    async function getProductsByid(id){
        return await http.get('/products/${id}')
    }

    async function DeleteProductsByid(id){
        return await http.delete('/products/${id}')
    }

const ProductsServices={getAllProducts,getProductsByid,DeleteProductsByid}

export default ProductsServices */
