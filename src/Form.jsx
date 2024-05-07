import { useContext } from 'react';
import ThemeContext from './ThemeContext';
import { Button, Col } from 'react-bootstrap';

export default function Form() {
  const currentTheme = useContext(ThemeContext).theme;
  const setTheme = useContext(ThemeContext).setTheme;
  const updatedTheme = currentTheme === 'light' ? 'dark' : 'light'

  return (
      <Panel title="Welcome">
        <div className="d-flex justify-content-between gap-5 w-100">
          <CustomButton>Sign Up</CustomButton>
          <CustomButton>Login</CustomButton>
        </div>
        <Button className="w-100 px-2 py-3 fs-4 fw-bold border-0" style={{ backgroundColor: "#8366DB"}} onClick={()=> setTheme(updatedTheme)}>Toggle Theme</Button>
        <Footer/>
      </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext).theme;
  const className = 'panel-' + theme;

  return (
    <Col lg={6} className={"d-flex flex-column justify-content-center align-items-center px-5 py-4 gap-3 rounded " + className}>
      <h1 className="align-self-start" style={{fontSize: '64px' }}>{title}</h1>
      {children}
    </Col>
  )
}

function CustomButton({ children }) {
  const theme = useContext(ThemeContext).theme;
  const buttonColorClassName = 'button-' + theme;

  return (
    <button className={"w-100 fs-5 fw-bold border-0 py-2 rounded " + buttonColorClassName} >
      {children}
    </button>
  );
}

function Footer(){
  const theme = useContext(ThemeContext).theme;
  const lightThemeText = 'Thank you for visiting! Enjoy the light theme.'
  const darkThemeText = 'Thank you for visiting! Have a great time with the dark theme.'

  const text = theme === 'light' ? lightThemeText :darkThemeText;

  return (
    <>
      <p className="align-self-start fs-5 m-0">{text}</p>
    </>
  )
}



