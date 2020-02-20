import React from 'react'
import Typing from 'react-typing-animation'
import {
    MrRobotEOT,
    MrRobotSVG,
    MrRobotTTF,
    MrRobotWOFF,
    MrRobotWOFF2,
} from '../css/fonts'
import styled from '@emotion/styled'

const Hello = styled.span`
    @font-face {
        font-family: 'MrRobot';
        src: local('MrRobot'), url(${MrRobotTTF}), format('truetype');
        src: url(${MrRobotEOT});
        src: url('MrRobot.eot?#iefix') format('embedded-opentype'),
            url(${MrRobotWOFF2}) format('woff2'),
            url(${MrRobotWOFF}) format('woff'), url(${MrRobotSVG}) format('svg');
        font-weight: normal;
        font-style: normal;
        display: block;
    }
`
const Welcome = () => (
    <Typing>
        <Hello>Hello friend</Hello>
        <Typing.Delay ms={3000} />
        <Typing.Backspace count={12} />
        <Hello>Welcome to RussJr.io</Hello>
    </Typing>
)

export default Welcome
