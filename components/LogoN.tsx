import React from 'react';

type LogoVariant = 'color' | 'positive' | 'negative';

interface LogoNProps extends React.SVGProps<SVGSVGElement> {
  variant?: LogoVariant;
}

export const LogoN: React.FC<LogoNProps> = ({ variant = 'color', ...props }) => {
  // Define colors based on the variant
  // Teal: #008494, Dark Blue: #022B4A, Bright Blue: #005FA3
  let colorTeal = '#008494';
  let colorDark = '#022B4A';
  let colorLightBlue = '#005FA3';

  if (variant === 'positive') {
    colorTeal = '#555555';
    colorDark = '#222222';
    colorLightBlue = '#444444';
  } else if (variant === 'negative') {
    colorTeal = '#E0E0E0';
    colorDark = '#FFFFFF';
    colorLightBlue = '#F5F5F5';
  }

  // Define nodes to easily manage coordinates and colors
  const nodes = [
    { id: 'N1', x: 15, y: 80, color: colorDark },
    { id: 'N2', x: 28, y: 92, color: colorDark },
    { id: 'N3', x: 42, y: 35, color: colorTeal },
    { id: 'N4', x: 42, y: 60, color: colorTeal },
    { id: 'N5', x: 65, y: 92, color: colorLightBlue },
    { id: 'N6', x: 80, y: 78, color: colorLightBlue },
    { id: 'N7', x: 80, y: 48, color: colorLightBlue },
  ];

  // Arrow configuration
  const arrowTipX = 105;
  const arrowTipY = 15;
  const arrowBaseLeftX = 90;
  const arrowBaseLeftY = 15;
  const arrowBaseRightX = 105;
  const arrowBaseRightY = 30;

  return (
    <svg
      viewBox="0 0 120 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* Left section (Dark) */}
        <line x1="15" y1="80" x2="28" y2="92" stroke={colorDark} />
        <line x1="15" y1="80" x2="42" y2="35" stroke={colorDark} />
        <line x1="28" y1="92" x2="42" y2="60" stroke={colorDark} />

        {/* Middle section (Teal) */}
        <line x1="42" y1="35" x2="42" y2="60" stroke={colorTeal} />
        <line x1="42" y1="35" x2="65" y2="92" stroke={colorTeal} />
        <line x1="42" y1="60" x2="65" y2="92" stroke={colorTeal} />

        {/* Right section (Light Blue) */}
        <line x1="65" y1="92" x2="80" y2="78" stroke={colorLightBlue} />
        <line x1="65" y1="92" x2="80" y2="48" stroke={colorLightBlue} />
        <line x1="80" y1="78" x2="80" y2="48" stroke={colorLightBlue} />

        {/* Lines connecting to the arrow */}
        <line x1="80" y1="48" x2="98" y2="24" stroke={colorLightBlue} />
        <line x1="80" y1="78" x2="95" y2="40" stroke={colorLightBlue} />
      </g>

      {/* Arrow Head */}
      <polygon
        points={`${arrowTipX},${arrowTipY} ${arrowBaseLeftX},${arrowBaseLeftY} ${arrowBaseRightX},${arrowBaseRightY}`}
        fill={colorLightBlue}
      />

      {/* Nodes (Circles) */}
      {nodes.map((node) => (
        <circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r="4.5"
          fill={node.color}
        />
      ))}
    </svg>
  );
};
