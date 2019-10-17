import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import $ from 'jquery'

interface IInputProps {
  label?: string
  value?: string
  error?: boolean
}

interface ISelectOption {
  value: string | number
  text: string
}

interface ISelectProps {
  label?: string
  error?: boolean
  options: ISelectOption[]
  empty?: boolean
}

const defaultStyles = `
  display: block;
  width: 100%;
  padding: .5rem .75rem;
  font-size: 1rem;
  line-height: 1.25;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: none;
  border-bottom: 1px solid rgba(0,0,0,.15);
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  &:focus, &:hover {
    border-bottom: 3px solid rgba(0,0,0,.5)
  }
  &:focus + label, &.filled + label {
    font-size: 75%;
    transform: translate3d(0, 100%, 0);
    padding-top: 13px;
    padding-left: 10px;
    opacity: 1;
  }
`

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`

const DefaultInput = styled.input`
  ${defaultStyles}
  background-image: none;
`

const DefaultLabel = styled.label`
  position: absolute;
  top: 0;
  padding-top: 7px;
  transition: all 200ms;
  opacity: 0.5;
  display: inline-block;
  margin-bottom: .5rem;
  cursor: text;
`

const DefaultSelect = styled.select`
  ${defaultStyles}
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
`

export const TextInput = (props: IInputProps) => {
  const [inputState, setInputState] = useState({ value: '', filledFromChild: false })
  const uniqueId = '_' + Math.random().toString(36).substr(2, 9)

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
      $(`#${uniqueId}__label`).click(function() {
        $(this).parent().find('input').click()
      })
    }
    if (!inputState.value && !inputState.filledFromChild) {
      setInputState({ value: props.value ? props.value : '', filledFromChild: true })
    }
  }, [$, inputState, setInputState])

  const handleInputChange = (e: any) => {
    const value = e.target.value
    setInputState({...inputState, value: value})
    console.log(inputState)
  }

  return (
    <InputContainer>
      <DefaultInput type="text" value={inputState.value} onChange={handleInputChange} id={uniqueId} />
      {props.label && <DefaultLabel id={`${uniqueId}__label`}>{props.label}</DefaultLabel>}
    </InputContainer>
  )
}

export const SelectInput = (props: ISelectProps) => {
  const uniqueId = '_' + Math.random().toString(36).substr(2, 9)

  useEffect(() => {
    if ($) {
      if ($(`#${uniqueId}`).val() !== '') {
        $(`#${uniqueId}`).addClass('filled')
      } else {
        $(`#${uniqueId}`).removeClass('filled')
      }
      $(`#${uniqueId}`).change(function() {
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
      <DefaultSelect id={uniqueId}>
        {props.empty && <option value=""></option>}
        {props.options.map((item, index) => {
          return (
            <option key={index} value={item.value}>{item.text}</option>
          )
        })}
      </DefaultSelect>
      {props.label && <DefaultLabel id={`${uniqueId}__label`}>{props.label}</DefaultLabel>}
    </InputContainer>
  )
}
