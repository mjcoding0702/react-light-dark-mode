import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import Form from "./Form";
import busImage from './assets/img/cover.png'
import ThemeContext from "./ThemeContext";
import CheckboxToggle from "./CheckboxToggle";
import "./App.css";

export default function App(){
  const [theme, setTheme] = useState('light');

  return (
    <>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Row className="mt-5 mx-5 border border-secondary rounded">
        <Form />
        <Col lg={6} className="d-none d-lg-flex justify-content-end bg-light rounded p-0">
          <img src={busImage} className="w-100"/>
        </Col>
      </Row>
      <CheckboxToggle />
    </ThemeContext.Provider>
    </>
  )
}