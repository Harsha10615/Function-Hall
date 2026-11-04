import React, { useState } from 'react';
import { hallConfig } from '../config/hallConfig';
import { 
  buildBookingWhatsAppMessage, 
  openWhatsAppChat, 
  copyToClipboard 
} from '../utils/whatsapp';
import { validateBookingForm } from '../utils/validation';
import { 
  MessageSquare, 
  Users, 
  Phone, 
  User, 
  Send, 
  AlertCircle, 
  Sparkles, 
  FileText, 
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

export default function BookingForm() {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    functionType: 'Marriage',
    functionDate: '',
    slot: 'Full Day',
    guestsCount: '500',
    requirements: ['Decoration', 'Catering', 'Rooms'],
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const functionTypes = [
    { label: 'Marriage', icon: '💍' },
    { label: 'Reception', icon: '💐' },
    { label: 'Engagement', icon: '✨' },
    { label: 'Birthday', icon: '🎂' },
    { label: 'Other', icon: '🎉' }
  ];

  const standardRequirements = [
    { id: 'Decoration', label: 'Stage & Floral Decoration' },
    { id: 'Catering', label: 'Banquet Catering Service' },
    { id: 'Rooms', label: 'AC Guest Rooms & Bridal Suite' },
    { id: 'Valet', label: 'Dedicated Valet Parking Team' },
    { id: 'SoundLighting', label: 'DJ, Audio & Stage Lighting' },
    { id: 'PowerBackup', label: 'Generator Backup Assurance' }
  ];

  const handleRequirementToggle = (id) => {
    setFormData((prev) => {
      const exists = prev.requirements.includes(id);
      return {
        ...prev,
        requirements: exists 
          ? prev.requirements.filter((item) => item !== id)
          : [...prev.requirements, id]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors: validationErrors } = validateBookingForm(formData);

    if (isValid) {
      setErrors({});
      // 1. Build message & open WhatsApp Click-to-Chat directly
      const message = buildBookingWhatsAppMessage(formData, hallConfig);
      openWhatsAppChat(hallConfig.ownerWhatsAppNumber, message);

      // 2. Open confirmation modal for on-screen review and backup
      setShowReviewModal(true);
    } else {
      setErrors(validationErrors);
      const firstError = document.querySelector('.form-error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handleLaunchWhatsApp = () => {
    const message = buildBookingWhatsAppMessage(formData, hallConfig);
    openWhatsAppChat(hallConfig.ownerWhatsAppNumber, message);
  };

  const handleCopyMessage = async () => {
    const msg = buildBookingWhatsAppMessage(formData, hallConfig);
    const success = await copyToClipboard(msg);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="enquiry" className="py-20 sm:py-28 bg-forest-900 text-white relative pattern-royal">
      
      {/* Decorative Gold Glow */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-950/80 border border-gold-500/30 text-gold-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Instant Availability & Pricing</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Booking Enquiry Form
          </h2>

          <p className="mt-4 text-stone-300 text-sm sm:text-base font-light">
            Fill in your celebration details below. We will generate a structured inquiry and connect you directly with our palace manager on WhatsApp.
          </p>

          <div className="mt-5 w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
        </div>

        {/* Form Container Card */}
        <div className="mt-12 rounded-3xl bg-forest-950/90 border border-gold-500/40 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* Important Notice Banner */}
          <div className="mb-8 p-4 rounded-2xl bg-forest-900/80 border border-gold-500/30 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-stone-200">
              <strong className="text-gold-300">Direct WhatsApp Enquiry:</strong> Submitting this form opens WhatsApp with all your entered details pre-formatted. You can review the message and chat with our booking team to verify date availability and receive a customized quote.
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-7">
            
            {/* Row 1: Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Customer Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gold-300 mb-2">
                  Customer Name <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.customerName}
                    onChange={(e) => {
                      setFormData({ ...formData, customerName: e.target.value });
                      if (errors.customerName) setErrors({ ...errors, customerName: null });
                    }}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-forest-900/90 border text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all ${
                      errors.customerName ? 'border-red-500 form-error' : 'border-forest-700 hover:border-gold-500/50'
                    }`}
                  />
                </div>
                {errors.customerName && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" /> {errors.customerName}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gold-300 mb-2">
                  Phone Number (WhatsApp Active) <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    placeholder="e.g. 98765 43210"
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: null });
                    }}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-forest-900/90 border text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all ${
                      errors.phoneNumber ? 'border-red-500 form-error' : 'border-forest-700 hover:border-gold-500/50'
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                  </p>
                )}
              </div>

            </div>

            {/* Row 2: Function Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gold-300 mb-2">
                Function Type <span className="text-red-400">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {functionTypes.map((type) => (
                  <button
                    type="button"
                    key={type.label}
                    onClick={() => setFormData({ ...formData, functionType: type.label })}
                    className={`p-3 rounded-xl border text-sm font-semibold flex flex-col items-center justify-center gap-1.5 transition-all duration-200 ${
                      formData.functionType === type.label
                        ? 'bg-gold-gradient text-forest-950 border-gold-400 shadow-gold-glow scale-102 font-bold'
                        : 'bg-forest-900/80 border-forest-700 text-stone-200 hover:border-gold-500/40 hover:bg-forest-800'
                    }`}
                  >
                    <span className="text-lg">{type.icon}</span>
                    <span className="text-xs sm:text-sm">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Row 3: Function Date, Slot & Expected Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Function Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gold-300 mb-2">
                  Function Date <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={todayStr}
                    value={formData.functionDate}
                    onChange={(e) => {
                      setFormData({ ...formData, functionDate: e.target.value });
                      if (errors.functionDate) setErrors({ ...errors, functionDate: null });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-forest-900/90 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all ${
                      errors.functionDate ? 'border-red-500 form-error' : 'border-forest-700 hover:border-gold-500/50'
                    }`}
                  />
                </div>
                {errors.functionDate && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" /> {errors.functionDate}
                  </p>
                )}
              </div>

              {/* Slot / Session */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gold-300 mb-2">
                  Event Session / Timing
                </label>
                <div className="relative">
                  <select
                    value={formData.slot}
                    onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-forest-900/90 border border-forest-700 hover:border-gold-500/50 text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                  >
                    <option value="Morning (8:00 AM - 3:00 PM)">Morning (8:00 AM - 3:00 PM)</option>
                    <option value="Evening (4:00 PM - 11:30 PM)">Evening (4:00 PM - 11:30 PM)</option>
                    <option value="Full Day (24 Hours)">Full Day (24 Hours)</option>
                    <option value="Custom Timing">Custom Timing</option>
                  </select>
                </div>
              </div>

              {/* Guests Count */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gold-300 mb-2">
                  Expected Guests <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <input
                    type="number"
                    min="10"
                    max="5000"
                    placeholder="e.g. 800"
                    value={formData.guestsCount}
                    onChange={(e) => {
                      setFormData({ ...formData, guestsCount: e.target.value });
                      if (errors.guestsCount) setErrors({ ...errors, guestsCount: null });
                    }}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-forest-900/90 border text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all ${
                      errors.guestsCount ? 'border-red-500 form-error' : 'border-forest-700 hover:border-gold-500/50'
                    }`}
                  />
                </div>
                {errors.guestsCount && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" /> {errors.guestsCount}
                  </p>
                )}
              </div>

            </div>

            {/* Row 4: Additional Facilities Required (Checkboxes) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gold-300 mb-2">
                Required Facilities (Select all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {standardRequirements.map((req) => {
                  const isChecked = formData.requirements.includes(req.id);
                  return (
                    <label
                      key={req.id}
                      onClick={() => handleRequirementToggle(req.id)}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer select-none transition-all duration-200 ${
                        isChecked
                          ? 'bg-forest-800 border-gold-400 text-white'
                          : 'bg-forest-900/60 border-forest-700/80 text-stone-300 hover:border-forest-600'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                        isChecked ? 'bg-gold-500 border-gold-400 text-forest-950' : 'border-stone-500'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-medium">{req.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Row 5: Additional Requirements (Textarea) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gold-300 mb-2">
                Additional Requirements / Special Notes
              </label>
              <textarea
                rows="3"
                placeholder="Share any special decoration themes, catering preferences (Pure Veg/Jain/Non-Veg), number of guest rooms needed, or specific questions..."
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-forest-900/90 border border-forest-700 hover:border-gold-500/50 text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all"
              />
            </div>

            {/* Submit Button (Submit via WhatsApp) */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gold-gradient text-forest-950 font-extrabold text-base uppercase tracking-wider shadow-gold-glow-lg hover:shadow-gold-glow hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <MessageSquare className="w-5 h-5 text-forest-950 fill-forest-950 group-hover:rotate-12 transition-transform" />
                <span>Submit via WhatsApp</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="mt-3 text-center text-stone-400 text-xs">
                🔒 Your contact details are strictly used to respond to your booking enquiry. No spam.
              </p>
            </div>

          </form>

        </div>

      </div>

      {/* Review & WhatsApp Dispatch Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-forest-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div
            className="relative max-w-xl w-full bg-forest-900 rounded-3xl border border-gold-400 shadow-2xl overflow-hidden p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-forest-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Opening WhatsApp...</h3>
                  <p className="text-xs text-emerald-300 font-semibold">Direct Chat with +{hallConfig.ownerWhatsAppNumber}</p>
                </div>
              </div>

              <button
                onClick={() => setShowReviewModal(false)}
                className="text-stone-400 hover:text-white text-sm font-semibold p-1.5"
              >
                Close
              </button>
            </div>

            {/* Success Prompt */}
            <div className="mt-4 p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs text-stone-200">
              <span className="text-emerald-400 font-bold">WhatsApp Launched!</span> WhatsApp has opened in a new tab with your details pre-filled. In WhatsApp, simply tap the <strong>Send button (✈️)</strong> to send the enquiry directly to our manager.
            </div>

            {/* Message Preview Box */}
            <div className="my-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-300 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-gold-400" /> Generated Message Preview:
                </span>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="text-xs text-gold-300 hover:text-white flex items-center gap-1 bg-forest-800 px-2.5 py-1 rounded-lg border border-forest-700"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copy Text
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-forest-950 border border-forest-800 text-stone-200 text-xs font-mono whitespace-pre-wrap max-h-52 overflow-y-auto leading-relaxed selection:bg-gold-500 selection:text-forest-950">
                {buildBookingWhatsAppMessage(formData, hallConfig)}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleLaunchWhatsApp}
                className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Re-open WhatsApp Chat</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => setShowReviewModal(false)}
                className="py-3 px-5 rounded-xl bg-forest-800 hover:bg-forest-700 text-stone-200 font-semibold text-sm border border-forest-700 transition-all"
              >
                Edit Enquiry
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

