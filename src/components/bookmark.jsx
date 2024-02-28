import React from "react";
import PropTypes from "prop-types";
import {SvgBookmark, SvgBookmarkActive} from "../svg";

const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            {status ? <SvgBookmarkActive/> : <SvgBookmark/>}
        </button>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool
};

export default BookMark;
