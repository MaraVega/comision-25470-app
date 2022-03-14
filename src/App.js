import React from 'react'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App () {
    return (
        <>
            <NavBar/>
            <ItemListContainer greeting="Bienvenidos a Libreria Eden"/>
            <ItemDetailContainer/>
        </>
    )
}

export default App