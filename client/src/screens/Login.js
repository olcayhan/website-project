import React from "react";
import Form from "react-bootstrap/Form";
import { Button, Container, Col, Row } from "react-bootstrap";


export default function Login() {

    return (

        <Container className="authscreen mt-5">
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form onSubmit={(e) => {
                        e.preventDefault()
                    }}>
                        <Form.Group className='mb-3 mt-4 text-light' controlId='formBasicEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' />
                        </Form.Group>

                        <Form.Group className='mb-3 text-light' controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Password' />
                        </Form.Group>

                        <Form.Group className='d-grid'>
                            <Button type='submit' size="lg" >
                                Sign In
                            </Button>
                        </Form.Group>

                    </Form>
                </Col>
            </Row>
        </Container>
    )

}