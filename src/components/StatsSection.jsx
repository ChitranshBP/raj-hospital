import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const stats = [
  { number: 30, suffix: '+', label: 'Years of Excellence', color: 'primary' },
  { number: 100, suffix: '+', label: 'Hospital Beds', color: 'secondary' },
  { number: 15, suffix: '+', label: 'Medical Specialties', color: 'primary' },
  { number: 1, suffix: 'Lakh+', label: 'Patients Treated', color: 'secondary' }];


  const Counter = ({ number, suffix, inView, delay = 0 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        const timer = setTimeout(() => {
          const increment = number / 100;
          const timer = setInterval(() => {
            setCount((prev) => {
              if (prev >= number) {
                clearInterval(timer);
                return number;
              }
              return Math.min(prev + increment, number);
            });
          }, 20);
          return () => clearInterval(timer);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [inView, number, delay]);

    return (
      <span>{Math.floor(count)}{suffix}</span>);

  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12">

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted Healthcare Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that reflect our commitment to excellence and the trust our patients place in us
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) =>
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">

              <div className={`text-3xl lg:text-5xl font-bold mb-2 text-${stat.color}-600`}>
                <Counter
                number={stat.number}
                suffix={stat.suffix}
                inView={inView}
                delay={index * 200} />

              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default StatsSection;