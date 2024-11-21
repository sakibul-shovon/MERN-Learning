function ScoreBoard({ scores, xPlaying }) {
    const { xScore, oScore } = scores;
    return (
      <div className="scoreboard">
        <span className={`score x-score ${!xPlaying && "inactive"}`}>
            <strong>X</strong> = {xScore}
        </span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>
          <strong>O</strong> = {oScore}
        </span>
      </div>
    );
}
export default ScoreBoard;
