import { Editor } from '@tinymce/tinymce-react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import 'tinymce';
import 'tinymce/icons/default';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/help';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/image';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/template';
import 'tinymce/plugins/wordcount';
import contentCss from 'tinymce/skins/content/default/content.min.css';
import contentUICss from 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/themes/silver';
import './locales/en_GB';
import './locales/ru';
import './locales/uz';
const StyledElement = styled.div`
	& .tox-tinymce {
		border-radius: 8px;
		border: 1px solid #cccccc;
		height: 450px !important;
	}
	& .tox {
		& .tox-editor-header {
			z-index: initial;
			& .tox-mbtn {
				cursor: pointer;
				&:hover {
					background: #f7f8fc !important;
				}
			}
			& .tox-mbtn--active {
				background: #f7f8fc !important;
			}
			& .tox-mbtn__select-label {
				color: #696f85;
				cursor: pointer;
				font-size: 15px;
				font-weight: 500;
			}
			& .tox-toolbar__group {
				border: none !important;
			}
		}
		& .tox-tbtn--bespoke {
			& .tox-tbtn__select-label {
				color: #696f85;
				cursor: pointer;
				font-size: 15px;
				font-weight: 500;
				width: initial !important;
			}
		}
		& .tox-tbtn--enabled {
			background: #f7f8fc;
		}
		& .tox-tbtn {
			cursor: pointer !important;
			&:hover {
				background: #f7f8fc;
			}
			& svg {
				fill: #696f85 !important;
			}
		}
		& .tox-statusbar {
			display: none;
		}
	}
	& .wrs_tickContainer {
		display: none !important;
	}
`;
const init = {
	content_css: false,
	height: 450,
	menubar: 'file edit view insert format table tools help',
	paste_as_text: true,
	plugins:
		'paste codesample advlist autolink link image lists charmap anchor spellchecker searchreplace wordcount code fullscreen insertdatetime media nonbreaking table template help',
	skin: false,
	toolbar_mode: 'wrap',
	toolbar: [
		{
			items: ['undo', 'redo'],
			name: 'history',
		},
		{
			items: ['fontselect'],
			name: 'fontselect',
		},
		{
			className: 'fontsizeselect',
			items: ['fontsizeselect'],
			name: 'fontsizeselect',
		},
		{
			items: ['bold', 'italic', 'underline', 'strikethrough'],
			name: 'formatting',
		},
		{
			items: ['outdent', 'indent'],
			name: 'indentation',
		},
		{
			items: ['alignleft', 'aligncenter', 'alignright', 'alignjustify'],
			name: 'alignment',
		},
		{
			items: ['numlist', 'bullist', 'checklist'],
			name: 'list',
		},
		{
			items: ['table'],
			name: 'table',
		},
		{
			items: [
				'forecolor',
				'backcolor',
				'casechange',
				'permanentpen',
				'formatpainter',
				'removeformat',
			],
			name: 'colors',
		},
		{
			items: ['subscript', 'superscript'],
			name: 'math',
		},
		{
			items: ['tiny_mce_wiris_formulaEditor'],
			name: 'viris-math',
		},
		{
			items: ['tiny_mce_wiris_formulaEditorChemistry'],
			name: 'viris-chem',
		},
		{
			items: ['charmap'],
			name: 'chars',
		},
		{
			items: ['image', 'link'],
			name: 'file',
		},
	],
};
const Component = ({ setValue, value, onFocus }) => {
	const language = 'en_GB';
	return (
		<StyledElement>
			<Editor
				value={value}
				onFocus={onFocus}
				onEditorChange={setValue}
				init={{
					...init,
					// external_plugins: { tiny_mce_wiris: '/wiris.js' },
					content_style: [contentCss, contentUICss].join('\n'),
					language: language,
				}}
			/>
		</StyledElement>
	);
};
Component.defaultProps = {
	value: '',
};
Component.propTypes = {
	setValue: func.isRequired,
	value: string,
	onFocus: func,
};
export default Component;
