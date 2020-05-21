import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'

export default function Product() {
    const { id } = useParams()
    const url = `https://5ec62ce05961a20016a9e140.mockapi.io/products/${id}`
    const [product, setProduct] = useState({
        loading:false,
        data:null,
        error:false,
    })
    let content = null

    useEffect(() => {
        setProduct({
            loading:true,
            data:null,
            error:false,
        })
    
        axios.get(url)
         .then(response => {
            setProduct({
                loading: false,
                data: response.data,
                error:false,
            })
                
         })
         .catch(()=> {
            setProduct({
                loading: false,
                data: null,
                error:true,
            })
         })
    }, [url])
    
if(product.loading){
    content = <Loader />
}

if(product.error){
    content = <p>
        There was an error please refresh or try again later.
    </p>

}

    if(product.data){
        content = 
        <div>
            <h1 className="font-bold">This is an element given by the API id: {product.data.id}, change the id in the url for another product</h1>
            <br />
            <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
            <img src={product.data.avatar}></img>
            <h1 className="text-2xl font-bold">Contact:</h1>
            <h1 className="text-2xl mb-3l">Cellphone: {product.data.cellphone}</h1>
            <h1 className="text-2xl  mb-3">Email: {product.data.email}</h1>
        </div>
}
    return(
        <div>
           {content}
        </div>
    )
}
