import TopBarChef from "../../components/topBarChef";
import Header from "../../components/Header";
import ApiChef  from "../../Utilities/ApiChef";
import { useState, useEffect } from "react";

const ChefOrder = () => {

  return (
   
    <div>
        <Header/>
         <TopBarChef/>
         <ApiChef/>
    </div>
  )
}

export default ChefOrder;
