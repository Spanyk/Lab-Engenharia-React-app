import React, { useEffect, useState } from 'react';

function TypingEffect() {
  const [text, setText] = useState('');

  useEffect(() => {

    const message = "Venha estudar na Fatec!";
    let i = 0;
    let prevText = ""; 

    const interval = setInterval(() => {
      if (i < message.length) {
        setText(prevText = prevText + message[i]);
        i++;
      } else {
        prevText = "";
         i = 0;
      }
    }, 100);

    return () => {
      
    };
  }, []);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

export default TypingEffect;
