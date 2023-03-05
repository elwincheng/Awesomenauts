// import React, { useState } from 'react';

// const Dropdown = ({ options, defaultOption, onSelect }) => {
//   const [selectedOption, setSelectedOption] = useState(defaultOption);

//   const handleSelect = (option) => {
//     setSelectedOption(option);
//     onSelect(option);
//   };

//   return (
//     <div className="dropdown">
//       <div className="dropdown-selected">
//         <span>{selectedOption}</span>
//         <i className="fas fa-chevron-down"></i>
//       </div>
//       <ul className="dropdown-menu">
//         {options.map((option) => (
//           <li key={option} onClick={() => handleSelect(option)}>
//             {option}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dropdown;



import React, { useState } from 'react';
import Select from 'react-select';
import './Dropdown.css'


const Dropdown = ({selected, setSelected, list, placeholder}) => {
  // const [selected, setSelectedLanguage] = useState(null);

  const handleSelectLanguage = (selectedOption) => {
    setSelected(selectedOption);
  };

  return (
    <Select
			styles={{width: 200}}
      placeholder={placeholder}
      value={selected}
      onChange={handleSelectLanguage}
      options={list}
      isSearchable
    />
  );
};

export default Dropdown;