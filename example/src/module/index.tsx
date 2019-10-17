import React from 'react'
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
    SelectInput
} from 'namaste-framework'

const App = () => {
  const selectOptions = [
    {value: '1', label: 'Select 1'}, {value: '2', label: 'Select 2'}
  ]

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
              <Button shadow>Example</Button>
              <Button shadow view="primary">Example</Button>
              <Button shadow view="secondary">Example</Button>
              <Button view="disabled">Example</Button>
            </CardActions>
        </Card>
        </Column>
        <Column desktop={3}>
          <TextInput label="Kaixo" value="Example" />
        </Column>
        <Column desktop={3}>
          <SelectInput options={selectOptions} />
        </Column>
      </Row>
    </Container>
  )
}

export default App
