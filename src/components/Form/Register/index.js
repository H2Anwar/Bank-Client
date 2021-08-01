import React from "react";
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

const Register = () => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    axios
      .post("http://localhost:8000/user/register", {
        name: username,
        email,
        password,
      })
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
            <Form action='#' onSubmit={handleRegister}>
              <FormH1>Create new account</FormH1>
              <Text>{error}</Text>
              <FormLabel htmlFor='for'>UserName</FormLabel>
              <FormInput
                type='string'
                required
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
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
                {submitting ? "Registering..." : "Register"}
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Register;
