import React,{useState} from 'react';
import "./style.css";
import Menu from './MenuApi';
import MenuCard from './MenuCard';

const Restaurant = () => {
    const [menuData, setMemuData ] = useState(Menu);
    const filterItem = (category)=>{
        const UpdatedList = Menu.filter((elm)=>{
            return elm.category==category;

        });
        setMemuData(UpdatedList);
    }
   
  return (
    <>
    <nav className='navbar'>
        <div className='btn-group'>
            <button className='btn-group__item' onClick={()=>filterItem("breakfast")}>Breakfast</button>
            <button className='btn-group__item' onClick={()=>filterItem("lunch")}>Lunch</button>
            <button className='btn-group__item'onClick={()=>filterItem("evening")}>Evening</button>
            <button className='btn-group__item'onClick={()=>filterItem("dinner")}>Dinner</button>
            <button className='btn-group__item'onClick={()=>setMemuData(Menu)}>All</button>

        </div>

    </nav>
     <MenuCard menuData={menuData}/>;

    </>

  ) 

    

  
}

export default Restaurant
