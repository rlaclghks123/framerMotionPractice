import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: white;
  position: fixed;
  top: 100px;
`;

const BoxVariant = {
  initial: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, rotateZ: 360 },
  leaving: { opacity: 0, y: 20, scale: 0 },
};

function App() {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(prev => !prev);
  };

  return (
    <Wrapper>
      <AnimatePresence>
        {clicked ? (
          <Box
            variants={BoxVariant}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
      <button onClick={toggle}>click</button>
    </Wrapper>
  );
}

export default App;
