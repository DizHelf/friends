import React from "react";
import Quality from "./quality";
import PropTypes from "prop-types";

const QualityList = ({ qualities }) => {

    return (
        <>
            {qualities.map((qual) => (
                <Quality {...qual} key={qual._id} />
            ))}
        </>
    );
};

QualityList.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default QualityList;
