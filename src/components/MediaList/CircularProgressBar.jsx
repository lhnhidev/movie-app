export default function CircularProgressBar({
  percent = 85,
  size = 50,
  strokeWidth = 5,
  strokeColor = "green",
}) {
  const radius = size / 2 - strokeWidth;
  const parimeter = 2 * Math.PI * radius;
  const mark = parimeter - (percent / 100) * parimeter;
  return (
    <div>
      <svg width={`${size}px`} height={`${size}px`}>
        <circle
          r={radius}
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          stroke="white"
          strokeWidth={strokeWidth}
        ></circle>
        <circle
          r={radius}
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={parimeter}
          strokeDashoffset={mark}
          strokeLinecap="round"
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
        ></circle>
        <text
          fontSize="12px"
          fill="white"
          x={radius + strokeWidth}
          y={radius + strokeWidth}
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {percent}
        </text>
      </svg>
    </div>
  );
}
