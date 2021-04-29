import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../components/login/FormikControl";
import foto_login from "../images/foto-login.png";
import axiosInstance from "../axios";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar/Navbar";
import { FooterContainer } from "../components/footer/containers/footer";
import "../styles/login.css";
export default class Login extends Component {
  render() {
    const initialValues = {
      email: "",
      password: "",
    };

    const islogin = localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null;

    const validationSchema = Yup.object({
      email: Yup.string().email("email incorrecto").required("required"),
      password: Yup.string().required("required"),
    });

    let onSubmit = (values) => {
      axiosInstance
        .post(`token/`, {
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          localStorage.setItem("access_token", res.data.access);
          localStorage.setItem("refresh_token", res.data.refresh);
          axiosInstance.defaults.headers["Authorization"] =
            "JWT " + localStorage.getItem("access_token");

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Sesion iniciada",
          });
          //console.log(res);
          //console.log(res.data);
        })
        .then(() => {
          window.location = "http://localhost:3000/form";
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Usuario o contraseña invalido",
            text: "intenta nuevamente",
            timer: 2000,
            timerProgressBar: true,
          });
        });
    };

    return (
      <div className="container">
        <Navbar />
        <div className="caja-login">
          <div className="login-container">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                if (islogin) {
                  window.location = "/";
                } else {
                  return (
                    <Form>
                      <div className="img_div">
                        <h1 className="titulo"> Log In</h1>
                        <p>¡Es un gusto tenerte de vuelta!</p>
                      </div>

                      <div className="form_login">
                        <div className="email_login">
                          <FormikControl
                            control="input"
                            type="email"
                            label="Email"
                            name="email"
                          />
                        </div>
                        <div className="cont_login">
                          <FormikControl
                            control="input"
                            type="password"
                            label="Password"
                            name="password"
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn-login"
                          disabled={!formik.isValid}
                        >
                          Log-In
                        </button>
                      </div>
                    </Form>
                  );
                }
              }}
            </Formik>
          </div>
          <div className="login-info">
            <img className="foto-login" src={foto_login}></img>
          </div>
        </div>
        <FooterContainer />
      </div>
    );
  }
}
