
import { useState } from "react";

const VoteButtons = ({ initialVotes, onVote }) => {
  const [localVotes, setLocalVotes] = useState(0);
  const [error, setError] = useState(null);

  const handleVote = (change) => {
    setLocalVotes((v) => v + change);
    setError(null);

    onVote(change).catch(() => {
      setLocalVotes((v) => v - change); // revert
      setError("Vote failed. Please try again.");
    });
  };

  return (
    <div className="vote-buttons">
      <p>Votes: {initialVotes + localVotes}</p>
      <button onClick={() => handleVote(1)}>👍</button>
      <button onClick={() => handleVote(-1)}>👎</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default VoteButtons;
