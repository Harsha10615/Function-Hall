/**
 * Form Validation Utilities for Booking Enquiry
 */

export function validateBookingForm(formData) {
  const errors = {};
  const todayStr = new Date().toISOString().split('T')[0];

  // Validate Customer Name
  if (!formData.customerName || !formData.customerName.trim()) {
    errors.customerName = 'Please enter your full name';
  } else if (formData.customerName.trim().length < 2) {
    errors.customerName = 'Name must be at least 2 characters';
  }

  // Validate Phone Number
  const cleanPhone = (formData.phoneNumber || '').replace(/\D/g, '');
  if (!formData.phoneNumber || !formData.phoneNumber.trim()) {
    errors.phoneNumber = 'Please enter your phone number';
  } else if (cleanPhone.length < 10) {
    errors.phoneNumber = 'Please enter a valid 10-digit phone number';
  }

  // Validate Function Type
  if (!formData.functionType) {
    errors.functionType = 'Please select a function type';
  }

  // Validate Function Date
  if (!formData.functionDate) {
    errors.functionDate = 'Please select your planned function date';
  } else if (formData.functionDate < todayStr) {
    errors.functionDate = 'Function date cannot be in the past';
  }

  // Validate Guests Count
  const guestsNum = parseInt(formData.guestsCount, 10);
  if (!formData.guestsCount || isNaN(guestsNum) || guestsNum < 10) {
    errors.guestsCount = 'Please enter expected guests (minimum 10)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

