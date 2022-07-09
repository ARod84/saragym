import React, { useEffect, useState } from 'react'
import { collection, query, getDocs } from "firebase/firestore"
import { db } from '../firebase/firebaseConfig'
import Productos from './categorias/Productos'
import Dietas from './categorias/Dietas'
import Rutinas from './categorias/Rutinas'

// estilos
import '../styles/home.css'

const ItemList = () => {
  const [ categorias, setCategorias ] = useState([])

  useEffect(() => {
    const getCats = async () => {
    const cats = query(collection(db, 'categorias'))
    const docs = []

    const querySnapshot = await getDocs(cats)
    querySnapshot.forEach((doc) => {
       docs.push({...doc.data(), id: doc.id})
    })
    setCategorias(docs)
    }
    getCats()
  }, [])
  return (
    <div className='itemList'>
        <select id="cats">
            <option value="">Categorías</option>
            {categorias.map((cat) => (
                <option key={cat.id}>{cat.nombre}</option>
            ))}
        </select>
        <h3>Dietas</h3>
        <Dietas />
        <h3>Rutinas</h3>
        <Rutinas />
        <h3>Productos</h3>
        <Productos />
    </div>
  )
}

export default ItemList