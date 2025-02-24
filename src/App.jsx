import { useState } from "react"

const list = [`Pane`, `Formaggio`, `Latte`]

function App() {

  const [items, setItems] = useState (list)
  const [newItem, setNewItem] = useState(``)

  const addItem =e => {
    e.preventDefault();
    const article = newItem.trim();
    setItems([...items, newItem])
    setNewItem(``)
    {/*const updateList = [... items, newItem];
    setItems(updateList) 

    Se lo scrivo in questo modo, nell'input mi rimane l'ultima cosa che ho aggiunto
    */}
  }

{/* Serve per non far ricaricare la pagina */}
 const handleSubmit = event => {
    event.preventDefault();
    console.log(items)
  }
 
  return (
    <>
      <h1>Lista di Articoli</h1>
   
      <p>Gli articoli da te inseriti sono:</p>

      {/* Lista dei Items*/}

      <ul>
          {items.map((element, index )=> (
            <li key={index}>{element}</li>
          ))}     
      </ul>
    
    {/* Evento submit */}

      <p>Inserisci un nuovo articolo:</p>
      <form onSubmit={addItem}>
        <input 
        type="text" 
        placeholder="Aggiungi articolo"
        value ={newItem}
        onChange={(e) => {setNewItem (e.target.value)}}>
        </input>
        <button>Invia</button>
      </form>
    </>
     
    )
}

export default App
