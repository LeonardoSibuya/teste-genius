import * as S from './styles'
import useGenius from './hooks/useGenius'

import { Colors } from '../../styles'
import { Box, Button, Input, } from '@chakra-ui/react'

const Genius = () => {

    const {
        blueRef,
        countdown,
        gameFinished,
        gameStarted,
        greenRef,
        playerName,
        points,
        redRef,
        yellowRef,
        handleClick,
        restartGame,
        setPlayerName,
        startGame,
    } = useGenius()

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