/* eslint-disable max-len */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import MegAnim from '../../../assets/img/megAnim.png';
import './styles.scss';

const Home = () => (
  <Row className="homeContainer">
    <Col xs={12} mg lg={4} className="homeImage" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Card
        style={{
          width: '18rem', textAlign: 'center', color: 'white', backgroundColor: '#373741', marginBottom: '2em', boxShadow: '0px 0px 40px rgba(255, 255, 255, 0.3)',
        }}
      >
        <Card.Body>
          <Card.Title style={{ marginBottom: '0.5em', fontSize: '30px', color: 'white' }}>Mégane Baltzer</Card.Title>
          <div
            style={{
              display: 'flex', justifyContent: 'center', marginTop: '2em', backgroundColor: 'white', color: '#373741', borderRadius: '1em',
            }}
          >
            <Card.Text style={{ padding: '1.5em', fontSize: '0.9em' }} href="#">Développeuse web & web mobile spécialisée Front-end</Card.Text>
          </div>
        </Card.Body>
      </Card>
      <Image style={{ marginBottom: '3em' }} src={MegAnim} fluid />
    </Col>
    <Col xs={12} md lg={8} className="homeText">
      <h1>Qui suis-je ?</h1>
      <div style={{ borderTop: '0.5px solid #94A1C2' }} />
      <p className="presentation mb-3">A l'âge de 31 ans, je vis à Noisy-le-Grand, en région parisienne. Je suis en concubinage avec mon conjoint et depuis 2021, nous avons une petite fille.</p>
      <p className="presentation mt-3">Actuellement, je bénéficie de 8 ans d'expérience professionnelle dans le domaine du journalisme, de la communication, du webmarketing et des relations presse. Ces années m'ont permis d'avoir des compétences mais également de maîtriser des outils tels que Google Analytics, SemRush, etc, qui se sont révélés être nécessaires dans de nombreux domaines.</p>
      <p>En effet, mes 5 années en tant que journaliste m'ont permis de développer une aisance rédactionnelle et orale et une expertise en analyse du marché. Mon métier en tant que responsable communication et webmarketing a favorisé une approche plus commerciale  de mes compétences, en transformant l'audience médiatique en chiffre d'affaires. Pour y parvenir, j'ai travaillé sur plusieurs réseaux sociaux (Facebook Instagram, Linkedin, Pinterest ou encore les blogs) et des supports commerciaux tels que les newsletters. Ces deux expériences professionnelles ont également exigé des connaissances en matière de SEO afin de maximiser la visibilité des contenus.</p>
      <p>En 2018, j'ai créé mon entreprise afin de proposer mes services en tant que rédactrice mais également en tant qu'attachée de presse. En 2 ans d'activité, j'ai eu l'occasion de travailler pour deux entreprises. Ce statut d'auto-entrepreneur a favorisé une prise d'autonomie inévitable et très profitable pour l'ensemble de mes missions professionnelles.</p>
    </Col>
  </Row>
);

export default Home;
