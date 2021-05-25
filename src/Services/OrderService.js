import axios from 'axios'

const Order_API_BASE_URL ="http://localhost:9095/order";

class OrderService {

    getOrders(){
        return axios.get(Order_API_BASE_URL);
    }
    
    addOrder(order, customerId, m_id){
        console.log(m_id)
        return axios.post(Order_API_BASE_URL + '/selectorder/' +customerId + '/' + m_id , order)
    }

    getOrderById(order_id){
        return axios.get(Order_API_BASE_URL + '/get/' + order_id);
    }

    getOrderByCustomerId(customerId){
        return axios.get(Order_API_BASE_URL + '/customer' + customerId);
    }

    updateOrder(order,order_id){
        return axios.put(Order_API_BASE_URL + '/update/' +order_id, order)
    }

    deleteOrder(order_id){
        return axios.delete(Order_API_BASE_URL + '/delete/' +order_id);
    }
}

export default new OrderService()