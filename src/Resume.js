import React, { useState } from 'react';
import './resumeform.css';

const Resume = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');  
  const [summary, setSummary] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = 'Name not added';
    }
    if (!email) {
      errors.email = 'Email not added';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid Email';
    }
    if (!gender) {
      errors.gender = 'Gender not added';
    }
    if (!status) {
      errors.status = 'Current Status not added';
    }
    if (!summary) {
      errors.summary = 'Summary not added';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = {
        name,
        email,
        gender,
        status,
        summary,
      };

      try {
        const response = await fetch('http://localhost:5000/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Form data saved successfully');
        } else {
          console.error('Failed to save form data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className='main-container'>
      <h1 className='title'>Resume Submission Form</h1>
      <form className='form-container' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='form-label'>Name:*</label>
          <input
            type='text'
            className='input-field'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className='error-message'>{errors.name}</div>}
        </div>

        <div className='form-group'>
          <label className='form-label'>Email address:*</label>
          <input
            type='email'
            className='input-field'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className='error-message'>{errors.email}</div>}
        </div>

        <div className='form-group'>
          <label className='form-label'>Gender:*</label>
          <select
            className='input-field'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value=''>Select Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
          {errors.gender && <div className='error-message'>{errors.gender}</div>}
        </div>

        <div className='form-group'>
          <label className='form-label'>Status:*</label>
          <div className='radio-group'>
            <label className='radio-option'>
              <input
                type='radio'
                className='radio-input'
                value='Employed'
                checked={status === 'Employed'}
                onChange={(e) => setStatus(e.target.value)}
              />
              Employed
            </label>
            <label className='radio-option'>
              <input
                type='radio'
                className='radio-input'
                value='Student'
                checked={status === 'Student'}
                onChange={(e) => setStatus(e.target.value)}
              />
              Student
            </label>
            <label className='radio-option'>
              <input
                type='radio'
                className='radio-input'
                value='Unemployed'
                checked={status === 'Unemployed'}
                onChange={(e) => setStatus(e.target.value)}
              />
              Unemployed
            </label>
          </div>
          {errors.status && <div className='error-message'>{errors.status}</div>}
        </div>

        <div className='form-group'>
          <label className='form-label'>Summary:*</label>
          <input
            type='text'
            className='input-field'
            placeholder='Write a short Summary/Description of yourself'
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
          {errors.summary && <div className='error-message'>{errors.summary}</div>}
        </div>

        <button type='submit' className='submit-button'>
          Submit form
        </button>
      </form>
    </div>
  );
};

export default Resume;