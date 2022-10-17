import "./checkout.scss";
import Header from "../../organisms/Header";
import ProductItem from "../../molecules/ProductItem/ProductItem";
import { Formik, Form, Field, useFormikContext } from "formik";
import { TextField } from "formik-mui";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useState, useEffect } from "react";
import moment from "moment";
import Footer from "../../molecules/Footer/Footer";

moment().format();
const DATA_TEST =
  localStorage.getItem("basket") !== null
    ? JSON.parse(localStorage.getItem("basket")).map((item, idx) => ({
        imgScr: "https://cf.shopee.vn/file/6aba1d32171c02c7e0c3d59a5f75fbb8",
        name: "Graystone vase",
        description: "A timeless ceramic vase with a tri color grey glaze.",
        color: "black",
        size: item.size,
        quantity: item.quantity,
        price: 85,
      }))
    : [];

const Checkout = () => {
  const [value, setValue] = useState(moment()); //state này lưu giá trị field ngày tháng
  const formik = useFormikContext();
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log(localStorage.getItem("basket"));
  }, []);
  return (
    <section className="checkout">
      <Header />
      <main className="body">
        <div className="body__product">
          {DATA_TEST.map((item, index) => (
            <ProductItem
              key={index}
              imgScr={item.imgScr}
              name={item.name}
              description={item.description}
              color={item.color}
              size={item.size}
              quantity={item.quantity}
              price={item.price}
            />
          ))}
        </div>

        {/* Formik dành cho MUI  */}
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            billing: "",
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
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form style={{ width: "100%" }}>
              <Grid spacing={2} container>
                <Grid item xs={6}>
                  <Field
                    label="First name"
                    component={TextField}
                    name="firstname"
                    type="text"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    label="Last name"
                    component={TextField}
                    name="lastname"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    label="Email"
                    component={TextField}
                    name="email"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    label="Phone number"
                    component={TextField}
                    name="phone"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
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
      <Footer />
    </section>
  );
};

export default Checkout;
