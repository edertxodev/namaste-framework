import React, { useState } from 'react'
import {
    Column,
    Row,
    Container,
    Card,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardImage,
    CardContent,
    CardActions,
    Button,
    TextInput,
    SelectInput,
    AnimatedButton
} from 'namaste-framework'

const App = () => {
  const [inputState, setInputState] = useState({ value: '', filledFromChild: false })
  const selectOptions = [
    {value: '1', label: 'Select 1'}, {value: '2', label: 'Select 2'}
  ]

  const handleInputChange = (e: any) => {
    console.log(e)
    const value = e.target.value
    setInputState({...inputState, value: value})
    console.log(inputState)
  }

  return (
    <Container>
      <Row>
        <Column desktop={6}>
            <Card shadow bordered>
              <CardHeader>
                <CardTitle>Kaixo</CardTitle>
                <CardSubtitle>Frogatxo bat da</CardSubtitle>
              </CardHeader>
              <CardImage src="https://psicologiaymente.com/media/Qd/Vq/Ow/QdVqOweqyD/namaste-significado/namaste-significado-social.jpg" />
              <CardContent>
                <p>Lorem fistrum papaar papaar benemeritaar se calle ustée ese que.</p>
              </CardContent>
              <CardActions>
                <Button shadow block>Example</Button>
                <Button shadow view="primary">Example</Button>
                <Button shadow view="secondary">Example</Button>
                <Button view="disabled">Example</Button>
              </CardActions>
          </Card>
        </Column>
        <Column desktop={3}>
          <TextInput label="Kaixo" value="Example" onChange={handleInputChange} />
        </Column>
        <Column desktop={3}>
          <SelectInput options={selectOptions} />
        </Column>
      </Row>
      <Row>
        <AnimatedButton>Click me!</AnimatedButton>
      </Row>
    </Container>
  )
}

export default App
