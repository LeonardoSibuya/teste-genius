import { useEffect, useState } from 'react'

import * as S from './styles'

import { Colors } from '../../styles'
import { Box, Button, Input, } from '@chakra-ui/react'


const Genius = () => {
    const [playerName, setPlayerName] = useState('')
    const [gameStarted, setGameStarted] = useState(false)
    const [gameFinished, setGameFinished] = useState(false)
    const [countdown, setCountdown] = useState(3)

    const startGame = () => {
        if (playerName.length <= 0) {
            setGameStarted(false)
            alert('Por favor insira seu nome')
        } else if (playerName.length > 10) {
            setGameStarted(false)
            alert('O nome inserido é muito grande')
        } else {
            setGameStarted(true)
            setCountdown(3);
        }
    }

    const restartGame = () => {
        window.location.reload();
    }

    const finishGame = () => {
        setGameFinished(true)
    }

    useEffect(() => {
        if (gameStarted && countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [countdown, gameStarted]);

    return (
        <S.GeniusContainer>
            <S.GeniusContent>
                <Box
                    borderRadius="240px 10px 10px 10px"
                    backgroundColor={`${Colors.green}`}
                />
                <Box
                    borderRadius="10px 240px 10px 10px"
                    backgroundColor={`${Colors.red}`}
                    onClick={finishGame}
                />
                <Box
                    borderRadius="10px 10px 10px 240px"
                    backgroundColor={`${Colors.yellow}`}
                />
                <Box
                    borderRadius="10px 10px 240px 10px"
                    backgroundColor={`${Colors.blue}`}
                />
            </S.GeniusContent>

            <S.GameContent>
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
            </S.GameContent>
        </S.GeniusContainer >
    )
}

export default Genius