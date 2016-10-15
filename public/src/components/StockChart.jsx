export default class StockChart extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      searchTerm: 'spy',
      elementId: "StockChart_" + new Date().getTime(),    
      data: []
    };
    
    this.props.glContainer.on( 'resize', this.resize.bind(this) );
  }

  componentDidMount(){

    let element = ReactDOM.findDOMNode(this.refs.chart);
    
    if(element){
      this.setElementReference(element);
    }

  }

  handleChangeSearchTerm(event){
    this.setState({searchTerm: event.target.value });
  }

  resize(){
    if(this.chart){
      this.chart.setSize(this.getChartWidth(), this.getChartHeight());
    }
  }

  getChartHeight(){
    let height = this.props.glContainer.height-35;
    return height;
  }

  getChartWidth(){
    return this.props.glContainer.width-15;
  }

  handleClickSearch(){
   
    var me = this;

    $.ajax({
      url: '/stock/' + this.state.searchTerm,
      success: function(response){
        let jsonResponse = JSON.parse(response);        
        
        let close = jsonResponse.chart.result[0].indicators.quote[0].close
        let times = jsonResponse.chart.result[0].timestamp
        let data = times.map(function(item, index){ return [item, close[index]]; });

        me.chart.series[0].setData(data);
        
      }
    });

  }

  setElementReference(element){

    element = this.refs.chart;

    let me = this;

    if(!this.state.myElement){
    
      let chart = new Highcharts.StockChart({
          chart: {
            renderTo: element,
            height: me.getChartHeight(),
            width: me.getChartWidth()
          },
          rangeSelector: {
            selected: 1
          },
          title: {
            text: ''
          },
          series: [{
            name: '',
            data: [],
            tooltip: {
                valueDecimals: 2
            }
          }]
      });
      this.chart = chart;
      this.setState({
        myElement: element
      }        
        ,this.handleClickSearch.bind(this)
      );
      
    }
    
  }

  render() {
    return (
      <div className="gl-control">
        <div className="form-inline">
          <input className="form-control" type="text" value={this.state.searchTerm} onChange={this.handleChangeSearchTerm.bind(this)} />
          <button className="btn btn-primary" onClick={this.handleClickSearch.bind(this)}>Search</button>
        </div>
        <div>
          <div ref="chart" id={this.state.elementId} ></div>
        </div>
      </div>
    );
  }

}