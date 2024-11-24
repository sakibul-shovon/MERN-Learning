import { useState } from "react";

export default function UserInput({onChange,userInput}) {
 


  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>
            Initial Invesment
            <input
              type="number"
              required
              value={userInput.initialInvesment}
              onChange={(event) =>
                onChange("initialInvesment", event.target.value)
              }
            />
          </label>
        </p>

        <p>
          <label>
            Annual Invesment
            <input
              type="number"
              required
              value={userInput.annualInvestment}
              onChange={(event) =>
                onChange("annualInvestment", event.target.value)
              }
            />
          </label>
        </p>

        <p>
          <label>
            Expected Return
            <input
              type="number"
              required
              value={userInput.expectedReturn}
              onChange={(event) =>
                onChange("expectedReturn", event.target.value)
              }
            />
          </label>
        </p>

        <p>
          <label>
            Duration
            <input
              type="number"
              required
              value={userInput.duration}
              onChange={(event) =>
                onChange("duration", event.target.value)
              }
            />
          </label>
        </p>
      </div>
    </section>
  );
}
