import React from 'react';
import Button from 'react-bootstrap/Button';
import { UserAuth } from '../context/AuthContext';


const navStyle = {

  "position": 'fixed',
  'display': 'flex',
  'align-items': 'center',
  'background': 'rgb(5, 1, 70)',
  "width": '100%',
  "height": '4.5rem',
  "box-shadow": "1px 13px 6px -5px rgba(0,0,0,0.75)",

}

const headingStyle = {

  "font-size": "50px",
  "max-width": "700px",
  "margin-left": "2rem",
  "color": "rgb(194, 199, 209)",

}


const Navbar = (props) => {

  const { resetLists, setShow } = props;

  const { logout } = UserAuth();

  const handleLogOut = async () => {
    await logout();
  }

  return (
    <div style={navStyle}>

      <h1 className="heading" style={headingStyle}>Things ToDo</h1>

      <Button onClick={() => setShow(true)} style={{ 'marginLeft': 'auto' }}>
        Add Task
      </Button>

      <Button onClick={() => resetLists()} style={{ 'margin': '0 1rem' }}>
        Reset List
      </Button>

      <Button onClick={handleLogOut} style={{ 'margin-right': '1rem' }} >
        Logout
      </Button>

    </div>
  )
}

export default Navbar