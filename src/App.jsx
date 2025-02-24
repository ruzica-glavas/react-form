import { useState } from "react"

const list = [``]

function App() {

  const [addArticle, setAddArticle] = useState (`Ciao`)
 
  return (
    <>
      <h1>Lista di Articoli</h1>

      <p>Inserisci un nuovo articolo:</p>
      <input 
      type="text" 
      value ={addArticle}
      onChange={e => {setAddArticle (e.target.value)} }>
      </input>

      <p>Gli articoli da te inseriti sono: {addArticle}</p>
    
    </>
     
    )
}

export default App
