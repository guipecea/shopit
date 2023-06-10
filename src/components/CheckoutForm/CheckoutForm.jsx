import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react"

const CheckoutForm = ({ onConfirm }) => {

    const [ name , setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ email, setEmail ] = useState('')

    const handleSubmit = (event) => {
        
        event.preventDefault()

        const formData = {
            name, phone, email
        }        

        onConfirm(formData)               
    }

    return (
        <Form onSubmit={ handleSubmit }>
            <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text" onChange={ ({ target }) => setName(target.value) } placeholder="Ingrese su nombre completo" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCellphone">
                <Form.Label>Celular</Form.Label>
                <Form.Control type="numeric" onChange={ ({ target }) => setPhone(target.value) } placeholder="Ingrese un numero de contacto" />
            </Form.Group>            
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={ ({ target }) => setEmail(target.value) } placeholder="Ingrese su email" />
            </Form.Group>
            <Button type="submit">Crear Orden</Button>
        </Form>
    )
}

export default CheckoutForm