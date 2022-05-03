import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap';

const Hcard = (props) => {

  return (
    <div>
      <Card className="mb-4 rounded-0 border-0">
        <Row className="align-items-center">
          <Col xl={6}>
            <Card.Img 
              src={`img/${props.img}`} 
              alt={props.alt}
              className="rounded-0"
            />
            <div className={`top-left text-small ${props.geoStyle}`}>
              <span>{ props.geo }</span>
            </div>
          </Col>

          <Col xl={6}>
            <Card.Body>
              <p className="text-uppercase text-small"> 
                {props.caption} 
              </p>

              <Card.Title>
                <h2>{props.title}</h2>
              </Card.Title>

              <Card.Subtitle>
                <p class="text-uppercase">
                  <b>{props.subtitle}</b>
                </p>
              </Card.Subtitle>

              <Card.Text>
                {props.text}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default Hcard
