import { useState } from "react"

const list = [`Pane`, `Formaggio`, `Latte`]

function App() {

  const [addArticle, setAddArticle] = useState (list)
  const [newList, setNewList] = useState(``)

  const addItem =e => {
    e.preventDefault();
    const article = newList.trim();
    setAddArticle([...addArticle, newList])
    setNewList(``)
    {/*const updateList = [... addArticle, newList];
    setAddArticle(updateList) */}
  }


 const handleSubmit = event => {
    event.preventDefault();
    console.log(addArticle)
  }
 
  return (
    <>
      <h1>Lista di Articoli</h1>
   
      <p>Gli articoli da te inseriti sono: {addArticle}</p>

      {/* Lista dei Task*/}

      <ul>
          {addArticle.map((element, index )=> (
            <li key={index}>{element}</li>
          ))}     
      </ul>
    

      <p>Inserisci un nuovo articolo:</p>
      <form onSubmit={addItem}>
        <input 
        type="text" 
        value ={newList}
        onChange={(e) => {setAddArticle (e.target.value)} }>
        </input>
        <button>Invia</button>
      </form>
    </>
     
    )
}

export default App
