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
  height: 200px;
  border-radius: 20px;
  background-color: white;
  font-size: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;

  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
  gap: 10px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
function App() {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState<number | null>(null);

  return (
    <Wrapper onClick={() => setClicked(prev => !prev)}>
      <Grid>
        {[1, 2, 3, 4].map(i => (
          <Box key={i} layoutId={i + ""} onClick={() => setId(i)} />
        ))}
      </Grid>
      <AnimatePresence>
        {clicked ? (
          <Overlay
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box style={{ width: 400, height: 200 }} layoutId={id + ""} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
