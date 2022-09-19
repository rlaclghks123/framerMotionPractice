import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BoxVariants = {
  start: { scale: 0 },
  end: { scale: 2, rotateZ: 180, transition: { duration: 1 } },
  hover: { borderRadius: "50%", backgroundColor: "rgb(0,0,0,0.5)" },
  click: { scale: 1, backgroundColor: "rgb(255,255,255)" },
};

function App() {
  const boxRef = useRef(null);

  return (
    <Wrapper>
      <BiggerBox ref={boxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragConstraints={boxRef}
          dragElastic={0.2}
          variants={BoxVariants}
          initial="start"
          animate="end"
          whileHover="hover"
          whileTap="click"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
