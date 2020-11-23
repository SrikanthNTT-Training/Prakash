import React,{component} from 'react';
import Layout from './components/Layouts/Layout';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render(){ 
  return (
    <div>
      <layout>
          <BurgerBuilder/>
      </layout>
      
    </div>
  );
}
}
export default App;
