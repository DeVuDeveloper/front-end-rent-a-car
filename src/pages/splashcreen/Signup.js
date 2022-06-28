import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { BiFastForwardCircle } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Form } from 'antd';
import { signupUser } from '../../actions/auth';
import 'antd/dist/antd.css';
import './login.css';

const Signup = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    history.push('/home');
    setTimeout(() => {
      window.location.reload(true);
    }, 1400);
    dispatch(signupUser(data));
  };
  const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        visible={visible}
        title="Sign Up"
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
                type="name"
                id="form3Example3c"
                className="form-control"
                placeholder="Name"
                {...register('name', { required: true })}
              />
            </div>
          </div>
          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
            <div className="form-outline flex-fill mb-0">
              <input
                type="file"
                id="form3Example3c"
                className="form-control"
               
                {...register('file', { required: true })}
              />
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
            <div className="form-outline flex-fill mb-0">
              <input
                type="email"
                id="form3Example3c"
                className="form-control"
                placeholder="Email"
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
                {...register('password', { required: true })}
              />
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-key fa-lg me-3 fa-fw" />
            <div className="form-outline flex-fill mb-0">
              <input
                type="password"
                id="form3Example4cd"
                className="form-control"
                placeholder="Password Confirmation"
                {...register('password_confirmation', {
                  required: true,
                })}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button type="submit" className="btn btn-primary btn-lg">
              Register
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
          <h3>Signup</h3>
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

export default Signup;