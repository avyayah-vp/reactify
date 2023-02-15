import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

function Product() {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
            if (componentMounted) {
                setProduct(await response.json());
              setLoading(false);
            }}
          getProducts();
    }, [input])

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="500px" width= "500px"/>
                </div>
                <div className="col-md-6">
                    <h2 className='text-uppercase text-black-50'>
                        {product.category}
                    </h2>
                </div>
            </>
        )
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>

    </div>
  )
}

export default Product