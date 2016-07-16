import React, {
  Component,
  PropTypes
} from 'react';
import Title from 'components/title';
import { Navigation } from 'components/navigation';
import style from './style/app';

class App extends Component {
  render() {
    return (
      <div className={ style.app }>
        <Title title={ 'equilibrium' } />
        <Navigation />
        <div className={ style.appView }>
          { this.props.children }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default App;
