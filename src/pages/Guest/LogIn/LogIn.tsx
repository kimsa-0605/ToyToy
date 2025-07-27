import "./LogIn.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { AppDispatch, RootState } from '../../../store/store';
import { fetchAuth } from '../../../store/slices/authThunk.ts';
import { fetchUserByEmail } from '../../../features/users/slice/userThunks.ts';

export default function LogIn() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { loading } = useSelector((state: RootState) => state.auth);

  const pawPositions = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    top: Math.random() * 90 + 5,
    left: Math.random() * 90 + 5,
    rotation: Math.random() * 360,
    delay: Math.random() * 3,
    size: Math.random() * 8 + 16,
  }));

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('*Invalid email').required('*Required'),
      password: Yup.string().min(6, '*At least 6 characters').required('*Required'),
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
            toast.success('Login successful!');
            navigate('/');
          } else {
            throw new Error('Failed to load user info');
          }
        } else {
          throw new Error(payload?.message || 'Login failed! Invalid email or password');
        }
      } catch (error: any) {
        toast.error(error?.response?.data?.message || error.message || 'Invalid email or password');
      }
    },
  });

  return (
    <div className="login-container">
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
              <i className="fa-solid fa-paw"></i>
            </div>
          ))}

          <div className="image-container">
            <img
              src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png"
              alt="Login img"
              className="login-image"
            />
          </div>

          <form className="login-form" onSubmit={formik.handleSubmit}>
            <div className="form-header">
              <h2 className="form-title">Welcome Back!</h2>
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

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? 'Logging in...' : 'Log In'}
            </button>

            <div className="form-footer">
              <p className="footer-text">
                Don't have an account?{" "}
                <Link to="/register" className="footer-link">
                  Register for an account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}