import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({updatePokemon, poke}) {

  const initialState = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: '',
  }
  const [formData, setFormData]=useState(initialState)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    const newPoke = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }

    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(newPoke)
    })
    .then(resp => resp.json())
    .then(()=>updatePokemon(newPoke))

    setFormData(initialState)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            onChange={handleChange}
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name} />
          <Form.Input 
            onChange={handleChange}
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value = {formData.hp} />
          <Form.Input
            onChange={handleChange}
            value ={formData.frontUrl}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={handleChange}
            value ={formData.backUrl}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
