import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

import db from "../firebase";
import "./Plans.css";

function Plans() {
  const [products, setProducts] = useState([]);
  const [subscription, setSubscription] = useState(null);

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((queryResult) => {
        const products = {};
        queryResult.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceDetails = await productDoc.ref.collection("prices").get();
          priceDetails.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          setSubscription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start:
              subscription.data().current_period_start.seconds,
          });
        });
      });
  }, [user.uid]);

  async function checkout(priceId) {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51M5Qs4KijYq5gBSIJ7JT9mQOk6L6xwuB52hFIs9orj79OiaFJf7uKo2OPFXrMm4znBWBx8bdgSR8amDzxHdvx7rO00OA09EzyB"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  }

  return (
    <div className="plans">
      {subscription && (
        <p>
          Renews on:{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);

        return (
          <div
            key={productId}
            className={`${
              isCurrentPackage && "plans__plan--disable"
            } plans__plan`}
          >
            <div className="plans__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button
              onClick={() =>
                !isCurrentPackage && checkout(productData.prices.priceId)
              }
            >
              {isCurrentPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;
