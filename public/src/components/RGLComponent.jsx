

export default class RGLComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { element: false };
  }

  setupGL(element){

    if(this.state.element || this.props.myLayout == null) { return; }    

    var newItemConfig = {
        title: "RGL Component Title",
        type: 'react-component',
        component: this.props.children.type.name,
        componentName: 'RGLComponent',
        props: {}
    };
  
    myLayout.createDragSource( element, newItemConfig );
    this.setState({element: element});
  }

  render(){
    return (
      <a ref={this.setupGL.bind(this)}>asdf</a>
    );

  }

}