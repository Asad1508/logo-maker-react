import React, { useState } from 'react'
import ColorPicker from 'react-best-gradient-color-picker'

const ColorPickerController = ({selectedColor}) => {
    const [color, setColor] = useState('')
  return (
    <div>
      <ColorPicker value={color} onChange={(e)=>{setColor(e); selectedColor(e)}}/>
    </div>
  )
}

export default ColorPickerController