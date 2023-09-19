/* eslint-disable max-len */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jobs from '../../../datas/previousJobs';
import newspaper from '../../../assets/img/journal.jpg';
import machine from '../../../assets/img/machine.jpg';
import drawing from '../../../assets/img/drawing.jpg';
import student from '../../../assets/img/student.jpg';
import notebook from '../../../assets/img/notebook.jpg';
import './styles.scss';

const PreviousJobs = () => (
  <div className="previousJobsContainer">
    <Row>
      <Col xs={12} md lg={6} className="textandimages">
        <h1 className="title1bis">Quelles ont été les études précédentes qui m'ont menée jusqu'ici ?</h1>
        <p className="presentation">Après une licence d'Histoire obtenue à l'Université Paris-Est de Marne-la-vallée en 2015, j'ai longtemps hésité concernant la suite de mes études : faire un doctorat en histoire ou devenir journaliste, ma vocation de jeunesse. J'ai laissé le destin décidé pour moi en ne postulant qu'à une seule école de journalisme, l'ISCPA Paris.</p>
        <p className="presentation mb-5">J'ai été reçue par l'école et je me suis donc lancée dans des études de journalisme. En 2016, à la fin de mon Master 1, j'ai obtenu un stage de 6 mois en tant que rédactrice beauté. Ce dernier s'est si bien passé que la rédactrice en chef m'a tout de suite proposé un emploi en CDI. Etant donné la difficulté du marché dans ce milieu, j'ai donc décidé de ne pas terminer mon Master 2 et de commencer dans la vie active au sein de la rédaction d'<em>Ohmymag.com</em>.</p>
        <div className="galery">
          <img
            alt="journal"
            src={newspaper}
            style={{
              backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '90%', height: 'auto', display: 'flex', marginLeft: '5%',
            }}
          />
          <img
            alt="machine à écrire"
            src={machine}
            style={{
              backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '90%', height: 'auto', display: 'flex', marginLeft: '5%', marginTop: '2em',
            }}
          />
          <img
            alt="carnet"
            src={notebook}
            style={{
              backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '90%', height: 'auto', display: 'flex', marginLeft: '5%', marginTop: '2em',
            }}
          />
          <img
            alt="étudiant"
            src={student}
            style={{
              backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '90%', height: 'auto', display: 'flex', marginLeft: '5%', marginTop: '2em',
            }}
          />
          <img
            alt="dessin"
            src={drawing}
            style={{
              backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width: '90%', height: 'auto', display: 'flex', marginLeft: '5%', marginTop: '2em',
            }}
          />
        </div>
      </Col>
      <Col xs={12} mg lg={6} className="frise-chronologique">
        {jobs.map((job) => (
          <div key={job.title} className="job">
            <div className="date">{job.date}</div>
            <div className="info">
              <h3 className="title">{job.title}</h3>
              <p className="description">{job.description}</p>
              <p className="contrat">{job.contrat}</p>
              <a className="url" href={job.url} target="u_blank">Découvrir l'entreprise</a>
            </div>
          </div>
        ))}
      </Col>
    </Row>
  </div>
);

export default PreviousJobs;
