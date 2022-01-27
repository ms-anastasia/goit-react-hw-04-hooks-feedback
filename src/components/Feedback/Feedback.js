import React from "react";
import PropTypes from "prop-types";

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>
        Good:<span>{good}</span>
      </li>
      <li>
        Netral:<span>{neutral}</span>
      </li>
      <li>
        Bad:<span>{bad}</span>
      </li>
      <li>
        Total:<span>{total()}</span>
      </li>
      <li>
        Positive feedback:<span>{positivePercentage()}%</span>
      </li>
    </ul>
  );
};
Feedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
export default Feedback;
