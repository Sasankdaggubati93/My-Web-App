import React from 'react';

import PropTypes from 'prop-types';

function SelectItem(props){
    const menu = ["Home", "Profile", "Resume", "Github" ];
    return (
        <ul className = 'menu'>
            {menu.map((item)=>{
              return(
                <li
                    style= {item===props.selectedItem ? {color: '#d0021b'}: null}
                    onClick = {props.updateItem.bind(null,item)}
                    key = {item}>
                    {item}
                    
                </li>
              ) 
            })}

          </ul>
    )
}
function redirectTo(item, link){
    if(item==='Resume'){
       var win = window.open(link,'_blank');
       win.focus();
    }
}
SelectItem.propTypes = {
    selectedItem : PropTypes.string.isRequired,
    updateItem : PropTypes.func.isRequired
}
class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedItem : 'Home'
        };
    this.updateItem = this.updateItem.bind(this);    
    }
    updateItem(item){
        this.setState(()=>{
            return{
                selectedItem : item
            }
            
        })
        redirectTo(item, "https://sasankdaggubati93.github.io/Resume/");
    }
    render(){

        return(
          <div>
              <SelectItem 
                selectedItem = {this.state.selectedItem}
                updateItem = {this.updateItem}
                /> 
                
                
          </div>      
        );
    }
}

export default Menu;