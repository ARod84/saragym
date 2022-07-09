import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from '../../firebase/firebaseConfig'
// estilos
import '../../styles/home.css'

const Productos = () => {
  const [ productos, setProductos ] = useState([])

  useEffect(() => {
    const getProds = async () => {
    const prods = query(collection(db, 'items'), where("category", "==", "productos"))
    const docs = []

    const querySnapshot = await getDocs(prods)
    querySnapshot.forEach((doc) => {
       docs.push({...doc.data(), id: doc.id})
    })
    setProductos(docs)
    }
    getProds()
  }, [])

  return (
    <div className='flex justify-between'>
        {productos.map((p) => (
            <div className='basis-1/4' key={p.id}>
                <p>{p.nombre}</p>
                <p>{p.price} $USD</p>
            </div>
        ))}
    </div>
  )
}

export default Productos