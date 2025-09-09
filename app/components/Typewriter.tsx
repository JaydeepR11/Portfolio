import React, { useEffect, useState } from "react";

type TypewriterProps = {
  words?: string[]; // words to cycle through
  loop?: boolean; // whether to loop the words
  typingSpeed?: number; // ms per character when typing
  deletingSpeed?: number; // ms per character when deleting
  pause?: number; // ms to wait after a word is typed fully
  className?: string; // additional classes to apply to the wrapper
};

export default function Typewriter({
  words = ["programmer", "developer"],
  loop = true,
  typingSpeed = 120,
  deletingSpeed = 60,
  pause = 1200,
  className = "",
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentWord = words[wordIndex % words.length];

    if (!isDeleting) {
      // typing
      timeout = setTimeout(() => {
        const next = currentWord.slice(0, text.length + 1);
        setText(next);
        if (next === currentWord) {
          // finished typing; pause then start deleting
          timeout = setTimeout(() => setIsDeleting(true), pause);
        }
      }, typingSpeed);
    } else {
      // deleting
      timeout = setTimeout(() => {
        const next = currentWord.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setIsDeleting(false);
          setWordIndex((idx) => (idx + 1) % words.length);
          if (!loop && wordIndex + 1 >= words.length) {
            // if not looping and we've finished last word, stop further changes
            clearTimeout(timeout);
          }
        }
      }, deletingSpeed);
    }

    return () => clearTimeout(timeout);
    // we intentionally do not include `typingSpeed`, `deletingSpeed`, `pause` in deps to avoid
    // resetting the timer on every render if they are stable. If you want them reactive, add them.
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    loop,
    pause,
    typingSpeed,
    deletingSpeed,
  ]);

  return (
    <span className={`typewrite ${className} items-center`} aria-live="polite">
      <span>{text}</span>
      <span className=" animate-pulse">|</span>
    </span>
  );
}
