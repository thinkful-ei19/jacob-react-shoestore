import React from "react";

import './modal.css';

function createMarkup(val) {
    return {__html: val};
}

export default function Modal(props) {
    return (
      <div>
        <div className="current" dangerouslySetInnerHTML={ createMarkup(props.currProd) }></div>
        <button className="closeBtn" onClick={() => props.handle('')}>Close</button>
      </div>
    );
 }