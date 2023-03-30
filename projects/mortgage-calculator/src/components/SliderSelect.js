import React from 'react'
import SliderComponent from './common/SliderComponent'


const calcDownPayment = (downPayment, homeValue) => {
    if (downPayment > homeValue * 0.8) {
        return homeValue * 0.8;
    }
    return downPayment
}

const SliderSelect = ({ data, setData }) => {
    return (
        <>
            <SliderComponent
                label="Home Value"
                unit="$"
                amount={data.homeValue}
                min={100000}
                max={1000000}
                value={data.homeValue}
                step={10000}
                onChange={(e, value) => setData({
                    ...data,
                    homeValue: value,
                    downPayment: calcDownPayment(data.downPayment, value),
                    loanAmount: value - calcDownPayment(data.downPayment, value)
                })}
            />
            <SliderComponent
                label="Down Payment"
                unit="$"
                min={0}
                max={data.homeValue * 0.8}
                value={data.downPayment}
                amount={data.downPayment}
                step={5000}
                onChange={(e, value) => setData({
                    ...data,
                    downPayment: value,
                    loanAmount: data.homeValue - value
                })}
            />
            <SliderComponent
                label="Loan Amount"
                unit="$"
                min={data.homeValue * 0.2}
                max={data.homeValue}
                value={data.loanAmount}
                amount={data.loanAmount}
                step={5000}
                onChange={(e, value) => setData({
                    ...data,
                    loanAmount: value,
                    downPayment: data.homeValue - value

                })}
            />
            <SliderComponent
                label="Interest Rate"
                unit="%"
                before={false}
                min={2}
                max={10}
                value={data.interestRate}
                amount={data.interestRate}
                step={0.1}
                onChange={(e, value) => setData({
                    ...data,
                    interestRate: value,
                })}
            />

        </>
    )
}

export default SliderSelect