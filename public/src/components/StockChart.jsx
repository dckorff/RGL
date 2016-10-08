export default class StockChart extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'spy',
      data: []
    };
  }

  handleChangeSearchTerm(event){
    this.setState({searchTerm: event.target.value });
  }
    
  handleClickSearch(){
    var me = this;

    $.ajax({
      url: '/stock/' + this.state.searchTerm,
      //data: data,
      success: function(response){
        let jsonResponse = JSON.parse(response);
        //console.log(response);
        //console.log(response.chart.close);
        //console.log(response.chart.result[0].indicators.quote)
        let close = jsonResponse.chart.result[0].indicators.quote[0].close
        let times = jsonResponse.chart.result[0].timestamp
        let data = times.map(function(item, index){ return [item, close[index]]; });
        me.setState({data: data});
        //console.log(data);
        console.log(me.state.chart);
        //me.state.chart.series[0] = data;
        // me.state.chart.series[0].yData = close;
        // me.state.chart.series[0].xData = times;
        me.state.chart.series[0].setData(data);
        //me.state.chart.series[0].data.push(data);
        //this.setState({time: jsonResponse.chart.result[0].timestamp});
        //console.log(jsonResponse.chart.result[0].indicators.quote[0].close)

      },
      //dataType: dataType
    });

  }
    
    
  

  setElementReference(element){
    // console.log("setElementReference");
    // console.log(element);
    // console.log(this.state.myElement);

    if(!this.state.myElement){
      console.log("asdf");
      
      this.setState({myElement: element});

      //let myElement = $(element).highcharts('StockChart', {
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
      console.log("myElement");
      console.log(chart);
      $(window).resize(function(){
        //chart.redraw()
      });
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