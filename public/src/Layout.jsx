import Header from './components/Header.jsx';
import ReactGoldenLayout from './components/ReactGoldenLayout.jsx';
import Giphy from './components/Giphy.jsx';
import StockChart from './components/StockChart.jsx';

export default class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = { myLayout: null };
  }

  updateLayout(myLayout){
    console.log("updateLayout")
    console.log(myLayout);
    this.setState({myLayout: myLayout});
  }

  render(){
    return (
      <div>
        
        <Header myLayout={this.state.myLayout} />
        
        <div style={{display:'inline-block', position:'absolute', width:'100vw', height: 'calc(100vh - 54px)'}}>
          <ReactGoldenLayout myLayout={this.state.myLayout} updateLayout={this.updateLayout.bind(this)}>
            <Giphy />        
            <StockChart />
          </ReactGoldenLayout>
        </div>

      </div>


    );
  }

}

