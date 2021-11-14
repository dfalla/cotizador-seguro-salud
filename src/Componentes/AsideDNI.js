import './AsideDNI.scss';
import {Container,Row ,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt,faMobileAlt,faAddressCard,faCrosshairs } from '@fortawesome/free-solid-svg-icons'

const AsideDNI =() =>{

    return(
        <>   
            <div id="aside-dni"  >
                <Container>
                    <Row className="justify-content-md-center">
                        <Col><h1 className="texto-seguro "> Seguro de</h1></Col>
                    </Row>
                    <h1 className="texto-salud">Salud</h1>
                    <ul >
                        <li><FontAwesomeIcon className='list-icon' icon={faShieldAlt} /> Cómpralo de manera fácil y rápida</li>
                        <li><FontAwesomeIcon className='list-icon' icon={faMobileAlt} /> Cotiza y compra tu seguro 100% digital</li>
                        <li><FontAwesomeIcon className='list-icon' icon={faAddressCard} /> Hasta S/.12 millones de cobertura anual</li>
                        <li><FontAwesomeIcon className='list-icon' icon={faCrosshairs} />Más de 300 clínicas en todo el Perú</li>
                    </ul>
                </Container>
            </div>            
        </>
    )
}

export default AsideDNI;