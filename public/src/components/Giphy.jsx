
export default class Giphy extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        searchTerm: 'cats',
        gifs: []
      };
     }

    handleChangeSearchTerm(event){
      this.setState({searchTerm: event.target.value });
    }
    
    handleClickSearch(){
      var me = this;
      $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?q=" + me.state.searchTerm + "&api_key=dc6zaTOxFJmzC",        
        success: function(data){ 
          me.setState({gifs:data.data.map(item => {return item.images.fixed_width.url})});
        }
      });
      
    }


    render() {

        return (
          <div className="gl-control">
            <div className="form-inline">
              <input className="form-control" type="text" value={this.state.searchTerm} onChange={this.handleChangeSearchTerm.bind(this)} />
              <button className="btn btn-primary" onClick={this.handleClickSearch.bind(this)}>Search</button>
            </div>
            <div>
              {this.state.gifs.map((gif) => {return <img key={gif} src={gif} /> })}
            </div>
          </div>
        );
    }
}


