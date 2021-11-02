import moment from "moment";
import styled from "styled-components";

export const InputNumberStyle = styled.div`
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button { 
	-webkit-appearance: none;
}
`

export const TODAY = moment().utc(false).format('YYYY-MM-DD')

export const TIME_TODAY = moment().utc(false).format('H:mm')