import React from "react";
import { Component } from "react";

import Counter from './components/Counter/Counter.styled';
import Section from './components/Section/Section';
import Buttons from './components/Buttons/Buttons';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = (key) => {
    this.setState((prevState) => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };
  countPositiveFeedbackPercentage = () => {
    const PositiveFeedbackPercentage = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return PositiveFeedbackPercentage;
  };

  render() {
    const totalStats = this.countTotalFeedback();
    return (
      <Counter>
        <Section title={"Please leave feedback"}>
          <Buttons
            options={Object.keys(this.state)}
            onLeaveFeedback={this.increment}
          />
        </Section>
        <Section title={"Statistics"}>
          {totalStats > 0 ? (
            <Feedback
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
            ) : (
              <Notification message="There is no feedback!" />
              )}
        </Section>
      </Counter>
    );
  }
}

export default App;