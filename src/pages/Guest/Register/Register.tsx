import "./Register.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { AppDispatch, RootState } from '../../../store/store.ts';
import { fetchAuth } from '../../../store/slices/authThunk.ts';
import { fetchUserByEmail } from '../../../features/users/slice/userThunks.ts';
import { useMemo } from 'react';

export default function Register() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { loading } = useSelector((state: RootState) => state.auth);

  const pawPositions = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        top: Math.random() * 90 + 5,
        left: Math.random() * 90 + 5,
        rotation: Math.random() * 360,
        delay: Math.random() * 3,
        size: Math.random() * 8 + 16,
      })),
    []
  );

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required('*Required'),
      email: Yup.string().email('*Invalid email').required('*Required'),
      password: Yup.string().min(6, '*At least 6 characters').required('*Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], '*Passwords must match')
        .required('*Required'),
    }),
    onSubmit: async (values) => {
      try {
        const resultAction = await dispatch(fetchAuth(values));
        const payload: any = resultAction.payload;

        if (resultAction.type.endsWith('/fulfilled') && payload.token) {
          localStorage.setItem('token', payload.token);

          const userAction = await dispatch(fetchUserByEmail(values.email));

          if (userAction.type.endsWith('/fulfilled')) {
            localStorage.setItem('user', JSON.stringify(userAction.payload));
            localStorage.setItem('role', JSON.stringify(userAction.payload.role));
            toast.success('Register successful!');
            navigate('/');
          } else {
            throw new Error('Failed to load user info');
          }
        } else {
          throw new Error(payload?.message || 'Register failed! Invalid email or password');
        }
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
          error.message ||
          'Invalid email or password'
        );
      }
    },
  });

  return (
    <div className="register-container">
      <div className="form-wrapper">
        <div className="form-container">
          {pawPositions.map((paw) => (
            <div
              key={paw.id}
              className="paw-icon"
              style={{
                top: `${paw.top}%`,
                left: `${paw.left}%`,
                transform: `rotate(${paw.rotation}deg)`,
                animationDelay: `${paw.delay}s`,
                fontSize: `${paw.size}px`,
              }}
            >
              <i className="fa-solid fa-star"></i>
            </div>
          ))}

          <div className="image-container">
            <img
              src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png"
              alt="Register img"
              className="register-image"
            />
          </div>

          <form className="register-form" onSubmit={formik.handleSubmit}>
            <div className="form-header">
              <h2 className="form-title">Register</h2>
            </div>

            <div className="form-group">
              <label htmlFor="fullname" className="form-label">Full name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="form-input"
                placeholder="Enter your fullname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullname}
              />
              {formik.touched.fullname && formik.errors.fullname && (
                <div className="error-text">{formik.errors.fullname}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="error-text">{formik.errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="error-text">{formik.errors.password}</div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-input"
                placeholder="Enter your confirm password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className="error-text">{formik.errors.confirmPassword}</div>
              )}
            </div>

            <button type="submit" className="register-button" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </button>

            <div className="form-footer">
              <p className="footer-text">
                Already have an account?{" "}
                <Link to="/login" className="footer-link">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
