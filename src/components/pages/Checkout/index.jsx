import { Button, Grid, OutlinedInput } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { doc, getDoc } from "firebase/firestore";
import { Field, Form, Formik, useFormikContext } from "formik";
import { TextField } from "formik-mui";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase/firebase-config";
import ProductItem from "../../molecules/ProductItem/ProductItem";
import Header from "../../organisms/Header";
import "./checkout.scss";

moment().format();

const Checkout = () => {
  const dataBasket = useSelector((state) => state.basket);
  const [accountInfo, setAccountInfo] = useState({
    fullname: "",
    age: 0,
    email: "",
    address: "",
    phonenumber: "",
    avatarId: "link",
  });
  const { cartItem, totalAmount, totalQuantity } = dataBasket;
  const [value, setValue] = useState(moment()); //state này lưu giá trị field ngày tháng
  const formik = useFormikContext();
  const navigate = useNavigate();
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      unSub();
      if (user) {
        const userRef = doc(db, "users", auth.currentUser.uid);
        const result = getDoc(userRef)
          .then((res) => setAccountInfo({ ...res.data() }))
          .catch((err) => console.log(err));
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <section className="checkout">
      <Header />
      <main className="body">
        <div className="body__product">
          <div>Quantities: {totalQuantity}</div>
          {cartItem.map((item) => (
            <ProductItem
              key={item.id}
              id={item.id}
              srcImg={item.srcImg}
              title={item.title}
              desc={item.desc}
              sizes={item.sizes}
              quantity={item.quantity}
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
          initialValues={{
            firstname: accountInfo.fullname.split(" ")[0],
            lastname: accountInfo.fullname.split(" ")[1],
            email: accountInfo.email,
            phone: accountInfo.phonenumber,
            billing: accountInfo.address,
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
          onSubmit={(values, actions) => {
            actions.setFieldValue(
              "expirydate",
              value.format("YYYY-MM-DD HH:mm:ss")
            );
            console.log(values.firstname);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form style={{ width: "100%" }}>
              <Grid spacing={2} container>
                <Grid item xs={6}>
                  <Field
                    value={
                      accountInfo.fullname.includes(" ")
                        ? accountInfo.fullname.split(" ")[0]
                        : accountInfo.fullname
                    }
                    label="First name"
                    component={TextField}
                    name="firstname"
                    type="text"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    value={
                      accountInfo.fullname.includes(" ")
                        ? accountInfo.fullname.split(" ")[1]
                        : ""
                    }
                    label="Last name"
                    component={TextField}
                    name="lastname"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    value={accountInfo.email}
                    label="Email"
                    component={TextField}
                    name="email"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    value={accountInfo.phonenumber}
                    label="Phone number"
                    component={TextField}
                    name="phone"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    value={accountInfo.address}
                    label="Billing address"
                    component={TextField}
                    name="billing"
                    type="text"
                  />
                </Grid>
                <Grid item xs={8}>
                  <Field
                    label="Card number"
                    component={TextField}
                    name="cardnumber"
                    type="text"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    label="CVC (3 digits)"
                    component={TextField}
                    name="cvc"
                    type="text"
                  />
                </Grid>
                <Grid item xs={3}>
                  <MobileDatePicker
                    label="Expiry date"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <OutlinedInput {...params} />}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Field
                    label="ZIP code"
                    component={TextField}
                    name="zip"
                    type="text"
                  />
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
