import { useForm } from 'react-hook-form';
import { IoLocationSharp, IoCall, IoMail, IoTimeOutline } from 'react-icons/io5';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { language } = useLanguage();
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log('Contact form:', data);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="contact-page bg-cream min-h-screen pt-32 pb-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-charcoal mb-6">
            {language === 'fr' ? 'Contactez-Nous' : 'Contact Us'}
          </h1>
          <p className="text-xl font-body text-charcoal/70 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Nous sommes à votre écoute'
              : "We're here to listen"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-medium p-8">
            <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
              {language === 'fr' ? 'Envoyez-nous un message' : 'Send us a message'}
            </h2>

            {submitSuccess ? (
              <div className="bg-green-100 border-2 border-green-500 rounded-lg p-6 text-center">
                <p className="text-base font-body text-green-800">
                  {language === 'fr'
                    ? 'Message envoyé ! Nous vous répondrons dans les 24 heures.'
                    : "Message sent! We'll respond within 24 hours."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-body font-semibold text-charcoal mb-2">
                    {language === 'fr' ? 'Nom' : 'Name'}
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: true })}
                    className="w-full h-12 px-4 border border-charcoal/20 rounded-lg font-body text-base focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                  {errors.name && (
                    <span className="text-xs text-primary">Required</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-body font-semibold text-charcoal mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register('email', { required: true })}
                    className="w-full h-12 px-4 border border-charcoal/20 rounded-lg font-body text-base focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                  {errors.email && (
                    <span className="text-xs text-primary">Required</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-body font-semibold text-charcoal mb-2">
                    {language === 'fr' ? 'Téléphone' : 'Phone'}
                  </label>
                  <input
                    type="tel"
                    {...register('phone', { required: true })}
                    className="w-full h-12 px-4 border border-charcoal/20 rounded-lg font-body text-base focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                  {errors.phone && (
                    <span className="text-xs text-primary">Required</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-body font-semibold text-charcoal mb-2">
                    {language === 'fr' ? 'Sujet' : 'Subject'}
                  </label>
                  <select
                    {...register('subject', { required: true })}
                    className="w-full h-12 px-4 border border-charcoal/20 rounded-lg font-body text-base focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  >
                    <option value="">
                      {language === 'fr' ? 'Sélectionnez un sujet' : 'Select a subject'}
                    </option>
                    <option value="reservation">
                      {language === 'fr' ? 'Réservation' : 'Reservation'}
                    </option>
                    <option value="event">
                      {language === 'fr' ? 'Événement' : 'Event'}
                    </option>
                    <option value="feedback">
                      {language === 'fr' ? 'Commentaires' : 'Feedback'}
                    </option>
                    <option value="other">
                      {language === 'fr' ? 'Autre' : 'Other'}
                    </option>
                  </select>
                  {errors.subject && (
                    <span className="text-xs text-primary">Required</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-body font-semibold text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={6}
                    className="w-full px-4 py-3 border border-charcoal/20 rounded-lg font-body text-base focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                  />
                  {errors.message && (
                    <span className="text-xs text-primary">Required</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full h-14 fire-gradient text-white text-base font-semibold uppercase tracking-wide rounded-lg shadow-glow hover:scale-102 transition-transform"
                >
                  {language === 'fr' ? 'Envoyer' : 'Send'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-medium p-8 space-y-6">
              <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                {language === 'fr' ? 'Nos Coordonnées' : 'Our Information'}
              </h2>

              <div className="flex gap-4 items-start">
                <IoLocationSharp className="text-2xl text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-base font-body text-charcoal leading-relaxed">
                    34 Rue Mouffetard<br />
                    75005 Paris, France
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <IoCall className="text-2xl text-primary flex-shrink-0 mt-1" />
                <a
                  href="tel:+33143310811"
                  className="text-base font-body text-charcoal hover:text-primary"
                >
                  +33 1 43 31 08 11
                </a>
              </div>

              <div className="flex gap-4 items-start">
                <IoMail className="text-2xl text-primary flex-shrink-0 mt-1" />
                <a
                  href="mailto:contact@izgara-paris.com"
                  className="text-base font-body text-charcoal hover:text-primary"
                >
                  contact@izgara-paris.com
                </a>
              </div>

              <div className="flex gap-4 items-start">
                <IoTimeOutline className="text-2xl text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="text-base font-body text-charcoal">
                    {language === 'fr' ? '7 jours / 7' : '7 days a week'}
                  </div>
                  <div className="text-base font-body text-charcoal">11:00 - 01:00</div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-medium overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.8267847856903!2d2.348897676740806!3d48.842331871329996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e8d0f0f58b%3A0x7f0b9e0b0b0b0b0b!2s34%20Rue%20Mouffetard%2C%2075005%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
