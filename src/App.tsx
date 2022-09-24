import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 100px;
  position: absolute;
`;

const BoxVar = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    scale: 0,
    opacity: 0,
  }),

  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    scale: 0,
    opacity: 0,
    transition: { duration: 1 },
  }),
};

function App() {
  const [visible, setVisible] = useState(0);
  const [isBack, setBack] = useState(false);

  const nextBtn = () => {
    setBack(false);
    setVisible(prev => (prev === 10 ? 1 : prev + 1));
  };

  const prevBtn = () => {
    setBack(true);
    setVisible(prev => (prev === 1 ? 10 : prev - 1));
  };

  return (
    <Wrapper>
      <AnimatePresence custom={isBack}>
        <Box
          key={visible}
          variants={BoxVar}
          initial="entry"
          animate="visible"
          exit="exit"
          custom={isBack}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextBtn}>next</button>
      <button onClick={prevBtn}>prev</button>
    </Wrapper>
  );
}

export default App;
