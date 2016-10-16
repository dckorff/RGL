

export default class RGLComponent extends React.Component {

  constructor(props) {

    super(props);
    
    this.state = { myElement: false };
  }

  setupGL(myElement){

    if(this.state.myElement || this.props.myLayout == null) { return; }    

    var newItemConfig = {
        title: this.props.children.props.title || this.props.children.type.name,
        type: 'react-component',
        component: this.props.children.type.name,
        componentName: 'RGLComponent',
        props: {}
    };
  
    myLayout.createDragSource(myElement, newItemConfig);
    this.setState({myElement: myElement});
  }

  render(){
    return (
      <a ref={this.setupGL.bind(this)} style={{cursor: 'pointer'}}>
        <span className="glyphicon glyphicon-move" style={{paddingRight: '5px'}} aria-hidden="true"></span>{this.props.title}
      </a>
    );

  }

}