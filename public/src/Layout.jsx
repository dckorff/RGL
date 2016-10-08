import ReactGoldenLayout from './components/ReactGoldenLayout.jsx';
import Giphy from './components/Giphy.jsx';
import StockChart from './components/StockChart.jsx';

export default class Layout extends React.Component {

  render(){
    return (
      <ReactGoldenLayout>
        <Giphy />        
        <StockChart />
      </ReactGoldenLayout>
    );
  }

}

