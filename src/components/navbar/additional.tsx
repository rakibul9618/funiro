import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { forwardRef } from 'react';

interface DivInputType {
  sx: Object;
}

const DivInput = forwardRef<HTMLInputElement, DivInputType>(({ sx }, ref) => {
  return (
    <StyledBox component="div" sx={sx}>
      <StyledInput
        type="text"
        placeholder="Search for minimalist chair"
        className="div-input"
        ref={ref}
      />
    </StyledBox>
  );
});

export default DivInput;

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.down('sm')]: {},
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '11px 16px',
  marginLeft: '12px',

  [theme.breakpoints.down('sm')]: {
    top: '-20px',
    right: '-24px',
    background: 'white',
    padding: '8px',
    borderRadius: '10px',
    cursor: 'pointer',
  },
}));

export const StyledInput = styled('input')(({ theme }) => ({
  paddingTop: '13px',
  paddingBottom: '13px',
  zIndex: 100,
  // vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(5)})`,
  fontFamily: `'Raleway', 'sans-serif'`,
  border: 'none',
  outline: 'none',
  fontSize: '14px',
  [theme.breakpoints.down('sm')]: {
    width: '252px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '80%',
    paddingRight: '10px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '95%',
  },
  [theme.breakpoints.up('xl')]: {
    width: '100%',
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  marginLeft: '12px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    left: '-205px',
    top: '27px',
  },
}));
