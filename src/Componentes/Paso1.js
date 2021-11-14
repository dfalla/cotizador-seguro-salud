
import { useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Row,Col,Button} from 'react-bootstrap';
import AsidePaso from './AsidePaso';
import './Paso1.scss';

const Paso1 = () =>{  

    const persona = useSelector(store => store.persona);

    const submitSearch = () =>{



    }


    return (
        <>
            <Row>
                <Col>     
                    <AsidePaso></AsidePaso>
                </Col>
                <Col>
                    <Form onSubmit={submitSearch}>     

                        <Row  className="mb-3">
                            <Form.Label className="titulo-hola">Hola ,<span className="titulo-nombre"> {persona.nombres}</span></Form.Label>
                        </Row>
                        <Row  className="mb-3">
                            <Form.Label>Valida que los datos sean correctos</Form.Label>
                        </Row>
                        <Row  className="mb-3">
                            <Form.Label>Datos personales del titular</Form.Label>
                        </Row>
                        <Row  className="mb-3">
                            <Col > 
                                <Form.Select  column sm="2" 
                                readOnly 
                                name="DNI"
                                value={persona.tipoDocumento}
                                defaultValue={'1'} >        
                                    <option value="2" selected>DNI</option>
                                    <option value="3">Pasaporte</option>
                                </Form.Select>  
                            </Col>
                            <Col> 
                                <Form.Control 
                                readOnly 
                                column 
                                type="text" 
                                value={persona.numDocumento}
                                placeholder="Nro de Documento" />
                            </Col>
                        </Row> 
                        <Row className="mb-3">
                            <Col> 
                                <Form.Control 
                                readOnly 
                                column 
                                type="text" 
                                value={persona.nombres}
                                placeholder="Nro de Documento" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col> 
                                <Form.Control 
                                readOnly 
                                column 
                                type="text" 
                                value={persona.apellidoPaterno}
                                placeholder="Nro de Documento" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col> 
                                <Form.Control 
                                readOnly 
                                column 
                                type="text" 
                                value={persona.apellidoMaterno}
                                placeholder="Nro de Documento" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col> 
                                <Form.Control 
                                readOnly 
                                column 
                                type="text" 
                                value={persona.fecNacimiento}
                                placeholder="Fecha de nacimiento" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Form.Label>Género</Form.Label>
                            <Form.Check type="radio" name="sexo" value="M" label="Masculino" checked />
                            <Form.Check type="radio" name="sexo" value="F" label="Femenino"/>
                        </Row>
                        <Row className="mb-3">
                            <Form.Label>¿A quién vamos a asegurar?</Form.Label>
                            <Form.Check type="radio" name="AQuienAsegurar" value="S" label="solo a mí" checked/>
                            <Form.Check type="radio" name="AQuienAsegurar" value="F" label="A mí y ami familia"/>
                        </Row>
                        <Row  className="mb-3 justify-content-md-center">    
                            <Col>        
                                <Button variant="primary" type="submit" className="mb-2">
                                    Continuar
                                </Button>
                            </Col> 
                        </Row>
                    </Form>
                </Col>
            </Row>
        </>
    )
}


export default Paso1;