import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { emailValidator, passwordValidator } from './regexValidator';
import {useNavigate} from "react-router-dom"


    const Login = () => {
        const navigate = useNavigate()
    
        const [input, setInput] = React.useState({ email: '', password: '' });
    
        const [errorMessage, seterrorMessage] = React.useState('');
        const [successMessage, setsuccessMessage] = React.useState('');
    
        const handleChange = e => {
            setInput({ ...input, [e.target.name]: e.target.value });
        };
    
        React.useEffect(()=>{
            if(localStorage.getItem('auth')) navigate('/')
        },[])
    
        const formSubmitter = e => {
            e.preventDefault();
            setsuccessMessage('');
            if (!emailValidator(input.email)) return seterrorMessage('Please enter valid email id');
    
            if (!passwordValidator(input.password))
                return seterrorMessage(
                    'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
                );
            setsuccessMessage('Successfully Validated');
            if(input.email !== 'admin@a.com' || input.password !== 'Password@1') return seterrorMessage('Invalid email or password');
    
            navigate('/')
            localStorage.setItem('auth', true)
    
        };
  return (
    <Container fluid>
    <Form className='py-5' onSubmit={formSubmitter}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
							)}
        
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default Login;