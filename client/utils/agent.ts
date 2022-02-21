import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { PaginatedResponse } from '../components/models/pagination';
import { store } from '../redux/store';
import { API } from '../config';

//const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

axios.defaults.baseURL = API;
axios.defaults.withCredentials = true;
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*' // for all requests
//axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true' // for all requests

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.request.use(config => {
    const token = store.getState().account.user?.token;
    // @ts-ignore: Object is possibly 'null'.
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
})

axios.interceptors.response.use(async response => {
    //debugger;
    // await sleep();
    const pagination = response.headers['pagination'];

    let test2 = response.data.constructor.name === "Array";

    //  console.log(`response: `, response.data)
    if (pagination && test2) {
        response.data = new PaginatedResponse(response.data, JSON.parse(pagination));

    }
    //console.log(`after ${i}: `, response.data);

    return response;
    //     const pagination = response.headers['pagination'];
    //     console.log('before: ',response.data)
    //     // let test = PaginatedResponse.prototype.isPrototypeOf(response.data); 
    //     let test = response.data.constructor.name === "PaginatedResponse";
    //     let test2 = response.data.constructor.name === "Array";
    //   //  console.log({test}, 'name: ',response.data.constructor.name)
    //     if (pagination && test2) {
    //         response.data = new PaginatedResponse(response.data, JSON.parse(pagination));
    //         //Object.freeze(response.data)
    //         //return response;
    //     }
    //     return response;


}, (error: AxiosError) => {
    const { data, status } = error.response!;
    //const router = useRouter();
    switch (status) {
        case 400:
            if (data.errors) {
                const modelStateErrors: string[] = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modelStateErrors.push(data.errors[key])
                    }
                }
                throw modelStateErrors.flat();
            }
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 403:
            toast.error('You are not allowed to do that!');
            break;
        case 500:
            window.location.href = "/server-error";
            break;
        default:
            break;
    }
    // console.log('router: ',Router);
    //router.push("/server-error")
    return Promise.reject(error.response)
})
const requests = {
    get: (url: string, params?: URLSearchParams) => axios.get(url, { params }).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
    postForm: (url:string, data: FormData) => axios.post(url,data,{
        headers:{'Content-type': 'multipart/form-data'}
    }).then(responseBody),
    putForm: (url:string, data: FormData) => axios.put(url,data,{
        headers:{'Content-type': 'multipart/form-data'}
    }).then(responseBody),
}

const createFormData = (item: any) => {
    let formData = new FormData();
    for (const key in item)
    {
        formData.append(key, item[key]);
    }
    return formData;
}

const Admin = {
    createProduct: (product:any) => requests.postForm('products', createFormData(product)),
    updateProduct: (product:any) => requests.putForm('products', createFormData(product)),
    deleteProduct: (id:number) => requests.delete(`products/${id}`)
}



const productList = {
    list: (params: URLSearchParams) => requests.get('products', params),
    details: (id: number) => requests.get(`products/${id}`),
    fetchFilters: () => requests.get('products/filters')

}

const Basket = {
    get: () => requests.get('basket'),
    addItem: (productId: number, quantity = 1) => requests.post(`basket?productId=${productId}&quantity=${quantity}`, {}),
    removeItem: (productId: number, quantity = 1) => requests.delete(`basket?productId=${productId}&quantity=${quantity}`)
}
const TestErrors = {
    get400Error: () => requests.get('buggy/bad-request'),
    get401Error: () => requests.get('buggy/unauthorised'),
    get404Error: () => requests.get('buggy/not-found'),
    get500Error: () => requests.get('buggy/server-error'),
    getValidationError: () => requests.get('buggy/validation-error'),
}

const Account = {
    login: (values: any) => requests.post('account/login', values),
    register: (values: any) => requests.post('account/register', values),
    currentUser: () => requests.get('account/currentUser'),
    fetchAddress: () => requests.get('account/savedAddress')
}

const Orders = {
    list: () => requests.get('orders'),
    fetch: (id: number) => requests.get(`orders/${id}`),
    create: (values: any) => requests.post('orders', values)
}

const Payments = {
    createPaymentIntent: () => requests.post('payments', {})

}
const agent = {
    productList,
    TestErrors,
    Basket,
    Account,
    Orders,
    Payments,
    Admin
}

export default agent;