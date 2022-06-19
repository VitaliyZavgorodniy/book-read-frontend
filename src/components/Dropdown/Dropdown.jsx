// import { useState } from 'react';
// import styled from 'styled-components';

// function Dropdown({ selected, setSelected }) {
//   const [isActive, setIsActive] = useState(false);
//   const options = ['UA', 'En'];

//   return (
//     <Wrapper>
//       <DropdownBtn onClick={(e) => setIsActive(!isActive)}>
//         {selected}
//         <Fas></Fas>
//       </DropdownBtn>

//       {isActive && (
//         <DropdownContent>
//           {options.map((option) => (
//             <DropdownItem
//               onClick={(e) => {
//                 selected(option);
//                 setIsActive(false);
//               }}
//             >
//               {option}
//             </DropdownItem>
//           ))}
//         </DropdownContent>
//       )}
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   width: 35px;
//   user-select: none;
//   margin: 0 auto;
//   position: relative;
// `;
// const DropdownBtn = styled.div`
//   pading: 15px 20px;
//   background: #fff;
//   font-weight: 300;
//   font-size: 14px;
//   color: #333;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   cursor: pointer;
//   &:hover {
//     background: #f5f7fa;
//     box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
//   }
// `;

// const DropdownContent = styled.div`
//   position: absolute;
//   top: 110%;
//   left: 0;
//   padding: 10px;
//   background: #fff;
//   box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
//   font-weight: 400;
//   font-size: 14px;
//   color: #333;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
// `;
// const DropdownItem = styled.div`
//   padding: 10px;
//   cursor: pointer;
//   transition: all 0.2s;

//   &:hover {
//     background: #f5f7fa;
//     box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
//   }
// `;
// const Fas = styled.span`
//   width: 0;
//   height: 0;
//   border-left: 4px solid transparent;
//   border-right: 4px solid transparent;
//   border-top: 8px solid grey;
// `;

// export default Dropdown;

import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import cookies from 'js-cookie';

import LanguageIcon from '@mui/icons-material/Language';

// import '../../Styles/flags.css';
import styled from 'styled-components';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import classNames from 'classnames';

export default function Dropdown() {
  const options = ['UA', 'En'];
  const languages = [
    {
      code: 'en',
      country_code: 'gb',
      name: 'English',
    },
    {
      code: 'ua',
      country_code: 'ua',
      name: 'Ukraine',
    },
  ];

  const { t } = useTranslation();

  const currentLanguageCode = cookies.get('i18next') || 'en';

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Flags>
      <Tooltip title={t('language')} arrow>
        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
          <LanguageIcon style={{ width: '22px', height: '22px' }} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        disableScrollLock={true}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            bgcolor: '#F8F8F8',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: '#F8F8F8',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
      >
        {languages.map(({ code, name, country_code }) => (
          <Tooltip title={name} arrow placement="left">
            <MenuItem
              key={code}
              style={{
                backgroundColor:
                  currentLanguageCode === code ? '#D8D8D8' : '#F8F8F8',
                border:
                  currentLanguageCode === code
                    ? '1px solid #989898'
                    : '#F8F8F8',
              }}
            >
              <IconButton
                className={classNames('dropdown-item')}
                onClick={() => {
                  i18next.changeLanguage(code);
                }}
              >
                <div
                  // className={`flag-icon flag-icon-${country_code}`}
                  style={{
                    opacity: currentLanguageCode === code ? 1 : 0.3,
                    width: '3rem',
                    height: '2rem',
                  }}
                >
                  {code}
                </div>
              </IconButton>
            </MenuItem>
          </Tooltip>
        ))}
      </Menu>
    </Flags>
  );
}
const Flags = styled.div`
  // position: absolute;
  right: 0;
  // padding-right: 20px;
  // padding-top: 20px;
`;
