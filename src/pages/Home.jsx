import { useState } from 'react';
import { Link } from 'react-router-dom';
import iconchecked from '../assets/icon-check.svg';
import { ChallengeBy } from '../components/ChallengeBy';
import { Button } from '../components/Button';
import { InputRange } from '../components/InputRange';
import { InputCheckbox } from '../components/InputCheckbox';

const PPM_FOR_1K_VIEWS = 16 / 100;
const YEAR_MONTHS_AFTER_DISCOUNT = 12 * (1 - 0.25);
const ADVANTAGES = [
  'Unlimited websites',
  '100% data ownership',
  'Email reports',
];

export const Home = () => {
  const [data, setData] = useState(100);
  const [isYear, setIsYear] = useState(false);

  const monthPrice = PPM_FOR_1K_VIEWS * data;
  const yearPrice = monthPrice * YEAR_MONTHS_AFTER_DISCOUNT;

  return (
    <>
      <header>
        <h2>Simple, traffic-based pricing</h2>
        <div>
          <p className="sign-up">Sign-up for our 30-day trial. </p>
          <p className="sign-up">No credit card required.</p>
        </div>
      </header>
      <div className="container">
        <form>
          <div className="views-and-price-div">
            <p className="page-views">
              <span className="views">{data}</span>k pageviews
            </p>
            <div className="input-and-views">
              <InputRange
                min="0"
                max="200"
                step="1"
                value={data}
                onChange={(e) => setData(Number(e.target.value))}
                style={{
                  background: `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${
                    data / 2
                  }%, hsl(224, 65%, 95%) ${
                    data / 2
                  }%, hsl(224, 65%, 95%) 100%)`,
                }}
              />
            </div>
            <h1>
              ${(isYear ? yearPrice : monthPrice).toFixed(2)}
              <span className="month-or-year">
                {' '}
                / {isYear ? 'year' : 'month'}
              </span>
            </h1>
          </div>
          <div className="billing-div">
            <span className="billing-span">Monthly Billing</span>
            <InputCheckbox
              id="yearon"
              htmlFor="yearon"
              onClick={() => setIsYear(!isYear)}
            />

            <span className="billing-span">Yearly Billing</span>
            <span className="discount-span">
              -25%<span className="discount-word"> discount</span>
            </span>
          </div>
          <div className="hr-line"></div>
          <div className="list-and-button-div">
            <ul className="advantages-list">
              {ADVANTAGES.map((advantage, index) => (
                <li key={index}>
                  <img
                    src={iconchecked}
                    className="icon-checked"
                    alt="icon checked"
                  />
                  {advantage}
                </li>
              ))}
            </ul>
            <div>
              <Link to={data !== 0 ? 'trial' : '#'}>
                <Button
                  type="submit"
                  text="Start my trial"
                  disabled={data == 0}
                />
              </Link>
            </div>
          </div>
        </form>
      </div>
      <ChallengeBy />
    </>
  );
};
