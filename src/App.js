import {Row, Col} from 'react-bootstrap';
import Header from './components/Header';
import Hcard from './components/Hcard';

function App() {

  const intl = false;

  return (
    <div className="container py-5">
      <Row>
        <Col>
          <Header title="World Traveler" />
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Hcard 
            img="london-img.jpg"
            alt="London store front"
            caption="Register now"
            title="London, England"
            subtitle="April 15, 2020"
            text="Ut placet, inquam tum dicere exorsus est laborum et via procedat oratio quaerimus igitur, quid et caritatem, quae sine causa? quae fuerit causa, mox videro; interea hoc epicurus in culpa, qui blanditiis praesentium voluptatum adipiscendarum causa aut officiis debitis aut fugit, sed uti oratione perpetua."
            geo="international"
            geoStyle="intl-bg"
          />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Hcard 
            img="atlanta-img.png"
            alt="Downtown Atlanta"
            caption="Register Now"
            title="Atlanta, GA"
            subtitle="March 10, 2019"
            text="Torquatos nostros? quos tu paulo ante cum soluta nobis est."
            geo="domestic"
            geoStyle="domestic-bg"
            />
        </Col>
        <Col lg={6}>
          <Hcard 
            img="singapore-img.jpg"
            alt="Singapore water front"
            caption="3 Spots left!"
            title="Singapore"
            subtitle="February 15, 2020"
            text="Primum igitur, inquit, sic agam, ut aliquid ex eo delectu."
            geo="international"
            geoStyle="intl-bg"
            />
        </Col>
      </Row>

      <Row>
        <Col>
          <footer></footer>
        </Col>
      </Row>

    </div>
  );
}

export default App
