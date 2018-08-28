import React from 'react';

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
    }
    render(){
        const menu = ["Home", "Profile", "Resume", "Github" ];
        return(
          <ul className = 'menu'>
            {menu.map((item)=>{
              return(
                <li
                    style= {item===this.state.selectedItem ? {color: '#d0021b'}: null}
                    onClick = {this.updateItem.bind(null,item)}
                    key = {item}>
                    {item}
                   
                </li>
              ) 
            })}
          </ul>
        );
    }
}

export default Menu;