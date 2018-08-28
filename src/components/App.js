import React from 'react';
import Menu from './Menu';
class App extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
   return (
     <div className='container'>
         <Menu />
     </div>
   )
  }
}

export default App;