import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: ''
    });
const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/find/${id}`);
                const result = await response.json();
                setFormData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/api/up/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error updating user:', error);
        }
        navigate('/');
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
                <Form.Group controlId="formBasicDepartment">
                    <Form.Control
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        placeholder="Department"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default UpdateUser;
