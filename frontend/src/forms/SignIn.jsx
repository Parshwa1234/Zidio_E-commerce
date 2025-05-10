import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import signin_schema from "../schemas/signinSchema";

const SignIn = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signin_schema) });

  const submitForm = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(result.user));
        // Redirect to home page
        setIsLoggedIn(true);
        navigate('/');
      } else {
        setError(result.message || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred during login');
      console.error('Error:', error);
    }
  };

  return (
    <div className="box--form">
      <h2 className="text-[1.4rem] font-medium">Sign In</h2>
      {error && <p className="error--form">{error}</p>}
      <form className="inputs flex flex-col gap-4 mt-6" onSubmit={handleSubmit(submitForm)}>
        <div className="input_divs--form">
          <input
            type="email"
            name="email"
            id="email"
            className="input--form"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="error--form">{errors.email.message}</p>
          )}
        </div>
        <div className="input_divs--form">
          <input
            type="password"
            name="password"
            id="password"
            className="input--form"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p className="error--form">{errors.password.message}</p>
          )}
        </div>
        <button className="submit--form" type="submit">
          Login User
        </button>
      </form>
      <p className="text-neutral-400">
        Create a new account ?{" "}
        <Link to="/auth/sign-up" className="capitalize text-white">
          sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
