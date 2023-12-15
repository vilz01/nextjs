import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import haeLista from './haku';

export default async function Lista() {
  const data = await haeLista();

  return(
    <Table striped bordered size="sm" variant="dark">
      <thead>
        <tr>
          <th>Tunti</th>
          <th>Hinta</th>
        </tr>
      </thead>
      <tbody>
        {data.prices.map((item:any, index:any) => (
        <tr key={index}>
          <td>{moment(item.startDate).format("DD.MM HH:00")} - {moment(item.endDate).format("HH:00")}</td>
          <td>{item.price}</td>
        </tr>
        ))}
      </tbody>
    </Table>
  )
}