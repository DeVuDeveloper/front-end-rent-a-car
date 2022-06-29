import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { BiFastForwardCircle } from 'react-icons/bi';
import { Modal, Form } from 'antd';
import { signupUser } from '../../actions/auth';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './login.css';

const Signup = () => {
  const dispatch = useDispatch();
  const { register } = useForm();
  const history = useHistory();
  function formData(event) {
    const data = new FormData();
    data.append('user[name]', event.target.name.value);
    data.append('user[email]', event.target.email.value);
    data.append('user[password]', event.target.password.value);
    data.append('user[password_confirmation]', event.target.password_confirmation.value);
    if (event.target.image.files.length !== 0) data.append('user[image]', event.target.image.files[0]);
   return data;
  }

  const OnSubmit = async (event) => {
    event.preventDefault();
    const data = formData(event);
    const response = await dispatch(signupUser(data));
    if (response) event.target.reset();
    history.push('/home');
    toast.success('Signup');
    window.location.reload(true);
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
          onSubmit={(e) => OnSubmit(e)}
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
                required
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
                className="form-control file-user"
                required
                {...register('image', { required: true })}
              />
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
            <div className="form-outline flex-fill mb-0">
              <input
                required
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
                required
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