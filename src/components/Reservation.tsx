import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { IoCheckmarkCircle } from 'react-icons/io5';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  requests?: string;
}

const Reservation = () => {
  const { t } = useLanguage();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReservationFormData>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reservation-field', {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 70%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: ReservationFormData) => {
    try {
      console.log('Reservation data:', data);
      // In production, send to backend or email service
      setSubmitSuccess(true);
      reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Reservation error:', error);
    }
  };

  const timeSlots = [];
  for (let hour = 11; hour <= 25; hour++) {
    const displayHour = hour > 24 ? hour - 24 : hour;
    timeSlots.push(`${displayHour.toString().padStart(2, '0')}:00`);
    if (hour < 25) {
      timeSlots.push(`${displayHour.toString().padStart(2, '0')}:30`);
    }
  }

  return (
    <section
      id="reservation"
      className="relative bg-charcoal py-40 px-4 sm:px-8 lg:px-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://source.unsplash.com/1920x1080/?restaurant,interior,elegant)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-charcoal/70" />

      <div className="relative z-10 max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-cream mb-6">
            {t('reservation.headline')}
          </h2>
          <p className="text-lg sm:text-xl font-body text-cream/90">
            {t('reservation.subheadline')}
          </p>
        </div>

        <div
          ref={formRef}
          className="bg-cream/95 backdrop-blur-2xl rounded-3xl p-8 sm:p-16 shadow-heavy"
        >
          {submitSuccess ? (
            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-6 flex items-center gap-4">
              <IoCheckmarkCircle className="text-3xl text-green-600 flex-shrink-0" />
              <p className="text-base font-body text-green-800">
                {t('reservation.success')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div className="reservation-field">
                <label className="block text-sm font-body font-semibold text-charcoal mb-2">
                  {t('reservation.name')}
                </label>
                <input
                  type="text"
                  {...register('name', { required: true, minLength: 2 })}
                  placeholder={t('reservation.name.placeholder')}
                  className="w-full h-14 px-5 border border-charcoal/20 rounded-lg font-body text-base text-charcoal bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                />
                {errors.name && (
                  <span className="block mt-1 text-xs text-primary">This field is required</span>
                )}
              </div>

              {/* Email */}
              <div className="reservation-field">
                <label className="block text-sm font-body font-semibold text-charcoal mb-2">
                  {t('reservation.email')}
                </label>
                <input
                  type="email"
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  placeholder={t('reservation.email.placeholder')}
                  className="w-full h-14 px-5 border border-charcoal/20 rounded-lg font-body text-base text-charcoal bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                />
                {errors.email && (
                  <span className="block mt-1 text-xs text-primary">Valid email required</span>
                )}
              </div>

              {/* Phone */}
              <div className="reservation-field">
                <label className="block text-sm font-body font-semibold text-charcoal mb-2">
                  {t('reservation.phone')}
                </label>
                <input
                  type="tel"
                  {...register('phone', { required: true })}
                  placeholder={t('reservation.phone.placeholder')}
                  className="w-full h-14 px-5 border border-charcoal/20 rounded-lg font-body text-base text-charcoal bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                />
                {errors.phone && (
                  <span className="block mt-1 text-xs text-primary">Phone number required</span>
                )}
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Date */}
                <div className="reservation-field">
                  <label className="block text-sm font-body font-semibold text-charcoal mb-2">
                    {t('reservation.date')}
                  </label>
                  <input
                    type="date"
                    {...register('date', { required: true })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full h-14 px-5 border border-charcoal/20 rounded-lg font-body text-base text-charcoal bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                  />
                  {errors.date && (
                    <span className="block mt-1 text-xs text-primary">Date required</span>
                  )}
                </div>

                {/* Time */}
                <div className="reservation-field">
                  <label className="block text-sm font-body font-semibold text-charcoal mb-2">
                    {t('reservation.time')}
                  </label>
                  <select
                    {...register('time', { required: true })}
                    className="w-full h-14 px-5 border border-charcoal/20 rounded-lg font-body text-base text-charcoal bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <span className="block mt-1 text-xs text-primary">Time required</span>
                  )}
                </div>
              </div>

              {/* Party Size */}
              <div className="reservation-field">
                <label className="block text-sm font-body font-semibold text-charcoal mb-2">
                  {t('reservation.party')}
                </label>
                <select
                  {...register('partySize', { required: true })}
                  className="w-full h-14 px-5 border border-charcoal/20 rounded-lg font-body text-base text-charcoal bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                >
                  <option value="">Select party size</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((size) => (
                    <option key={size} value={size}>
                      {size} {size === 1 ? 'person' : 'people'}
                    </option>
                  ))}
                </select>
                {errors.partySize && (
                  <span className="block mt-1 text-xs text-primary">Party size required</span>
                )}
              </div>

              {/* Special Requests */}
              <div className="reservation-field">
                <label className="block text-sm font-body font-semibold text-charcoal mb-2">
                  {t('reservation.requests')}
                </label>
                <textarea
                  {...register('requests')}
                  rows={4}
                  placeholder={t('reservation.requests.placeholder')}
                  className="w-full px-5 py-4 border border-charcoal/20 rounded-lg font-body text-base text-charcoal bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="reservation-field w-full h-16 fire-gradient text-white text-lg font-bold uppercase tracking-wide rounded-lg shadow-glow hover:scale-102 transition-transform mt-8"
              >
                {t('reservation.submit')}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservation;
