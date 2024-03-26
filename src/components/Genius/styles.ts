import styled from "styled-components";
import { Colors, breakpoints } from "../../styles";

export const GeniusContainer = styled.div`
    margin-top: 40px;
    padding: 24px;
    border-radius: 16px;
    width: 80%;
    position: relative;

    @media (max-width: ${breakpoints.celphone}) {
        margin: 24px auto;
        padding: 16px;
        width: 100%;
    }
`

export const GeniusContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;

    div {
        padding: 120px;
        cursor: pointer;
        transition: 0.2s ease;

        &:hover {
            transition: 0.2s ease;
            transform: scale(1.02);
        }
    }

    @media (max-width: ${breakpoints.celphone}) {
        div {
            padding: 60px;
        }
    }
`

export const GameInfos = styled.div`
    position: absolute;
    left: 35%;
    top: 25%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background-color: ${Colors.black};
    border-radius: 50%;
    border: 2px solid ${Colors.gray};
    height: 280px;
    width: 280px;

    input {
        transition: 0.2s;

        &::placeholder {
            color: ${Colors.gray};
        }

        &:hover {
            transform: scale(1.03);
            transition: 0.2s;
            color: ${Colors.white};
        }

        &:focus {
                transform: scale(1.03);
                transition: 0.4s;
                border-color: ${Colors.gray};

                &::placeholder {
                    color: transparent
                }
            }
    }

    button {
        transition: 0.4s;

        &:hover {
            filter: brightness(120%);
            transform: scale(1.03);
            transition: 0.4s;
        }

        &.restartButton {
            &:hover {
                background-color: ${Colors.red};
                color: ${Colors.white};
            }
        }

        &.playAgainButton {
            &:hover {
                background-color: ${Colors.green};
                color: ${Colors.white};
            }
        }
    }

    p {
        font-size: 20px;
        color: ${Colors.white};
        padding: 16px 0;
        font-weight: bold;
    }

    @media (max-width: ${breakpoints.tablet}) {
        left: 25%;
        top: 25%;
    }

    @media (max-width: ${breakpoints.celphone}) {
        left: 30%;
        top: 30%;
        height: 120px;
        width: 120px;
        gap: 2px;

        input {
            font-size: 10px;
            padding: 4px;
            width: 80%;

            &::placeholder {
                font-size: 8px;
            }
        }

        button {
            font-size: 8px;
            padding: 4px;
            width: 80%;

            &.restartButton,
            &.playAgainButton {
                font-size: 6px;
                padding: 4px;
                width: 60%;
            }

            &.playAgainButton {
                width: 75%;
            }
        }

        p {
            font-size: 8px;
            text-align: center;
            padding: 6px 0;
        }
    }
`

export const PlayerPoints = styled.p`
    font-size: 20px;
    color: ${Colors.white};
    padding: 16px 0;
    font-weight: bold;
    text-align: center;

    span {
        display: block;
        margin-top: 4px;
        font-size: 54px;
        color: ${Colors.lightgreen};
    }

    @media (max-width: ${breakpoints.celphone}) {
        span {
            font-size: 24px;
            margin: 0 auto;
        }
    }
`

export const CountdownContent = styled.span`
    font-size: 80px;
    color: ${Colors.white};
    padding: 16px 0;
    font-weight: bold;
    text-align: center;

    @media (max-width: ${breakpoints.celphone}) {
        font-size: 54px;
    }
`