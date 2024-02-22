import { Link } from "react-router-dom"
export const Item = ({ product }) => {
    return(
        
            <div className=" mx-auto border-gray-200 p-3 my-2  rounded-md shadow-sm hover:shadow-md  ">
                <Link to={`/product/${product.id}`}>
                    <img className="w-100" src={`../img/${product.img}`} alt={`Imagen de ${product.name}`} />
                    <div>
                        <h2 className="text-bold-800 text-black uppercase">{product.name} {product.capacity}</h2>
                        <h3 className="text-bold text-blue-500 capitalize">{product.category}</h3>
                        <p className="text-bold text-gray-500">Disponibles: {product.stock}</p>
                        <p className="text-bold text-gray-500">{product.price} $USD</p>
                    </div>
                </Link>
            </div>
        
    )
}