import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {

    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Ensaladas"
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
        const response = await axios.post(`${url}/api/food/add`,formData);
        if (response.data.success) {
            setData({
                name:"",
                description:"",
                price:"",
                category:"Ensaladas"
            })
            setImage(false)
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        }
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Subir Imagen</p>
                    <label htmlFor="image">
                        <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Nombre del Producto</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Escriba acá' />
                </div>
                <div className="add-product-description flex-col">
                    <p>Descripción del Producto</p>
                    <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Escribir contenido' required></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Categoría del Producto</p>
                        <select onChange={onChangeHandler} name="category">
                            <option value="Ensalada">Ensaladas</option>
                            <option value="Rollos">Rollos</option>
                            <option value="Postres">Postres</option>
                            <option value="Sandwich">Sandwiches</option>
                            <option value="Pasteles">Pasteles</option>
                            <option value="Vegetariano">Vegetariano</option>
                            <option value="Pasta">Pastas</option>
                            <option value="Fideos">Fideos</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Precio del Producto</p>
                        <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder='$20' />
                    </div>
                </div>
                <button type='submit' className='add-btn'>AGREGAR</button>
            </form>
        </div>
    )
}

export default Add