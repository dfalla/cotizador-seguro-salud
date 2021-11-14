import React, { useState, useEffect } from "react";
import './ValidarDni.scss';
import Form from 'react-bootstrap/Form';
import { Button,Row,Col} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import * as actions from '../Store/Actions/CotizadorActions';
import { useNavigate } from 'react-router-dom';

const FormularioDni = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const redirect = () => {
        navigate('/Paso1')
      }

    const initBuscador = {
        "DNI" :"",
        "FechaNacimiento" :"",
        "Celular" :"",
        "ProteccionDatosPersonales" :"",
        "ProteccionEnvio" :"",

    }
    const [buscador, setProductName] = useState(initBuscador);

    useEffect(() => {
        obtenerdatospersona();
    }, []);

    
    const  submitSearch =  (event) => {
        event.preventDefault();
        obtenerdatospersona();
        redirect();
    }    
    const obtenerdatospersona = ()=>{
        dispatch(actions.listProducts(buscador));
    }

    const handleInputChange = (event) => {
        setProductName({
            ...buscador,
            [event.target.name]: event.target.value
        });
    }

    return (
        <>
            <Form onSubmit={submitSearch}>          

                <Row className="align-items-center">
                    <Form.Label className="formulario-titulo">Obtén tu <span className="formulario-titulo-seguro"> seguro ahora</span></Form.Label>            
                </Row>   

                <Row className="align-items-center">                        
                    <Form.Label className="formulario-subtitulo">Ingresa los datos para comenzar</Form.Label>

                </Row>             
   
                <Row  className="mb-3">
                    <Col > 
                        <Form.Select  column sm="2" 
                            required
                            name="DNI"
                            value='1'
                            defaultValue={'1'}
                            onChange={handleInputChange}  >        
                                <option value="2" selected>DNI</option>
                                <option value="3">Pasaporte</option>
                        </Form.Select>  
                    </Col>
                    <Col> 
                        <Form.Control  
                            required
                            column type="text" 
                            placeholder="Nro de Documento" />
                    </Col>
                </Row>    
                        
             
                <Row  className="mb-3">
                    <Col> 
                        <Form.Control type="date" 
                            required
                            name="FechaNacimiento"
                            onChange={handleInputChange} 
                            placeholder="Fecha de Nacimiento" />    
                    </Col>
                </Row>
                
                <Row  className="mb-3">
                    <Col> 
                        <Form.Control type="text"
                            required
                            name="Celular"
                            onChange={handleInputChange} 
                            placeholder="Celular" />    
                    </Col>
                </Row>

                <Row  className="mb-3">    
                    <Col>        
                        <Form.Check 
                            required
                            name="ProteccionDatosPersonales"
                            onChange={handleInputChange} 
                            label="Acepto la Política de Protección de Datos Personales y los términos y Condiciones" />
                    </Col> 
                </Row>       
                <Row  className="mb-3">    
                    <Col>        
                        <Form.Check                        
                            required
                            name="ProteccionEnvio"
                            onChange={handleInputChange} 
                            label="Acepto la Política de Protección de Envío" />
                    </Col> 
                </Row>    
                <Row  className="mb-3 justify-content-md-center">    
                    <Col>        
                        <Button variant="primary" type="submit" className="mb-2">
                            Comencemos
                        </Button>
                    </Col> 
                </Row>
            </Form>
            
        </>
    )
}

export default FormularioDni;