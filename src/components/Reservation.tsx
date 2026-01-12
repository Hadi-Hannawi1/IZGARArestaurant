import { useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useForm } from 'react-hook-form';

interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  message?: string;
}

export default function Reservation() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ReservationFormData>();

  const content = {
    fr: {
      title: 'Réserver une Table',
      subtitle: 'Rejoignez-nous pour une expérience culinaire authentique',
      name: 'Nom complet',
      email: 'Email',
      phone: 'Téléphone',
      date: 'Date',
      time: 'Heure',
      guests: 'Nombre de personnes',
      message: 'Message (optionnel)',
      submit: 'Réserver',
      success: 'Merci ! Nous vous contacterons bientôt.',
    },
    en: {
      title: 'Reserve a Table',
      subtitle: 'Join us for an authentic culinary experience',
      name: 'Full name',
      email: 'Email',
      phone: 'Phone',
      date: 'Date',
      time: 'Time',
      guests: 'Number of guests',
      message: 'Message (optional)',
      submit: 'Reserve',
      success: 'Thank you! We will contact you soon.',
    },
  };

  const currentLanguage = language as 'fr' | 'en';
  const t = content[currentLanguage];

  const onSubmit = (data: ReservationFormData) => {
    console.log(data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 5000);
  };

  return (
    <section 
      id="reservation" 
      ref={sectionRef}
      className="py-20 px-6 md:px-12 lg:px-24 bg-cream"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-5xl md:text-6xl text-charcoal mb-6">
            {t.title}
          </h2>
          <p className="font-inter text-xl text-charcoal/70">
            {t.subtitle}
          </p>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="bg-green-100 text-green-800 p-8 rounded-2xl text-center">
            <p className="font-inter text-xl">{t.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  {...register('name', { required: true })}
                  type="text"
                  placeholder={t.name}
                  className="w-full px-6 py-4 rounded-xl border-2 border-charcoal/20 focus:border-flame-red outline-none transition-colors font-inter"
                />
                {errors.name && <span className="text-red-500 text-sm">Required</span>}
              </div>
              
              <div>
                <input
                  {...register('email', { required: true })}
                  type="email"
                  placeholder={t.email}
                  className="w-full px-6 py-4 rounded-xl border-2 border-charcoal/20 focus:border-flame-red outline-none transition-colors font-inter"
                />
                {errors.email && <span className="text-red-500 text-sm">Required</span>}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-flame-red to-golden-yellow hover:from-golden-yellow hover:to-flame-red text-white font-inter font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              {t.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
