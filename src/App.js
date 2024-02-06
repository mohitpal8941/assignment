import './App.scss';
import FitnessComponent from './Components/FitnessComponent';
import { Container } from 'react-bootstrap';

const apiData = {
  heading: 'Your<br /> Fitness Tracker',
  list: [
    {name: 'Conencted Devices'},
    {name: 'Statistics'},
    {name: 'Statistics 2'},
    {name: 'Conencted Devices 2'},
    {name: 'Conencted Devices 3'}
  ],
  formHeading: 'Add Details', 
}

function App() {
  return (
    <Container>
      <FitnessComponent apiData={apiData} />
    </Container>
  );
}

export default App;
