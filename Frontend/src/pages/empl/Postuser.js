import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import './postuser.css';
import { useNavigate } from 'react-router-dom';


const Postuser = () => {

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        departement: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/employee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
            navigate('/');

            
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className='center-form'>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                    <Form.Control
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicDep">
                    <Form.Control
                        type="text"
                        name="department"
                        value={formData.dep}
                        onChange={handleChange}
                        placeholder="Department"
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default Postuser;