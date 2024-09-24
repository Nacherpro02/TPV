import { useState} from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddProd() {

    const notifySaved = () => toast.success("Saved");

    const [name, setName] = useState('')
    const [barCode, setBarCode] = useState('')
    const [price, setPrice] = useState('')
    const [provider, setProvider] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        const formData= {
            name: name,
            barCode: barCode,
            price: price,
            provider: provider
        }

        fetch('/api/products', {method: 'POST', headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData),}).then((response) => response.json()).then((data) => console.log('Data=', data))}
    return (
    <>
       
        <div>
            <h2>Registro de Producto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre del Producto:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
        </div>

        <div>
            <label htmlFor="codigoBarra">Código de Barra:</label>
            <input
                type="text"
                id="codigoBarra"
                value={barCode}
                onChange={(e) => setBarCode(e.target.value)}
                required
            />
        </div>

        <div>
            <label htmlFor="precio">Precio:</label>
            <input
                type="number"
                id="precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                step="0.01"
                required
            />
        </div>

        <div>
            <label htmlFor="proveedor">Proveedor:</label>
            <input
                type="text"
                id="proveedor"
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                required
            />
        </div>

        <div>
            <button type="submit" onClick={notifySaved}>Save</button>
            <ToastContainer />
        </div>
    </form>
    <div>
    <button onClick={notifySaved}>btn</button>
    <ToastContainer />
    </div>
</div>
</>
    )
}
export default AddProd