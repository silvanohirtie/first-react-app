import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import HelloWorld from '../components/HelloWorld'
import CounterExample from '../components/CounterExample'
import axios from 'axios'
import Loader from '../components/Loader'
import '../tailwind.css';

export default function Home() {
    let content = null
    const url = `https://5ec62ce05961a20016a9e140.mockapi.io/products?page=1&limit=4`
    const [products, setProducts] = useState({
        loading:false,
        data:null,
        error:false,
    })
    useEffect(() => {
        setProducts({
            loading:true,
            data:null,
            error:false,
        })
    
        axios.get(url)
         .then(response => {
            setProducts({
                loading: false,
                data: response.data,
                error:false,
            })
                
         })
         .catch(()=> {
            setProducts({
                loading: false,
                data: null,
                error:true,
            })
         })
    }, [url])
    
if(products.loading){
    content = <Loader />
}

if(products.error){
    content = <p>
        There was an error please refresh or try again later.
    </p>

}

    if(products.data){
        content = 
        products.data.map((product, key) => 
            <div className="flex flex-row">
            <div className="bg-gray-400 px-4 py-2 m-2 ">
            <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
            <img src={product.avatar}></img>
            <h1 className="text-2xl font-bold">Contact:</h1>
            <h1 className="text-2xl mb-3l">Cellphone: {product.cellphone}</h1>
            <h1 className="text-2xl  mb-3">Email: {product.email}</h1>
            </div>
            </div>
        )
}

    
    return (
        <div>
            <HelloWorld name="Silvano"/>
            <CounterExample />
            <h1 className="mt-5 text-center text-2xl font-bold">API People list:</h1>
            <div>
           {content}
        </div>
        </div>
    )
    
}
