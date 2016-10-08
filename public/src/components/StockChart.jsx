export default class StockChart extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'spy',
      data: []
    };
    this.props.glContainer.on( 'resize', this.resize.bind(this) );
  }

  handleChangeSearchTerm(event){
    this.setState({searchTerm: event.target.value });
  }
  resize(){
    if(this.state.chart){
      this.state.chart.setSize(this.props.glContainer.width, this.props.glContainer.height);
    }
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
        me.setState({data: data});        
        me.state.chart.series[0].setData(data);
      },
    });

  }

  setElementReference(element){

    if(!this.state.myElement){
      
      this.setState({myElement: element});

      let chart = new Highcharts.Chart({
          chart: {
            renderTo: element,
            //defaultSeriesType: 'spline',
            // events: {
            //     load: this.requestData
            // }
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

      this.setState({chart: chart});
      
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
          <div id="container" ref={this.setElementReference.bind(this)} ></div>
        </div>
      </div>
    );
  }

}