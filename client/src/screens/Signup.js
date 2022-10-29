import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"


export default function SignUpScreen() {



    return (
        <div className='signup-screen mt-5'>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form onSubmit={(e) => {
                        e.preventDefault()

                    }}>
                        <Form.Group className='mb-3 mt-4 text-light' controlId='formBasicEmail'>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type='text' placeholder='Enter name' />
                        </Form.Group>

                        <Form.Group className='mb-3 text-light' controlId='formBasicEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' />
                        </Form.Group>

                        <Form.Group className='mb-3 text-light' controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Password' />
                        </Form.Group>

                        <Form.Group className='mb-3 text-light' controlId='formBasicPassword'>
                            <Form.Label>Password Again</Form.Label>
                            <Form.Control type='password' placeholder='Enter password again' />
                        </Form.Group>

                        <Form.Group className='mb-3 text-light' controlId='formBasicPassword'>
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type='text' placeholder='Phone number' />
                        </Form.Group>

                        <Form.Group className='d-grid'>
                            <Button type='submit' variant='primary' size='lg'>
                                Sign Up
                            </Button>
                            <Form.Text className='text-center text-light mt-2'>
                                Do you have an Account ?
                                <Link to="/signin" className='little-signin'>Sign In</Link>
                            </Form.Text>

                        </Form.Group>

                    </Form>
                </Col>
            </Row>
        </div >
    )
}
