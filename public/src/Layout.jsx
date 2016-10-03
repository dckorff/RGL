import ReactGoldenLayout from './components/ReactGoldenLayout.jsx';
import Giphy from './components/Giphy.jsx';

export default class Layout extends React.Component {

  render(){
    return (
      <ReactGoldenLayout>
        <Giphy />
        <Giphy />
      </ReactGoldenLayout>
    );
  }

}

