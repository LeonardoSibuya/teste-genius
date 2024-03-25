import styled, { createGlobalStyle } from 'styled-components'

export const Colors = {
    background: '#0D1117',
    red: '#C52828',
    yellow: '#FDD834',
    blue: '#0377BC',
    green: '#2E7D32',
    white: '#fff',
    black: '#000',
    gray: '#CFD8DC'
}

export const breakpoints = {
    tablet: '1024px',
    celphone: '760px'
}

const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Inter', sans-serif;
    }

    body {
        background-color: ${Colors.background};
        padding: 32px 0;
    }
`
export default GlobalStyle

export const Container = styled.div`
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 95%;
    }
`
