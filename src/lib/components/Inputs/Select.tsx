import React, { useEffect } from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import { defaultInputStyles, InputContainer, getUniqueID } from './defaults'
import Dropdown, { ReactDropdownProps } from 'react-dropdown'
import { Colors } from '../Styles'

const DefaultSelect = styled(Dropdown)`
  ${defaultInputStyles}
  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance:none;
	-moz-appearance:none;
	cursor: pointer;
	.Dropdown-menu {
		position: absolute;
		width: 100%;
		margin-top: 9px;
		left: 0;
		.Dropdown-option {
			border-bottom: 1px solid ${Colors.input.border.default};
			padding: 10px;
			&:hover {
				background-color: ${Colors.input.background.hover};
			}
		}
	}
`

export const SelectInput = (props: ReactDropdownProps) => {
	const uniqueId = getUniqueID()

	useEffect(() => {
		if ($) {
			if ($(`.${uniqueId}`).val() !== '') {
				$(`.${uniqueId}`).addClass('filled')
			} else {
				$(`.${uniqueId}`).removeClass('filled')
			}
			$(`.${uniqueId}`).change(function() {
				if ($(this).val()) {
					$(this).addClass('filled')
				} else {
					$(this).removeClass('filled')
				}
			})
		}
	}, [$])

	return (
		<InputContainer>
			<DefaultSelect options={props.options} placeholder={props.placeholder} className={uniqueId} />
		</InputContainer>
	)
    }