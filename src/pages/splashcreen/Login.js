/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { BiFastForwardCircle } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { Modal, Form } from 'antd';
import { toast } from 'react-toastify';
import { loginUser } from '../../actions/auth';
import 'antd/dist/antd.css';
import './login.css';

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
    dispatch(loginUser(data));
    history.push('/home');
    toast.success('Login');
  };

  const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        visible={visible}
        title="Log In"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form.validateFields().then((values) => {
            form.resetFields();
            onCreate(values);
          });
        }}
      >
        <form
          className="mx-1 mx-md-4"
          onSubmit={handleSubmit(onSubmit)}
          method="post"
        >
          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
            <div className="form-outline flex-fill mb-0">
              <input
                type="email"
                id="form3Example3c"
                className="form-control"
                placeholder="Email"
                required
                {...register('email', { required: true })}
              />
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-lock fa-lg me-3 fa-fw" />
            <div className="form-outline flex-fill mb-0">
              <input
                type="password"
                id="form3Example4c"
                className="form-control"
                placeholder="Password"
                required
                {...register('password', { required: true })}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button type="submit" className="btn btn-primary btn-lg">
              Login
            </button>
          </div>
        </form>
      </Modal>
    );
  };

  const CollectionsPage = () => {
    const [visible, setVisible] = useState(false);

    return (
      <div>
        <button
          type="button"
          className="login-btn"
          onClick={() => {
            setVisible(true);
          }}
        >
          <h3>Login</h3>
          <BiFastForwardCircle />
        </button>
        <CollectionCreateForm
          visible={visible}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </div>
    );
  };
  return (
    <div className="MainDiv">
      <div className="container">
        <CollectionsPage />
      </div>
    </div>
  );
};

export default Login;
