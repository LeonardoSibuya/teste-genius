import { RefObject, useEffect, useRef, useState } from 'react'

import * as S from './styles'

import { Colors } from '../../styles'
import { Box, Button, Input, } from '@chakra-ui/react'

import erroSound from '../../assets/failure-drum-sound-effect-1-46093.mp3'

const Genius = () => {
    const [playerName, setPlayerName] = useState('')
    const [gameStarted, setGameStarted] = useState(false)
    const [gameFinished, setGameFinished] = useState(false)
    const [countdown, setCountdown] = useState(3)
    const [playIndex, setPlayIndex] = useState(0)
    const [points, setPoints] = useState(0)
    const [sequence, setSequence] = useState<string[]>([])
    // const [audio, setAudio] = useState(new Audio('https://cdn.pixabay.com/audio/2022/12/17/audio_43e9af63f3.mp3'));


    interface SoundMap {
        [key: string]: HTMLAudioElement;
    }
    const sounds: SoundMap = {
        green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
        red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
        yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
        blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    };

    const soundError = new Audio(erroSound)

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
                const sound = sounds[color];
                sound.play();

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

                            setPoints(points + 1)
                        } else {
                            finishGame();
                            soundError.play();
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

            let sound: HTMLAudioElement | null = null;

            if (sequence[index] === "green") {
                ref = greenRef;
                sound = sounds.greenBox;
            } else if (sequence[index] === "red") {
                ref = redRef;
                sound = sounds.redBox;
            } else if (sequence[index] === "yellow") {
                ref = yellowRef;
                sound = sounds.yellowBox;
            } else if (sequence[index] === "blue") {
                ref = blueRef;
                sound = sounds.blueBox;
            }

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

        if (countdown === 0 && sequence.length > 0) {
            showSequence();
        }
    }, [sequence, gameStarted, sounds.greenBox, sounds.redBox, sounds.yellowBox, sounds.blueBox, countdown]);


    return (
        <S.GeniusContainer>
            <S.GeniusContent>
                <Box
                    ref={greenRef}
                    borderRadius="80px 10px 10px 10px"
                    backgroundColor={`${Colors.green}`}
                    onClick={gameFinished ? undefined : () => handleClick("green")}
                />
                <Box
                    ref={redRef}
                    borderRadius="10px 80px 10px 10px"
                    backgroundColor={`${Colors.red}`}
                    onClick={gameFinished ? undefined : () => handleClick("red")}
                />
                <Box
                    ref={yellowRef}
                    borderRadius="10px 10px 10px 80px"
                    backgroundColor={`${Colors.yellow}`}
                    onClick={gameFinished ? undefined : () => handleClick("yellow")}
                />
                <Box
                    ref={blueRef}
                    borderRadius="10px 10px 80px 10px"
                    backgroundColor={`${Colors.blue}`}
                    onClick={gameFinished ? undefined : () => handleClick("blue")}
                />
            </S.GeniusContent>

            <S.GameInfos>
                {gameFinished ? (
                    <>
                        <S.PlayerPoints>
                            Sua pontuação final:
                            <span>
                                {points}
                            </span>
                        </S.PlayerPoints>

                        <Button
                            type="button"
                            className="playAgainButton"
                            padding="12px"
                            width="60%"
                            textTransform="uppercase"
                            borderRadius="16px"
                            border={`1px solid${Colors.green}`}
                            color={`${Colors.green}`}
                            backgroundColor="transparent"
                            letterSpacing="1px"
                            textAlign="center"
                            fontWeight="bold"
                            fontSize="12px"
                            textShadow="1px 1px 3px #000"
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
                                            Bom Jogo, {playerName}!
                                        </p>

                                        <Button
                                            type="button"
                                            className="restartButton"
                                            padding="12px"
                                            width="50%"
                                            textTransform="uppercase"
                                            borderRadius="16px"
                                            border={`1px solid${Colors.red}`}
                                            color={`${Colors.red}`}
                                            backgroundColor="transparent"
                                            letterSpacing="1px"
                                            textAlign="center"
                                            fontWeight="bold"
                                            textShadow="1px 1px 3px #000"
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
                                    border={`1px solid ${Colors.blue}`}
                                    fontWeight="normal"
                                    letterSpacing="1px"
                                    color={`${Colors.white}`}
                                    backgroundColor={`${Colors.black}`}
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