import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';

export default function DropDown({ params }) {
  const [active, setActive] = useState('');
  useEffect(() => {
    setActive(params.active);
  }, [params]);

  const handeChange = (value) => {
    setActive(value);
    params.onClick(value);
  };

  return (
    <Dropdown
      color={params.color}
      placement="bottom-start"
      buttonText={`${params.text} ${active}`}
      buttonType="outline"
      size="regular"
      rounded={false}
      block={false}
      ripple="dark">
      {params.items.map((item) => {
        return (
          <DropdownItem key={item} color={params.color} ripple="light" onClick={() => handeChange(item)}>
            {`${params.text} ${item}`}
          </DropdownItem>
        );
      })}
    </Dropdown>
  );
}

DropDown.propTypes = {
  params: PropTypes.object,
};
