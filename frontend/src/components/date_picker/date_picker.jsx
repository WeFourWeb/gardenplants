import React from 'react'
import { DatePicker as DatePickerANTD } from 'antd';

function onChange(date, dateString) {
  console.log(date, dateString);
}

const DatePicker = (props) => {
    return(
        <div>
    <DatePicker onChange={onChange} />
  </div>
    )
}

export default DatePicker