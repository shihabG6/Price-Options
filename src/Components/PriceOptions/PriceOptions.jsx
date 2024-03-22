
import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const [memberships,setMembership]=useState([]);
  useEffect(()=>{
    fetch('gyem.json')
    .then(res=>res.json())
    .then(data=> setMembership(data))
  },[])
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
      {
        memberships.map(membership=><PriceOption membership={membership} key={membership.id}></PriceOption>)
      }
    </div>
  );
};

export default PriceOptions;