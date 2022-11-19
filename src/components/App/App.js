import { Table } from '../Table/table';
import './App.css';

function App() {
  return (
      <Table columnNames={['Product', 'Quantity', 'Price']} />
  );
}

export default App;
