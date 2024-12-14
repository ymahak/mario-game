import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScore, setLastScore } from "../../../config/redux/engineSlice";
import "./Score.css";

const Score = () => {
  const score = useSelector(state => state.engine.score);
  const lastScore = useSelector(state => state.engine.lastScore);
  const play = useSelector(state => state.engine.play);
  const die = useSelector(state => state.engine.die);
  const dispatch = useDispatch();

  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem("highScore")) || 0;
  });

  useEffect(() => {
    if (play && !die) {
      setTimeout(() => {
        dispatch(setScore(score + 1));
      }, 100);
    }

    if (score && !play) {
      dispatch(setLastScore(score));
      
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem("highScore", score);
      }
    }
  }, [dispatch, play, score, lastScore, die, highScore]);

  return (
    <div className="score-container">
      {play && <p className="score">Score: {score}</p>}
      {!play && <p className="score">Score: {lastScore}</p>}
      <p className="high-score">High Score: {highScore}</p>
    </div>
  );
}

export default Score;
