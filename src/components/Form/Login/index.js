import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../context";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
} from "../FormElements";

const Login = () => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    axios
      .post("http://localhost:8000/user/login", { email, password })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data);
        } else {
          setError("Something isn't working right please try again later");
        }
        setSubmitting(false);
      });
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Cosmic Bank</Icon>
          <FormContent>
            <Form action='#' onSubmit={formSubmitHandler}>
              <FormH1>Login to your account</FormH1>
              <Text>{error}</Text>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput
                type='email'
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput
                type='password'
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <FormButton type='submit' disabled={submitting}>
                {submitting ? "Loggin In..." : "Login"}
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Login;
