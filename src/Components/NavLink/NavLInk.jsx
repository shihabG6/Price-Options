import PropTypes from 'prop-types'
const NavLInk = ({route}) => {
  return (
    <>
      <li className="hover:bg-gray-500 transition-all mb-4 md:mb-0 duration-500 p-4 rounded-lg md:rounded-none"><a href={route.path} >{route.name}</a></li>
    </>
  );
};
NavLInk.propTypes ={
  route:PropTypes.object.isRequired,
}
export default NavLInk;