import RGLComponent from './RGLComponent.jsx';
import Giphy from './Giphy.jsx';
import StockChart from './StockChart.jsx';

export default class Header extends React.Component {

  render(){
    return (

      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li> 
                    <RGLComponent myLayout={this.props.myLayout}>
                      <Giphy />
                    </RGLComponent> 
                  </li>
                  <li> 
                    <RGLComponent myLayout={this.props.myLayout}>
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