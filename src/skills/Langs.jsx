import React from 'react';
import { motion } from 'framer-motion';

const Langs = ({ skills }) => {
  return (
    <div className='flex flex-col gap-10 p-12 md:grid md:grid-cols-2 md:p-24 md:gap-16'>
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className='flex flex-col border-2 border-slate-400 shadow-lg shadow-top shadow-slate-400 p-5 py-8 rounded-lg gap-8 bg-slate-100 h-full'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* title */}
          <div className='text-center font-bold text-2xl text-slate-600'>
            <h1>{skill.title}</h1>
          </div>

          {/* list of languages */}
          <div className='flex flex-row justify-center'>
            <ul className='flex flex-wrap justify-center gap-10'>
              {skill.lans.map((language, idx) => (
                <li key={idx}>
                  <motion.div
                    className='flex flex-row border-2 px-4 py-2 border-slate-300 justify-start rounded-md w-full gap-3 hover:transition-all hover:ease-in-out duration-200 cursor-default'
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div>
                      <img src={language.imge} width='30px' alt={language.txt} />
                    </div>
                    <div className='text-slate-700 self-center text-base'>
                      <h2>{language.txt}</h2>
                    </div>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Langs;
