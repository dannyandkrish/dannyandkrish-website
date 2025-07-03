// Form handling utilities and validation

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validateMinLength = (value, minLength) => {
  return value && value.length >= minLength;
};

export const validateMaxLength = (value, maxLength) => {
  return !value || value.length <= maxLength;
};

// Contact form validation
export const validateContactForm = (formData) => {
  const errors = {};

  if (!validateRequired(formData.name)) {
    errors.name = 'Name is required';
  }

  if (!validateRequired(formData.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!validateRequired(formData.subject)) {
    errors.subject = 'Subject is required';
  }

  if (!validateRequired(formData.message)) {
    errors.message = 'Message is required';
  } else if (!validateMinLength(formData.message, 10)) {
    errors.message = 'Message must be at least 10 characters long';
  } else if (!validateMaxLength(formData.message, 1000)) {
    errors.message = 'Message must be less than 1000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Newsletter subscription validation
export const validateNewsletterForm = (email) => {
  const errors = {};

  if (!validateRequired(email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Form submission handler
export const submitForm = async (url, data, method = 'POST') => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
};

// Sanitize input to prevent XSS
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Format form data for submission
export const formatFormData = (data) => {
  const formatted = {};
  
  Object.keys(data).forEach(key => {
    if (typeof data[key] === 'string') {
      formatted[key] = sanitizeInput(data[key].trim());
    } else {
      formatted[key] = data[key];
    }
  });
  
  return formatted;
};

// Debounce function for form validation
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Local storage helpers for form data
export const saveFormData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.warn('Could not save form data to localStorage:', error);
  }
};

export const loadFormData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.warn('Could not load form data from localStorage:', error);
    return null;
  }
};

export const clearFormData = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.warn('Could not clear form data from localStorage:', error);
  }
};
