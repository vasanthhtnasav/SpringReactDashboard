import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/all');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handledel = async (employeeid) => {
        try{
            const response = await fetch(`http://localhost:8080/api/del/${employeeid}`, {method: 'DELETE'});
            setData(data.filter((item) => item.id !== employeeid));
            
        }
        catch (error) {
            console.error('Error fetching data:', error);

        }
    }
    const handleup = (id) => {
        navigate(`/employee/${id}`);
    }
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Dashboard</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.department}</td>
                            <td>
                            <Button variant="danger" onClick={() => handledel(item.id)}>Delete</Button>
                            <Button variant="primary" onClick={() => handleup(item.id)} >Edit</Button>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </Table>
          
        </div>
    );
};

export default Dashboard;