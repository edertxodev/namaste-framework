import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import $ from 'jquery'
import { defaultInputStyles, DefaultLabel, InputContainer, getUniqueID } from './defaults'

interface IInputProps {
  label?: string
  value?: string
  error?: boolean
  onChange?: (change: any) => void
}

const DefaultInput = styled.input`
  ${defaultInputStyles}
  background-image: none;
  &.hidden {
    display: none;
    visibility: hidden;
  }
`

export const TextInput = (props: IInputProps) => {
  const [inputState, setInputState] = useState({ value: '', filledFromChild: false })
  const uniqueId = getUniqueID()

  useEffect(() => {
    if ($) {
      if ($(`#${uniqueId}`).val()) {
        $(`#${uniqueId}`).addClass('filled')
      } else {
        $(`#${uniqueId}`).removeClass('filled')
      }
      $(`#${uniqueId}`).keyup(function() {
        if ($(this).val()) {
          $(this).addClass('filled')
        } else {
          $(this).removeClass('filled')
        }
      })
    }
    if (!inputState.value && !inputState.filledFromChild) {
      setInputState({ value: props.value ? props.value : '', filledFromChild: true })
    }
  }, [$, inputState, setInputState])

  const handleInputChange = (e: any) => {
    const value = e.target.value
    setInputState({...inputState, value: value})
  }

  return (
    <InputContainer>
      <DefaultInput type="text" value={inputState.value} onChange={handleInputChange} id={uniqueId} />
      {props.label && <DefaultLabel id={`${uniqueId}__label`}>{props.label}</DefaultLabel>}
    </InputContainer>
  )
}
