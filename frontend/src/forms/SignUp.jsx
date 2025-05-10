import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import signup_schema from "../schemas/signupSchema";
import { useState } from "react";

const SignUp = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signup_schema) });

  const submitForm = async (data) => {
    setIsLoading(true);
    setError(null);
    
    try {
      console.log('Submitting form data:', data);
      
        const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Response data:', result);

      if (result.success) {
        localStorage.setItem('user', JSON.stringify(result.user));
        setIsLoggedIn(true);
        navigate('/');
      } else {
        if (result.errors) {
          const errorMessages = Object.values(result.errors).join(', ');
          setError(errorMessages);
        } else {
          setError(result.message || 'Signup failed');
        }
      }
    } catch (error) {
      console.error('Detailed error:', error);
      if (error.message.includes('Failed to fetch')) {
        setError('Cannot connect to the server. Please make sure the backend server is running.');
      } else {
        setError(`An error occurred during signup: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="box--form">
      <h2 className="text-[1.4rem] font-medium">Sign Up</h2>
      {error && (
        <div className="error--form mb-4 p-2 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      <form
        className="inputs flex flex-col gap-4 mt-6"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="input_divs--form">
          <input
            type="text"
            name="username"
            id="username"
            className="input--form"
            placeholder="User Name"
            {...register("username")}
            disabled={isLoading}
          />
          {errors.username && (
            <p className="error--form">{errors.username.message}</p>
          )}
        </div>
        <div className="input_divs--form">
          <input
            type="email"
            name="email"
            id="email"
            className="input--form"
            placeholder="Email"
            {...register("email")}
            disabled={isLoading}
          />
          {errors.email && (
            <p className="error--form">{errors.email.message}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="input_divs--form">
            <input
              type="password"
              name="password"
              id="password"
              className="input--form"
              placeholder="Password"
              {...register("password")}
              disabled={isLoading}
            />
            {errors.password && (
              <p className="error--form">{errors.password.message}</p>
            )}
          </div>
          <div className="input_divs--form">
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              className="input--form"
              placeholder="Confirm Password"
              {...register("confirm_password")}
              disabled={isLoading}
            />
            {errors.confirm_password && (
              <p className="error--form">{errors.confirm_password.message}</p>
            )}
          </div>
        </div>
        <button 
          className="submit--form" 
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register User'}
        </button>
      </form>

      <p className="text-neutral-400">
        Already have an account ?{" "}
        <Link to="/auth/sign-in" className="capitalize text-white">
          sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
