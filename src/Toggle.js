import React from "react";
import styled, {ThemeProvider} from "styled-components";

const DarkModeButton = styled.button`
  background: ${({theme}) => theme.backgroundcolor};
  color: ${({theme}) => theme.color};
  border-radios: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

const Toggle = ({themeLabel, toggleTheme}) => {
    let label = ['Mudar para ', themeLabel === 'Branco' ? 'Escuro' : 'Branco'].join('');
	return (
		<DarkModeButton onClick={toggleTheme}>
            {label}
		</DarkModeButton>
	);	
}

export default Toggle; 