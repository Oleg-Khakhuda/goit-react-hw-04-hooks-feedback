import { useState } from 'react';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
import Statistics from './Feedback/Statistics/Statistics';
import Notification from './Feedback/Notification/Notification';
import Section from './Feedback/Section/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const nameBtn = { good, neutral, bad };

  const countTotalFeedback = () => {
    const total = Object.values(nameBtn);
    return total.reduce((acc, val) => (acc += val), 0);
    // return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const percent = Math.round((good / countTotalFeedback()) * 100);
    return percent;
  };

  const onLeaveFeedback = e => {
    const valueBtn = e.currentTarget.value;

    switch (valueBtn) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(nameBtn)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}
