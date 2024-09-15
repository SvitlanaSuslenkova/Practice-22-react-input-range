import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './TrialGot.css';

export default function TrialGot() {
  return (
    <div className="trial-got-div">
      <p className="signed-up">You have signed up for our 30-day trial!</p>
      <p className="we-are-happy">We are happy to work with you!</p>
      <Link to="..">
        <Button type="submit" text="Return" />
      </Link>
    </div>
  );
}
