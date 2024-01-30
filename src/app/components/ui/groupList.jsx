import React from "react";
import PropTypes from "prop-types";

const GroupList = ({items, valueProperty, contentProperty}) => {
    const isArray = typeof items === "object" ? Object.values(items) : items;
    return (
        <ul className="list-group">
            {isArray.map(item => 
                <li 
                    key={item[valueProperty]} 
                    className="list-group-item"
                >
                    {item[contentProperty]}
                </li>)
            }
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};



GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired
};

export default GroupList;
