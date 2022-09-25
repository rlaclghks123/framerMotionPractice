import styled from "styled-components";
import { motion } from "framer-motion";
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
  top: 100px;
  position: absolute;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: tomato;
`;

function App() {
  const [clicked, setClicked] = useState(false);

  const toggleBtn = () => {
    setClicked(prev => !prev);
  };

  return (
    <Wrapper onClick={toggleBtn}>
      <Box
        style={{
          justifyContent: clicked ? "flex-start" : "flex-end",
          alignItems: clicked ? "flex-start" : "flex-end",
        }}
      >
        <Circle layout />
      </Box>
    </Wrapper>
  );
}

export default App;
