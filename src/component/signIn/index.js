
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import '../../App.css';
import { SIGN_UP } from '../../constant/routes';
function SignIn() {
  return (
    <>
      <div className='heading item-center'>	<h1>SM STORE</h1></div>
      <div className="container main">
        <Form >
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="number" placeholder="Enter phone number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicOtp">
            <Form.Label>OTP</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <div><Button variant="primary" type="submit">
            LOG IN
          </Button></div>
          <div className='item-center'>New User? <Link to={SIGN_UP}>{' Sign up'}</Link></div>
        </Form>
      </div>
    </>
  );
}

export default SignIn;
