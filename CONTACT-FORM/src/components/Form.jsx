import { useState } from 'react';
import '../assets/form.css';
import { CircleX } from 'lucide-react';

export default function Form() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    select: '',
    textarea: '',
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, select, textarea } = form;

    const newErrors = {};

    if (!name) {
      newErrors.nameError = 'Full name is required';
    }

    if (!email) {
      newErrors.emailError = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.emailError = 'Invalid Email';
    }

    if (!select) {
      newErrors.selectError = 'Make a Selection';
    }

    if (!textarea) {
      newErrors.textareaError = 'Write a message';
    }
    setError(newErrors);
  };

  return (
    <div className="Form-container">
      <div className="form-body">
        <div className="form-header ">
          <CircleX color="#e0e0e0" />
        </div>
        <h3 className="centered">Send Us A Message</h3>

        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="fullName"
            value={form.name}
            onChange={handleChange}
          />
          <p>{error.nameError}</p>
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={form.email}
            autoComplete="on"
          />
          <p>{error.emailError}</p>
          <br />
          <br />
          <select
            name="select"
            id="subject"
            onChange={handleChange}
            value={form.select}>
            <option value="I want to post" className='opt'>I want to post</option>
            <option value="I want to call" className='opt'>I want to call</option>
            <option value="React class is so intresting" className='opt'>React class is so intresting</option>
          </select>

          <p>{error.selectError}</p>
          <br />
          <br />
          <textarea
            name="textarea"
            id="message"
            cols="30"
            rows="6"
            placeholder="Your message here"
            onChange={handleChange}
            value={form.textarea}></textarea>
          <p>{error.textareaError}</p>
          <br />
          <button>Submit form</button>
        </form>
      </div>
    </div>
  );
}
