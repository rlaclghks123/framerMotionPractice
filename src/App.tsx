import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
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

function App() {
  const x = useMotionValue(0);
  // useTransForm Hook 사용
  const rotateZ = useTransform(x, [-300, 300], [-360, 360]);
  const gradient = useTransform(
    x,
    [-300, 0, 300],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  //motionValue값을 확인하기 위해 useEffect를 사용
  useEffect(() => {
    x.onChange(() => {
      console.log(x.get());
    });
  }, [x]);

  return (
    <Wrapper style={{ background: gradient }}>
      <BiggerBox>
        <Box
          style={{ x, rotateZ, scale }}
          drag="x"
          dragSnapToOrigin
          dragElastic={0.2}
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
