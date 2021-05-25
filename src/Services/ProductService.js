import axios from 'axios'
const Menu_API_BASE_URL ="http://localhost:9095/product";

class ProductService {

    getProduct(){
        return axios.get(Menu_API_BASE_URL);
    }

    addProduct(product){
        return axios.post(Menu_API_BASE_URL, product)
    }

    getProductById(productid){
        return axios.get(Menu_API_BASE_URL + '/' + productid);
    }

    updateProduct(product,productid){
        return axios.put(Menu_API_BASE_URL + '/updateProduct/' +productid, product)
    }

    deleteProduct(productid){
        return axios.delete(Menu_API_BASE_URL + '/delete/' +productid);
    }

}

export default new ProductService()