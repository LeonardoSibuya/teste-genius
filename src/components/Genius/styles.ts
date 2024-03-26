import styled from "styled-components";
import { Colors } from "../../styles";

export const GeniusContainer = styled.div`
    background-color: ${Colors.black};
    margin-top: 40px;
    padding: 24px;
    border-radius: 16px;
    width: 80%;
    position: relative;
    box-shadow: 1px 1px 8px ${Colors.black};
`

export const GeniusContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    div {
        padding: 120px;
        cursor: pointer;
        transition: 0.2s ease;

        &:hover {
            filter: brightness(160%);
            transition: 0.2s ease;
        }
    }
`

export const GameContent = styled.div`
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
        &::placeholder {
            color: ${Colors.black};
        }

        &:focus {
                &::placeholder {
                    color: ${Colors.white}
                }
            }
    }

    button {
        &:hover {
            filter: brightness(120%);
        }
    }

    p {
        font-size: 20px;
        color: ${Colors.white};
        padding: 16px 0;
        font-weight: bold;
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
`

export const CountdownContent = styled.span`
    font-size: 80px;
    color: ${Colors.white};
    padding: 16px 0;
    font-weight: bold;
    text-align: center;
`