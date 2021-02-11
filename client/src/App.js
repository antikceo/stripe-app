import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";

import api from "./api";

//import "./App.css";

const stripePromise = api.getPublicStripeKey().then(key => loadStripe(key));

export default function App() {
  return (
    <div className="App">
      <div className="sr-root">
        <div className="sr-main">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
        </div>
    </div>
  );
}
