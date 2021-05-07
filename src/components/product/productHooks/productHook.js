import React, { useState, useEffect } from "react";
import firebase from "../../../firebase/firebase";

function useProduct() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .onSnapshot((snapshot) => {
        const product = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(product);
        setIsLoading(false);
      });
  }, []);

  return { products, isLoading };
}

export default useProduct;
