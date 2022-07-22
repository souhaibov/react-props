import React from 'react'
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div>
        <h1 style={{cursor:'pointer'}} onClick={()=> props.handleName(props.fullName)}> Full Name: {props.fullName}</h1>
        <h2 style={{color:'red'}}>Bio: {props.bio}</h2>
        <h2 style={{backgroundColor:'turquoise',color:'black'}}>Profession: {props.profession}</h2>
        {props.children}
    </div>
  )
}
Profile.defaultProps={
    fullName:'default name' , bio:'default bio' , profession:'default profession'
}

Profile.propTypes = {
    anyProp: PropTypes.any,
    booleanProp: PropTypes.bool,
    numberProp: PropTypes.number,
    stringProp: PropTypes.string,
    functionProp: PropTypes.func
   };

export default Profile