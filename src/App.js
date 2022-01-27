import { useState } from "react";

import Counter from "./components/Counter/Counter.styled";
import Section from "./components/Section/Section";
import Buttons from "./components/Buttons/Buttons";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackType = { good, neutral, bad };

  const onLeaveFeedback = (type) => {
    switch (type) {
      case "good":
        setGood((state) => state + 1);
        return;
      case "neutral":
        setNeutral((state) => state + 1);
        return;
      case "bad":
        setBad((state) => state + 1);
        return;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const PositiveFeedbackPercentage = Math.round((good * 100) / total);
    return PositiveFeedbackPercentage;
  };
  const total = countTotalFeedback();
  return (
    <Counter>
      <Section title={"Please leave feedback"}>
        <Buttons
          options={Object.keys(feedbackType)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={"Statistics"}>
        {total > 0 ? (
          <Feedback
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback!" />
        )}
      </Section>
    </Counter>
  );
}
