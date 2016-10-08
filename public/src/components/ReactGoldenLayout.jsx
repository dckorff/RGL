export default class ReactGoldenLayout extends React.Component {

  componentDidMount() {

    let config = {
      content: [
        {
          type: 'row',
          content:[
            {
            type:'react-component',
            component: 'test-component',
            props: { label: 'A' }
            },
            {
              type: 'column',
              content:[
                {
                  type:'react-component',
                  component: 'test-component',
                  props: { label: 'B' }
                },
                {
                  type:'react-component',
                  component: 'test-component',
                  props: { label: 'C' }
                }
              ]
            }
          ]
        }
      ]
    };
  
    var TestComponent = React.createClass({
      render: function() {
        return (<h1>{this.props.label}</h1>)
      }
    });

    let container = $('#GoldenLayout');
    
    let  myLayout = new GoldenLayout(config, container);

    myLayout.on('resize', function(){console.log("myLayout.On.Resize");console.log(arguments);})

    myLayout.registerComponent( 'test-component', TestComponent );

    // TODO: if there's only 1 child 'children' will be an object instead of an array
    this.registeredComponents = [];
    this.props.children.forEach(child => {
      
      if(this.registeredComponents.some((item) => {return item == child.type.name}) == false){
        myLayout.registerComponent(child.type.name, child.type);
        this.registeredComponents.push(child.type.name);
      }      

      myLayout.config.content[0].content.push({
        type: 'react-component',
        component: child.type.name,
        props: { label: 'test' }
      });

    });

    myLayout.init();

    $(window).resize(function(){
      myLayout.updateSize();
    });
    

  }

  render(){    
    return ( 
      <div style={{display:'inline-block', width: '100%', height: '100%'}} id="GoldenLayout"></div>
    )     
  }

}