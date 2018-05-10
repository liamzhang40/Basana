export const OPEN_DROPDOWN = 'OPEN_DROPDOWN';
export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN';

export const openDropdown = dropdown => {
  return {
    type: OPEN_DROPDOWN,
    dropdown
  };
};

export const closeDropdown = () => {
  return {
    type: CLOSE_DROPDOWN
  };
};
