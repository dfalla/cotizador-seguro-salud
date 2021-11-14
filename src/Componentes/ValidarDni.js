import './ValidarDni.scss';
import  FormularioDni  from './FormularioDni.js';
import AsideDNI from './AsideDNI.js';
import { Row,Col } from 'react-bootstrap';


const ValidarDni = () =>{

    return (
        <>    
            <Row>          
                <Col> <AsideDNI></AsideDNI></Col>
                <Col> <FormularioDni></FormularioDni> </Col>
            </Row>            
        </>
    )
}

export default ValidarDni;