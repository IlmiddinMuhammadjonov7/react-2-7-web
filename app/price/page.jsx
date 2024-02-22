import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const page = () => {
  return (
    <div>
      <div className="prc"></div>
      <div className="price">
        <h1 className="price-two">Pricing</h1>
        <div className="price-one">
          <div className="price-three">
            <span className="price-four">Free Plan</span>
            <p className="price-five">
              Build and test using our core set of products with up to 100 API
              requests{" "}
            </p>
            <span className="price-six">$0.00</span>
            <hr className="price-seven"/>
            <ul className="price-eight">
              <li><IoMdCheckmark className="price-icon"/>Transactions</li>
              <li><IoMdCheckmark className="price-icon"/>Auth</li>
              <li><IoMdCheckmark className="price-icon"/>Identity</li>
              <li>Investments</li>
              <li>Assets</li>
              <li>Liabilities</li>
              <li>Income</li>
            </ul>
            <hr className="price-seven"/>
            <button className="price-nine">Request Access</button>
          </div>
          <div>
            <span className="price-four">Basic Plan</span>
            <p className="price-five">
              Launch your project with unlimited requests and no contractual
              minimums{" "}
            </p>
            <span className="price-six">$249.00</span>
            <hr className="price-seven"/>
            <ul className="price-eight">
              <li><IoMdCheckmark className="price-icon"/>Transactions</li>
              <li><IoMdCheckmark className="price-icon"/>Auth</li>
              <li><IoMdCheckmark className="price-icon"/>Identity</li>
              <li><IoMdCheckmark className="price-icon"/>Investments</li>
              <li><IoMdCheckmark className="price-icon"/>Assets</li>
              <li>Liabilities</li>
              <li>Income</li>
            </ul>
            <hr className="price-seven"/>
            <button className="price-nine">Request Access</button>
          </div>
          <div>
            <span className="price-four">Premium Plan</span>
            <p className="price-five">
              Get tailored solutions, volume pricing, and dedicated support for
              your team{" "}
            </p>
            <span className="price-six">$499.00</span>
            <hr className="price-seven"/>
            <ul className="price-eight">
              <li><IoMdCheckmark className="price-icon"/>Transactions</li>
              <li><IoMdCheckmark className="price-icon"/>Auth</li>
              <li><IoMdCheckmark className="price-icon"/>Identity</li>
              <li><IoMdCheckmark className="price-icon"/>Investments</li>
              <li><IoMdCheckmark className="price-icon"/>Assets</li>
              <li><IoMdCheckmark className="price-icon"/>Liabilities</li>
              <li><IoMdCheckmark className="price-icon"/>Income</li>
            </ul>
            <hr className="price-seven"/>
            <button className="price-nine">Request Access</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
