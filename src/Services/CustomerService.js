import axios from 'axios';

const CUSTOMER_API_BASE_URL = 'http://localhost:9095/customer';

class CustomerService{
    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL+'/getCustomers');
    }

    addCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL+'/Register',customer);
    }

    getCustomerById(customerId){
        return axios.get(CUSTOMER_API_BASE_URL + '/' + customerId);
    }

    updateCustomer(customer,customerId){
        return axios.put(CUSTOMER_API_BASE_URL + '/updateCustomer/' +customerId, customer)
    }

    deleteCustomer(customerId){
        return axios.delete(CUSTOMER_API_BASE_URL + '/delete/' +customerId);
    }
}

export default new CustomerService()