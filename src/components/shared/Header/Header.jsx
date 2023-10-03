import React from 'react';
import logo from "../../../assets/logo.png";
import moment from 'moment';


const Header = () => {
    return (
        <div className="text-center mt-8 mb-4">
            <img className="mx-auto" src={logo} alt="image" />
            <h5 className="text-xl my-3">Journalism Without Fear or Favour</h5>
            <h5 className="text-xl"> {moment().format("dddd, MMMM D, YYYY")}</h5>
            <h5 className="text-xl"></h5>
        </div>
    );
};

export default Header;