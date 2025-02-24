import { useState } from "react"

const list = [`Pane`, `Latte`, `Formaggio`]

function App() {

  const [addArticle, setAddArticle] = useState (`Ciao`)
  const handleSubmit = event => {
    event.preventDefault();
    console.log(addArticle)
  }
 
  return (
    <>
      <h1>Lista di Articoli</h1>

      <p>Inserisci un nuovo articolo:</p>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value ={addArticle}
        onChange={e => {setAddArticle (e.target.value)} }>
        </input>
        <button>Invia</button>
      </form>

      <p>Gli articoli da te inseriti sono: {addArticle}</p>
    
    </>
     
    )
}

export default App
