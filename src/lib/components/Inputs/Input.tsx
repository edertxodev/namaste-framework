import React, { useState } from 'react'
import styled from 'styled-components'

interface IInputProps {
  label?: string
  placeholder?: string
  error?: boolean
}

const DefaultInput = styled.input`
  background-color: #fff;
  border: none;
  border-bottom: 1px solid #333;
  padding: 10px;
  float: left;
  width: 100%;
  font-size: 1em;
  transition: border-bottom-width 10ms ease;
  &:focus {
    border-bottom-width: 3px;
    color: transparent;
  }
  &:hover {
    border-bottom-width: 3px;
  }
`

const DefaultLabel = styled.label`
  clear: both;
  float: left;
  padding: 0 5px;
  margin: -15px auto auto 20px;
  background-color: #fff;
`

const InputContainer = styled.div`
  width: 100%;
  padding: 10px 5px;
`

export const TextInput = (props: IInputProps) => {
  const [state, setState] = useState({ focused: false })

  const handleFocus = () => {
    setState({ focused: !state.focused })
  }

  return (
    <InputContainer>
      <DefaultInput placeholder={props.placeholder} onFocus={handleFocus} onBlur={handleFocus} />
      {(props.label && state.focused) && <DefaultLabel>{props.label}</DefaultLabel>}
    </InputContainer>
  )
}
