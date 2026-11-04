/**
 * WhatsApp Integration Utilities
 * Official Click-to-Chat integration using https://wa.me/
 * Frontend-only implementation without third-party paid APIs or backend servers.
 */

/**
 * Builds a structured, emoji-decorated WhatsApp booking enquiry message.
 * @param {Object} formData Form inputs from customer
 * @param {Object} hallConfig Hall configuration settings
 * @returns {string} Formatted WhatsApp message string
 */
export function buildBookingWhatsAppMessage(formData, hallConfig) {
  const requirementsList = formData.requirements && formData.requirements.length > 0
    ? formData.requirements.map(req => `  • ${req}`).join('\n')
    : '  • None specified';

  const formattedDate = formData.functionDate
    ? new Date(formData.functionDate).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : formData.functionDate;

  return `🏛️ *FUNCTION HALL BOOKING ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
👤 *Customer Name:* ${formData.customerName?.trim() || ''}
📞 *Phone Number:* ${formData.phoneNumber?.trim() || ''}
🎊 *Function Type:* ${formData.functionType || 'Marriage'}
📅 *Function Date:* ${formattedDate}
⏰ *Event Slot:* ${formData.slot || 'Full Day'}
👥 *Number of Guests:* ${formData.guestsCount || ''} Guests

✨ *Selected Facilities:*
${requirementsList}

📝 *Additional Requirements / Notes:*
${formData.additionalNotes?.trim() ? formData.additionalNotes.trim() : 'Please check date availability and provide estimated pricing.'}
━━━━━━━━━━━━━━━━━━━━
📍 *Venue:* ${hallConfig.hallName}
_Sent via Official WhatsApp Enquiry Portal_`;
}

/**
 * Generates an official WhatsApp Click-to-Chat URL with URL-encoded message
 * @param {string} phoneNumber Country code + phone without + or spaces (e.g., 919381494579)
 * @param {string} message Text message to be pre-filled
 * @returns {string} wa.me URL
 */
export function getWhatsAppClickToChatUrl(phoneNumber, message) {
  const cleanPhone = String(phoneNumber).replace(/\D/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Opens WhatsApp Click-to-Chat in a new window/tab
 * @param {string} phoneNumber Owner WhatsApp number
 * @param {string} message Text message to send
 */
export function openWhatsAppChat(phoneNumber, message) {
  const url = getWhatsAppClickToChatUrl(phoneNumber, message);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Helper to copy text to clipboard safely
 * @param {string} text Text to copy
 * @returns {Promise<boolean>} Success state
 */
export async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
}

