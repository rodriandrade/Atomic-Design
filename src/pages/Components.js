import React from 'react'
import { TracksCard, AboutCard, Container, Title, Input, Blockquote, Form, Inner, Nav, ParticlesBackground, Search, Header, Button, Paragraph, Col, Grid } from '../components/Index'

const Components = () => {

    return (
        <>
        <Inner>
            <Header />

            <Grid>
                <Col desktop={12} tablet={6} mobile={12}>
                    <h2>Blockquote</h2>
                    <Blockquote>Buenas, soy un blockquote</Blockquote>
                </Col>

                <Col desktop={12} tablet={6} mobile={12}>
                    <h2>Title</h2>
                    <Title primary={true} size="h1">Title H1</Title>
                    <Title primary={true} size="h2">Title H2</Title>
                    <Title primary={true} size="h3">Title H3</Title>
                    <Title primary={true} size="h4">Title H4</Title>
                </Col>

                <Col desktop={12} tablet={6} mobile={12}>
                    <h2>Subtitle</h2>
                    <Title primary={false} size="h3">Subtitle</Title>
                    <Title primary={false} size="h4">Subtitle 2</Title>
                </Col>

                <Col desktop={6} tablet={6} mobile={12}>
                    <h2>Paragraph</h2>
                    <Paragraph>
                    “Melody is the most important ingredient in trance,” he concludes, as his PR comes over to signal that our interview time is up. “In house it’s the groove, in techno it’s the techno sounds and dark atmosphere, but in trance it’s the melody — it’s the closest to classical music, and it’s always moved me. My heart will always be there.” 
                    </Paragraph>
                </Col>
                
                <Col desktop={8} tablet={6} mobile={12}>
                    <h2>Form</h2>
                    <Form></Form>
                </Col>

                <Col desktop={12} tablet={6} mobile={12}>
                    <h2>Button</h2>
                    <Button>Button</Button>
                </Col>

                <Col desktop={12} tablet={6} mobile={12}>
                    <h2>Input</h2>
                    <Input placeholder="Input"></Input>
                </Col>
                
                <Col desktop={12} tablet={6} mobile={12}>
                    <h2>About Card</h2>
                    <AboutCard
                        name="Title"
                        quote="Quote text"
                    />
                </Col>

            </Grid>

        </Inner>
        </>
    )
}

export default Components