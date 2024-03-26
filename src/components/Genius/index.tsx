import { RefObject, useEffect, useRef, useState } from 'react'

import * as S from './styles'

import { Colors } from '../../styles'
import { Box, Button, Input, } from '@chakra-ui/react'

const Genius = () => {
    const [playerName, setPlayerName] = useState('')
    const [gameStarted, setGameStarted] = useState(false)
    const [gameFinished, setGameFinished] = useState(false)
    const [countdown, setCountdown] = useState(3)
    const [sequence, setSequence] = useState<string[]>([])
    const [playIndex, setPlayIndex] = useState(0)
    // const [points, setPoints] = useState(0)
    const colors = ["green", "red", "yellow", "blue"]

    const greenRef = useRef(null)
    const redRef = useRef(null)
    const yellowRef = useRef(null)
    const blueRef = useRef(null)

    const randomColor = () => {
        const color = colors[Math.floor(Math.random() * 4)]
        const newSequence = [...sequence, color];
        setSequence(newSequence)
    }

    const startGame = () => {
        if (playerName.length <= 0) {
            setGameStarted(false)
            alert('Por favor insira seu nome')
        } else if (playerName.length > 10) {
            setGameStarted(false)
            alert('O nome inserido é muito grande')
        } else {
            setCountdown(3);
            setGameStarted(true)
            randomColor();
        }
    }

    const restartGame = () => {
        window.location.reload();
    }

    const finishGame = () => {
        setGameFinished(true)
        setSequence([])
        setPlayIndex(0)
    }

    const getColorBoxRef = (color: string): React.RefObject<HTMLDivElement> | null => {
        switch (color) {
            case "green":
                return greenRef;
            case "red":
                return redRef;
            case "yellow":
                return yellowRef;
            case "blue":
                return blueRef;
            default:
                return null;
        }
    };

    const handleClick = (color: string) => {
        if (gameStarted && countdown <= 0) {
            const colorBoxRef = getColorBoxRef(color)

            if (colorBoxRef && colorBoxRef.current) {
                colorBoxRef.current.style.filter = "brightness(170%)";

                setTimeout(() => {
                    if (colorBoxRef && colorBoxRef.current) {
                        colorBoxRef.current.style.filter = "brightness(100%)";

                        if (sequence[playIndex] === color) {
                            if (playIndex === sequence.length - 1) {
                                setTimeout(() => {
                                    setPlayIndex(0)
                                    randomColor()
                                }, 300);
                            } else {
                                setPlayIndex(playIndex + 1);
                            }
                        } else {
                            finishGame();
                        }
                    }
                }, 300);
            }
        }
    };

    useEffect(() => {
        if (gameStarted && countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [countdown, gameStarted]);

    useEffect(() => {
        const showSequence = (index = 0) => {
            let ref: RefObject<HTMLDivElement> | null = null;

            if (sequence[index] === "green") ref = greenRef;
            else if (sequence[index] === "red") ref = redRef;
            else if (sequence[index] === "yellow") ref = yellowRef;
            else if (sequence[index] === "blue") ref = blueRef;

            setTimeout(() => {
                if (ref && ref.current) {
                    ref.current.style.filter = "brightness(170%)";

                    setTimeout(() => {
                        if (ref && ref.current) {
                            ref.current.style.filter = "brightness(100%)";

                            if (index < sequence.length - 1) {
                                showSequence(index + 1);
                            } else {
                                setPlayIndex(0);
                            }
                        }
                    }, 300);
                }
            }, 300);
        };

        showSequence()
    }, [sequence, gameStarted]);

    return (
        <S.GeniusContainer>
            <S.GeniusContent>
                <Box
                    ref={greenRef}
                    borderRadius="240px 10px 10px 10px"
                    backgroundColor={`${Colors.green}`}
                    onClick={() => handleClick("green")}

                />
                <Box
                    ref={redRef}
                    borderRadius="10px 240px 10px 10px"
                    backgroundColor={`${Colors.red}`}
                    onClick={() => handleClick("red")}
                />
                <Box
                    ref={yellowRef}
                    borderRadius="10px 10px 10px 240px"
                    backgroundColor={`${Colors.yellow}`}
                    onClick={() => handleClick("yellow")}
                />
                <Box
                    ref={blueRef}
                    borderRadius="10px 10px 240px 10px"
                    backgroundColor={`${Colors.blue}`}
                    onClick={() => handleClick("blue")}
                />
            </S.GeniusContent>

            <S.GameInfos>
                {gameFinished ? (
                    <>
                        <S.PlayerPoints>
                            Sua pontuação final:
                            <span>
                                160
                            </span>
                        </S.PlayerPoints>

                        <Button
                            type="button"
                            padding="12px"
                            width="60%"
                            textTransform="uppercase"
                            borderRadius="16px"
                            border="none"
                            letterSpacing="1px"
                            textAlign="center"
                            fontWeight="bold"
                            fontSize="12px"
                            color={`${Colors.white}`}
                            textShadow="1px 1px 3px #000"
                            backgroundColor={`${Colors.green}`}
                            cursor="pointer"

                            onClick={restartGame}
                        >
                            Jogar novamente
                        </Button>
                    </>
                ) : (
                    <>
                        {gameStarted ? (
                            <>
                                {countdown > 0 ? (
                                    <>
                                        <S.CountdownContent>
                                            {countdown}
                                        </S.CountdownContent>
                                    </>
                                ) : (
                                    <>
                                        <p>
                                            Boa Jogo, {playerName}!
                                        </p>

                                        <Button
                                            type="button"
                                            padding="12px"
                                            width="50%"
                                            textTransform="uppercase"
                                            borderRadius="16px"
                                            border="none"
                                            letterSpacing="1px"
                                            textAlign="center"
                                            fontWeight="bold"
                                            color={`${Colors.white}`}
                                            textShadow="1px 1px 3px #000"
                                            backgroundColor={`${Colors.red}`}
                                            cursor="pointer"

                                            onClick={restartGame}
                                        >
                                            Reiniciar
                                        </Button>
                                    </>
                                )}
                            </>
                        ) : (
                            <>
                                <Input
                                    placeholder="Insira seu nome"
                                    padding="16px"
                                    textAlign="center"
                                    borderRadius="16px 16px 0 0"
                                    border="none"
                                    fontWeight="bold"
                                    color={`${Colors.black}`}
                                    outline="none"
                                    width="80%"
                                    fontSize="18px"
                                    onChange={(e) => setPlayerName(e.target.value)}
                                />
                                <Button
                                    type="button"
                                    padding="16px"
                                    width="80%"
                                    textTransform="uppercase"
                                    borderRadius="0 0 16px 16px"
                                    border="none"
                                    letterSpacing="1px"
                                    textAlign="center"
                                    fontWeight="bold"
                                    color={`${Colors.white}`}
                                    textShadow="1px 1px 3px #000"
                                    backgroundColor={`${Colors.blue}`}
                                    cursor="pointer"

                                    onClick={startGame}
                                >
                                    Iniciar
                                </Button>
                            </>
                        )}
                    </>
                )}
            </S.GameInfos>
        </S.GeniusContainer >
    )
}

export default Genius