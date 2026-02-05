import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

export default function FormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: '',
    eventDate: '',
    consultationDate: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const required = ['fullName', 'phone', 'email', 'projectType', 'eventDate'];
    const missing = required.filter((field) => !formData[field].trim());
    return missing;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const missingFields = validateForm();
    
    if (missingFields.length > 0) {
      const fieldNames = {
        fullName: 'Full Name',
        phone: 'Phone Number',
        email: 'Email',
        projectType: 'Type of Project',
        eventDate: 'Event Date',
      };
      
      const missingNames = missingFields.map((f) => fieldNames[f]).join(', ');
      
      Swal.fire({
        target: '.form-modal', 
        title: 'Missing Information',
        text: `Please fill in: ${missingNames}`,
        icon: 'error',
        confirmButtonColor: '#D7B673',
        background: '#2A2F34',
        color: '#E9E4D8',
      });
      return;
    }

    setIsSubmitting(true);

   

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          project_type: formData.projectType,
          event_date: formData.eventDate,
          consultation_date: formData.consultationDate || 'Not specified',
          notes: formData.notes || 'No additional notes',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

 Swal.fire({
        target: '.form-modal',
        title: 'Request Submitted',
        text: 'Thank you — your booking request has been sent.',
        icon: 'success',
        confirmButtonColor: '#D7B673',
        background: '#2A2F34',
        color: '#E9E4D8',
      }).then(() => {
      
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          projectType: '',
          eventDate: '',
          consultationDate: '',
          notes: '',
        });
        onClose(); 
      });

      } catch (error) {
      console.error("EMAILJS ERROR:", error); // Keep this to see the full object in console

      Swal.fire({
        target: '.form-modal',
        title: 'Submission Failed',
        // FIX: Check for .text (EmailJS) AND .message (JavaScript/Network)
        text: `Error: ${error?.text || error?.message || 'Check your .env.local file and restart server'}`,
        icon: 'error',
        confirmButtonColor: '#D7B673',
        background: '#2A2F34',
        color: '#E9E4D8',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="form-modal-overlay" onClick={onClose}>
      <div className="form-modal" onClick={(e) => e.stopPropagation()}>
        <button className="form-modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <h2>Book Your Session</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name <span>*</span></label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Phone Number <span>*</span></label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label>Email <span>*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label>Type of Project <span>*</span></label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
            >
              <option value="">Select project type</option>
              <option value="wedding">Wedding</option>
              <option value="event">Event</option>
              <option value="corporate">Corporate</option>
              <option value="fashion">Fashion</option>
              <option value="product">Product</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="video-editing">Video Editing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Event Date <span>*</span></label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Preferred Consultation Date</label>
            <input
              type="date"
              name="consultationDate"
              value={formData.consultationDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Additional Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Tell us more about your project or any special requests..."
            />
          </div>

          <button 
            type="submit" 
            className="btn-primary form-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  );
}