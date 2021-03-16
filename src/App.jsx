import { Fragment } from 'react';
import { Contenedor } from './components/Contenedor/Contenedor';
import { Nav } from './components/nav/Nav';
import './styles/styles.scss';

const  App =() =>{
  return (
    <Fragment>

  <div>
<Nav/>
<Contenedor/>

</div>

    
    </Fragment>
  );
}

export default App;
