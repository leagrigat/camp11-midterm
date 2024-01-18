type Props = {
  voteAverage: number;
};

function Score({ voteAverage }: Props) {
  const votePercent: number = Math.floor(voteAverage * 10);

  let textColor: string;

  if (votePercent >= 0 && votePercent <= 15) {
    textColor = 'text-red-500';
  } else if (votePercent > 15 && votePercent <= 50) {
    textColor = 'text-orange-500';
  } else if (votePercent > 50 && votePercent <= 75) {
    textColor = 'text-yellow-500';
  } else if (votePercent > 75 && votePercent <= 100) {
    textColor = 'text-green-500';
  } else {
    textColor = 'text-gray-500'; // Fallback-Color, if no number fits
  }

  return (
    <div>
      <span className={textColor}>{votePercent + '% '}</span>
      <span className="text-white-dimmed">Score</span>
    </div>
  );
}

export default Score;
