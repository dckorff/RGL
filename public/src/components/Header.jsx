import RGLComponent from './RGLComponent.jsx';
import Giphy from './Giphy.jsx';
import StockChart from './StockChart.jsx';

export default class Header extends React.Component {

  render(){
    return (

      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" style={{fontSize: '26px', padding: '11px 0px'}}>                
                  <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
                </a>
                <ul className="dropdown-menu">
                  <li> 
                    <RGLComponent title="Giphy Search" myLayout={this.props.myLayout}>
                      <Giphy />
                    </RGLComponent> 
                  </li>
                  <li> 
                    <RGLComponent title="Market Data" myLayout={this.props.myLayout}>
                      <StockChart />
                    </RGLComponent> 
                  </li>
                </ul>
              </li>
            </ul>          
          </div>
        </div>
      </nav>

    );
  }

}