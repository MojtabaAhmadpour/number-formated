"use client"
import { NumericFormat } from 'react-number-format';
import { useState } from 'react';


const NumberFormated = (props) => {
    return (
        <div className="">
            <NumericFormat
                value={props.priceValue}
                displayType="text"
                thousandSeparator=","
            />
        </div>
    )
}
export default NumberFormated;
const price = (val) => {
    const formatter = new Intl.NumberFormat("fa-IR");
    const formattedValue = formatter.format(val.replace(/,/g, ""));
    updateValue(formattedValue);
};

