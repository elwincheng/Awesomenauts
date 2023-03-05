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

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'ja', label: 'Japanese' },
  { value: 'ko', label: 'Korean' },
];

const Dropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleSelectLanguage = (selectedOption) => {
    setSelectedLanguage(selectedOption);
  };

  return (
    <Select
			styles={{width: 200}}
      placeholder="Select a language"
      value={selectedLanguage}
      onChange={handleSelectLanguage}
      options={languages}
      isSearchable
    />
  );
};

export default Dropdown;