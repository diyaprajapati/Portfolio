import React from 'react';
import Langs from './Langs';
import lang from './lang.json'; 

const LangList = () => {
  return (
    <div>
      <Langs skills={lang} />
    </div>
  );
};

export default LangList;
