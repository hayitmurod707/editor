import { useState } from 'react';
import styled from 'styled-components';
import Editor from './Editor';
const StyledElement = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
	& .editor-container {
		width: 650px;
	}
`;
const App = () => {
	const [value, setValue] = useState('');
	return (
		<StyledElement>
			<h1>Editor (with tinymce)</h1>
			<div className='editor-container'>
				<Editor value={value} setValue={setValue} />
			</div>
		</StyledElement>
	);
};
export default App;
