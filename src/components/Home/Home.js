import React from 'react';
import { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState(''); 
  const [subTitle, setSubTitle] = useState('');
  const [text, setText] = useState('');
  const [font, setFont] = useState('comforter');
  const [align, setAlign] = useState('');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subTitle={subTitle} text={text} font={font} align={align}/>
      <Editor title={title} subTitle={subTitle} text={text} setAlign={setAlign} setTitle={setTitle} setSubTitle={setSubTitle} setText={setText} setFont={setFont}/>
    </main>
  );
}


