import styled from "styled-components";
import { Colors } from "../../styles";

export const GeniusContainer = styled.div`
    background-color: ${Colors.black};
    padding: 24px;
    border-radius: 16px;
    width: 60%;
    position: relative;
    box-shadow: 1px 1px 8px ${Colors.black};
`

export const GeniusContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    div {
        padding: 100px;
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
    left: 33%;
    top: 25%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background-color: ${Colors.black};
    border-radius: 50%;
    height: 220px;
    width: 220px;

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
            filter: brightness(100%);
        }
    }
`