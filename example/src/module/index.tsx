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
} from 'namaste-framework'

const App = () => {
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
                        </CardActions>
                    </Card>
                </Column>
            </Row>
        </Container>
    )
}

export default App
