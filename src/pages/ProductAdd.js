import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

const ProductAdd = () => {
  const initialValues = { productName: "", unitPrice: undefined };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <KodlamaIoTextInput name="productName" placeholder="Ürün adı" />
          <KodlamaIoTextInput name="unitPrice" placeholder="Ürün fiyatı" />
          <Button color="green" type="submit">
            EKLE
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProductAdd;
