import React from "react";
import PropTypes from "prop-types";

const LogOutBytton = ({ onlogout }) => {
    return (
        <button
            className="btn btn-primary"
            onChange={onlogout}
        > </button>
    );
};

LogOutBytton.propTypes = {
    onlogout: PropTypes.func
};

const MemoWithUseCallbackExample = (props) => {
    // eslint-disable-next-line no-unused-vars
    const handleLogout = () => {};
    return null;
};

export default MemoWithUseCallbackExample;
