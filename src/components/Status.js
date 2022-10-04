import React from 'react'

export default function Status(props) {

    const getBadgeBgColor = () => {
        switch (props.type) {
          case 'Active':
            return 'bg-success';
          case 'Disabled':
            return 'bg-secondary';
          default:
            return 'bg-success';
        };
      };

  return (
    <span className={`badge mt-2 ${getBadgeBgColor()}`}>
        {props.type}
    </span>
  )
}
