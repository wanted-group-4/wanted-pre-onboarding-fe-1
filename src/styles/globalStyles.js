import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 input {
   width:100%;
 }
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }
`;

export default GlobalStyles;
