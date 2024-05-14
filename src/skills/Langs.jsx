import React from 'react';

const Langs = ({ skills }) => {
  return (
    <div className='flex flex-col gap-10'>
      {skills.map((skill, index) => (
        <div key={index} className='flex flex-col bg-slate-600'>

        {/* title */}
          <div>
            <h1>{skill.title}</h1>
          </div>

          {/* list of languages */}
          <ul>
            {skill.lans.map((language, idx) => (
              <li key={idx}>
                <div>
                  {/* image of lang */}
                  <div>
                    <img src={language.imge} width='30px' alt={language.txt} />
                  </div>

                  {/* name of lang */}
                  <div>
                    <h2>{language.txt}</h2>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Langs;

