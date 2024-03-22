import PropTypes from 'prop-types';
import Featur from '../Featur/Featur';
const PriceOption = ({membership}) => {
  const {features,monthly_fee,type}
  =membership;
  
  // console.log(features)
  return (
    <div className='flex flex-col bg-blue-500 text-white p-4 rounded-xl text-center'>
      <h2>
        <span className='text-7xl font-bold'>{monthly_fee}</span>
        <span className='text-3xl'>/mon</span>
      </h2>
      <h3 className='my-6 text-2xl'>{type}</h3>
      
       <div className='flex-grow '>
       {features.map((featur,idx)=><Featur featur={featur} key={idx}></Featur>)}
       </div>
       <button className='w-full btn bg-green-500 border-none mt-4 text-xl'>Buy Now</button>
    </div>
  );
};
PriceOption.propTypes={
  membership:PropTypes.object.isRequired,
}
export default PriceOption;