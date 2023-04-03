import { useEffect, useRef, useState } from "react";

import styles from "./Accordion.module.css";

const Accordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  const answerRef = useRef(null);

  useEffect(() => {
    answerRef.current.style.height = show
      ? `${answerRef.current.scrollHeight}px`
      : "0px";
  }, [show]);

  return (
    <div
      className="w-4/5 my-2 md:min-w-full mx-auto cursor-pointer bg-[#41E22E] hover:bg-green-400 text-black py-2 px-10 md:w-3/5"
      onClick={() => {
        setShow(!show);
      }}
    >
      <div>
        <div className="text-center flex items-center justify-center md:mt-[10px] md:text-xl">
          <div className="ml-4 font-semibold md:ml-10">
            {question}
          </div>
        </div>
        <div
            ref={answerRef}
            className={`flex justify-center ${styles.maxHeightTransition} `}
            style={{ whiteSpace: "pre-wrap" }}
        >
          {show && answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;