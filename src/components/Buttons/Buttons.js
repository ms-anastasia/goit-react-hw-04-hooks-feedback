import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonBlock } from "./Buttons.styled";

const Buttons = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonBlock>
      {options.map((option, index) => (
        <Button key={index} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </ButtonBlock>
  );
};
Buttons.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};
export default Buttons;