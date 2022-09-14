import React from 'react';

import './Preview.css';

export default function Preview({ title, subTitle, text }) {
  // implement a Preview screen here
  //  Note - the HTML should have the following structure
  //  the main div should have a class of preview and the font-name prop
  //  and should have style interpolated using the alignment prop

  // <div class="preview indie-flower" style="text-align: center;">
  //   <h1> Blog Title</h1>
  //   <h3> Blog Subtitle</h3>
  //   <p>This is some blog text. </p>
  // </div>

  return (
    <div className="preview">
      <h1>Hello there</h1>
      <h1>{title}</h1>
      <h1>{subTitle}</h1>
      <h1>{text}</h1>


    </div>
  );
}
