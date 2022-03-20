import React from 'react'

const MenuCard = ({menuData}) => {
   
  return (
    <>
    <section className="main-card--cointainer">
  {menuData.map((elm)=>{
      return (
          <>
           

              <div className="card-container"  key={elm.id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{elm.id}</span>
                    <span className="card-author subtle">{elm.name}</span>
                    <h2 className="card-title"> {elm.name} </h2>
                    <span className="card-description subtle">
                    {elm.description}
                   
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                 
                   <img src={elm.image} alt="images" className="card-media" /> 
                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
             

          </>
      )

  })}

</section>
  
      
    </>
  )
}

export default MenuCard
