/**
 * Check out page
 * file: (Checkout/) index.jsx
 */
import { Button, FormHelperText, Grid, OutlinedInput } from "@mui/material";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../contexts/auth-context";
import { auth, db } from "../../../firebase/firebase-config";
import ProductItem from "../../molecules/ProductItem/ProductItem";
import "./checkout.scss";

moment().format();

const Checkout = () => {
  const dataBasket = useSelector((state) => state.basket);
  const { userInfo } = useAuth();
  const location = useLocation();
  const [accountInfo, setAccountInfo] = useState();
  // const formikRef = useRef();
  const { cartItem, totalAmount, totalQuantity } = dataBasket;
  const [value, setValue] = useState(moment()); //state này lưu giá trị field ngày tháng
  const navigate = useNavigate();
  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const unSub = auth.onAuthStateChanged(async (user) => {
      unSub();
      if (user) {
        const userRef = doc(db, "users", auth.currentUser.uid);
        const result = await getDoc(userRef);
        setAccountInfo(result.data());
        // const result = getDoc(userRef)
        //   .then((res) => setAccountInfo({ ...res.data() }))
        //   .catch((err) => console.log(err));
      } else {
        navigate("/");
      }
    });
  });

  return (
    <section className="checkout">
      {/* <Header /> */}
      <main className="body">
        <div className="body__product">
          <div>Quantities: {totalQuantity}</div>
          {cartItem.map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              image={item.image}
              category={item.category}
              desc={item.description}
              sizes={item.sizes}
              color={item.color}
              quantity={item.quantity}
              stock={item.stock}
              price={item.price}
              totalPrice={item.totalPrice}
              productId={item.productId}
              fromBasket={false}
            />
          ))}

          <div style={{ alignSelf: "flex-end" }}>
            Subtotal:{" "}
            {totalAmount.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>

        {/* Formik dành cho MUI  */}
        <Formik
          // ref={(ref) => (formikRef.current = ref)}
          initialValues={{
            firstname:
              accountInfo?.fullname.split(" ").length > 1
                ? accountInfo?.fullname.split(" ")[0]
                : accountInfo?.fullname,
            lastname:
              accountInfo?.fullname.split(" ").length > 1
                ? accountInfo.fullname.split(" ")[1]
                : "",
            email: accountInfo?.email,
            phone: accountInfo?.phonenumber,
            billing: accountInfo?.address,
            cardnumber: "",
            cvc: "",
            expirydate: "",
            zip: "",
          }}
          validate={(values) => {
            const errors = {};
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (values.cvc.length > 3) {
              errors.cvc = "Invalid CVC";
            }
            if (values.phone.length !== 10) {
              errors.phone = "Invalid phone number";
            }
            return errors;
          }}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            // console.log(value.format("DD/MM/YYYY"));
            let date = value.format("DD/MM/YYYY").split("/")[0];
            switch (value.format("DD/MM/YYYY").split("/")[1]) {
              case "1":
                date += "-Jan-";
                break;
              case "2":
                date += "-Feb-";
                break;
              case "3":
                date += "-Mar-";
                break;
              case "4":
                date += "-Apr-";
                break;
              case "5":
                date += "-May-";
                break;
              case "6":
                date += "-Jun-";
                break;
              case "7":
                date += "-Jul-";
                break;
              case "8":
                date += "-Aug-";
                break;
              case "9":
                date += "-Sep-";
                break;
              case "10":
                date += "-Oct-";
                break;
              case "11":
                date += "-Nov-";
                break;
              case "12":
                date += "-Dec-";
                break;
            }
            date += value.format("DD/MM/YYYY").split("/")[2];
            const data = await addDoc(collection(db, "listOrdered"), {
              Total: totalAmount,
              orderAddress: values.billing,
              orderDate: date,
              orderStatus: "Pending",
              productInfo: cartItem.map((item) => ({
                productId: item.id,
                productQuantities: item.quantity,
              })),
              shippingTotal: 30000,
              subTotal: 0,
              userId: userInfo.id,
            });
            //update field id của document bằng cái id được firestore tự động tạo
            const docRef = doc(db, "listOrdered", data.id);
            await updateDoc(docRef, {
              id: data.id,
            });

            toast.success("Your order has been confirm!!");
            navigate("/products");
          }}
        >
          {({ submitForm, handleChange, values }) => (
            <Form style={{ width: "100%" }}>
              <Grid spacing={2} container>
                <Grid item xs={6}>
                  <Field
                    value={values.firstname}
                    // label="First name"
                    onChange={handleChange}
                    component={TextField}
                    name="firstname"
                    type="text"
                  />
                  <Field component={FormHelperText}>First name</Field>
                </Grid>
                <Grid item xs={6}>
                  <Field
                    value={values.lastname}
                    label="Last name"
                    onChange={handleChange}
                    component={TextField}
                    name="lastname"
                    type="text"
                  />
                  <Field component={FormHelperText}>Last name</Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    value={values.email}
                    onChange={handleChange}
                    component={TextField}
                    name="email"
                    type="email"
                  />
                  <Field component={FormHelperText}>Email</Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    value={values.phone}
                    onChange={handleChange}
                    component={TextField}
                    name="phone"
                    type="text"
                  />
                  <Field component={FormHelperText}>Phone number</Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    value={values.billing}
                    onChange={handleChange}
                    component={TextField}
                    name="billing"
                    type="text"
                  />
                  <Field component={FormHelperText}>Billing address</Field>
                </Grid>
                <Grid item xs={8}>
                  <Field component={TextField} name="cardnumber" type="text" />
                  <Field component={FormHelperText}>Card number</Field>
                </Grid>
                <Grid item xs={4}>
                  <Field component={TextField} name="cvc" type="text" />
                  <Field component={FormHelperText}>CVC (3 digit)</Field>
                </Grid>
                <Grid item xs={3}>
                  <MobileDatePicker
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleDateChange}
                    renderInput={(params) => <OutlinedInput {...params} />}
                  />
                  <Field component={FormHelperText}>Expiry date</Field>
                </Grid>
                <Grid item xs={9}>
                  <Field component={TextField} name="zip" type="text" />
                  <Field component={FormHelperText}>ZIP code</Field>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={submitForm}
                    variant="contained"
                    color="primary"
                  >
                    Confirm payment
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </main>
    </section>
  );
};

export default Checkout;
