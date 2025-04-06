"use client";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import { TbMailForward } from "react-icons/tb";
import 'react-toastify/dist/ReactToastify.css';

const ToastContainer = dynamic(
  () => import('react-toastify').then((mod) => mod.ToastContainer),
  { ssr: false }
);

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    errors: {
      name: "",
      email: "",
      message: "",
      submit: ""
    }
  });
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const importToast = async () => {
      const toastModule = await import('react-toastify');
      setToast(() => toastModule.toast);
      setIsClient(true);
    };

    importToast();
  }, []);

  const validateField = (name, value) => {
    switch(name) {
      case "name":
        return value.trim().length > 0 ? "" : "Name is required";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? "" : "Invalid email address";
      case "message":
        return value.trim().length > 0 ? "" : "Message is required";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setFormState(prev => ({
      ...prev,
      [name]: value,
      errors: {
        ...prev.errors,
        [name]: error,
        submit: ""
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const nameError = validateField("name", formState.name);
    const emailError = validateField("email", formState.email);
    const messageError = validateField("message", formState.message);

    if (nameError || emailError || messageError) {
      setFormState(prev => ({
        ...prev,
        errors: {
          name: nameError,
          email: emailError,
          message: messageError,
          submit: "Please correct the errors before submitting"
        }
      }));
      return;
    }

    setIsLoading(true);

    try {
      // Send contact form
      const contactResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message
        })
      });

      const contactData = await contactResponse.json();

      if (!contactResponse.ok) {
        throw new Error(contactData.message || "An unexpected error occurred");
      }

      if (toast) {
        toast.success(contactData.message || "Message sent successfully!");
      }
      
      // Reset form
      setFormState({
        name: "",
        email: "",
        message: "",
        errors: { name: "", email: "", message: "", submit: "" }
      });

    } catch (error) {
      if (toast) {
        const errorMessage = error.message || "An unexpected error occurred";
        
        setFormState(prev => ({
          ...prev,
          errors: { ...prev.errors, submit: errorMessage }
        }));

        toast.error(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isClient) return null;

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md mx-auto">
        {toast && <ToastContainer />}
        <p className="font-medium mb-6 text-[#16f2b3] text-xl uppercase text-center">Contact with me</p>
        <form 
          onSubmit={handleSubmit} 
          className="w-full text-white rounded-lg border border-[#464c6a] p-6 md:p-8 space-y-4"
        >
          <div>
            <label className="block mb-2 text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className={`w-full p-3 rounded bg-[#10172d] border text-sm ${formState.errors.name ? 'border-red-500' : 'border-[#353a52]'}`}
              placeholder="Enter your name"
            />
            {formState.errors.name && <p className="text-red-500 text-xs mt-1">{formState.errors.name}</p>}
          </div>

          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className={`w-full p-3 rounded bg-[#10172d] border text-sm ${formState.errors.email ? 'border-red-500' : 'border-[#353a52]'}`}
              placeholder="Enter your email"
            />
            {formState.errors.email && <p className="text-red-500 text-xs mt-1">{formState.errors.email}</p>}
          </div>

          <div>
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={4}
              className={`w-full p-3 rounded bg-[#10172d] border text-sm ${formState.errors.message ? 'border-red-500' : 'border-[#353a52]'}`}
              placeholder="Enter your message"
            />
            {formState.errors.message && <p className="text-red-500 text-xs mt-1">{formState.errors.message}</p>}
          </div>

          {formState.errors.submit && (
            <div className="text-red-500 text-center text-sm">
              {formState.errors.submit}
            </div>
          )}

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white px-4 py-3 rounded hover:opacity-90 text-sm transition-all duration-300"
          >
            {isLoading ? "Sending..." : "Send Message"}
            {!isLoading && <TbMailForward className="ml-2" />}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;