import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import "./RegisterForm.css";

const initialForm = {
  email: "",
  password: "",
};
export default function RegisterForm() {
  const [form, setForm] = useState(initialForm);
  const { register } = useUser();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (email, password) => {
    if (!form.password && !form.email)
      return alert("You have to fill in the email and password fields ;)");
    register(email, password);
  };

  return (
    <section className="section-register">
      <h3>Register with email and password</h3>
      <form
        className="form-register"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(form.email, form.password);
        }}
      >
        <input
          onChange={handleChange}
          value={form.email}
          name="email"
          type="email"
          placeholder="insert you email..."
        />
        <input
          onChange={handleChange}
          value={form.password}
          name="password"
          type="password"
          placeholder="insert you password..."
        />
        <input type="submit" className="link" value="register" />
      </form>
    </section>
  );
}
