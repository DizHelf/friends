import React from "react";
import PropTypes from "prop-types";

const Quality = (props) => {
    const { item } = props;
    return <span className={"badge m-1 bg-" + item.color}>{item.name}</span>;
};

export default Quality;
