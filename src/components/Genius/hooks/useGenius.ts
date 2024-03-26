import { RefObject, useEffect, useRef, useState } from 'react'

import erroSound from '../../../assets/failure-drum-sound-effect-1-46093.mp3'

const useGenius = () => {
    // states
    const [playerName, setPlayerName] = useState('')
    const [gameStarted, setGameStarted] = useState(false)
    const [gameFinished, setGameFinished] = useState(false)
    const [countdown, setCountdown] = useState(3)
    const [playIndex, setPlayIndex] = useState(0)
    const [points, setPoints] = useState(0)
    const [sequence, setSequence] = useState<string[]>([])

    // refs
    const greenRef = useRef(null)
    const redRef = useRef(null)
    const yellowRef = useRef(null)
    const blueRef = useRef(null)

    // sounds e atribuição de key para cada sound 
    interface SoundMap {
        [key: string]: HTMLAudioElement
    }

    const sounds: SoundMap = {
        green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
        red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
        yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
        blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    }

    const soundError = new Audio(erroSound)

    const colors = ["green", "red", "yellow", "blue"]

    // Defini a sequência aleatória de cores
    const randomColorSequence = () => {
        const color = colors[Math.floor(Math.random() * 4)]
        const newSequence = [...sequence, color]
        setSequence(newSequence)
    }

    // Função para iniciar o jogo, caso o jogador preencha seu nome, e assim iniciando o countdown em 3 e chamando a randomColorSequence
    const startGame = () => {
        if (playerName.length <= 0) {
            setGameStarted(false)
            alert('Por favor insira seu nome')
        } else if (playerName.length > 10) {
            setGameStarted(false)
            alert('O nome inserido é muito grande')
        } else {
            setCountdown(3)
            setGameStarted(true)
            randomColorSequence()
        }
    }

    // Atualiza a página se o jogador clicar no botão de reiniciar
    const restartGame = () => {
        window.location.reload()
    }

    // Finaliza o jogo quando o jogador erra a sequência, assim limpando também o array de sequência.
    const finishGame = () => {
        setGameFinished(true)
        setSequence([])
        setPlayIndex(0)
    }

    // Atribui o valor das cores em strings para os refs das cores
    const getColorBoxRef = (color: string): React.RefObject<HTMLDivElement> | null => {
        switch (color) {
            case "green":
                return greenRef
            case "red":
                return redRef
            case "yellow":
                return yellowRef
            case "blue":
                return blueRef
            default:
                return null
        }
    }

    // Função responsável pelo click do jogador nos BOXES de cores, verifica os acertos de cores/sequência, para continuar ou finalizar o jogo, e acumula os pontos do jogador.
    const handleClick = (color: string) => {
        if (gameStarted && countdown <= 0) {
            const colorBoxRef = getColorBoxRef(color)

            if (colorBoxRef && colorBoxRef.current) {
                const sound = sounds[color]
                sound.play()

                colorBoxRef.current.style.filter = "brightness(170%)"

                setTimeout(() => {
                    if (colorBoxRef && colorBoxRef.current) {
                        colorBoxRef.current.style.filter = "brightness(100%)"

                        if (sequence[playIndex] === color) {
                            if (playIndex === sequence.length - 1) {
                                setTimeout(() => {
                                    setPlayIndex(0)
                                    randomColorSequence()
                                }, 250)
                            } else {
                                setPlayIndex(playIndex + 1)
                            }

                            setPoints(points + 1)
                        } else {
                            finishGame()
                            soundError.play()
                        }
                    }
                }, 250)
            }
        }
    }

    // Inicia e finaliza o countdown para o inicio do jogo
    useEffect(() => {
        if (gameStarted && countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1)
            }, 1000)

            return () => clearTimeout(timer)
        }
    }, [countdown, gameStarted])

    // Cria as sequencias de cores, tanto no inicio, quando durante novas sequencias
    useEffect(() => {
        const showSequence = (index = 0) => {
            let ref: RefObject<HTMLDivElement> | null = null

            // passando os valores dos refs, e tocando o audio de acordo com os índices das cores.
            if (sequence[index] === "green") {
                ref = greenRef
                const sound = sounds[sequence[index]]
                sound.play()
            } else if (sequence[index] === "red") {
                ref = redRef
                const sound = sounds[sequence[index]]
                sound.play()
            } else if (sequence[index] === "yellow") {
                ref = yellowRef
                const sound = sounds[sequence[index]]
                sound.play()
            } else if (sequence[index] === "blue") {
                ref = blueRef
                const sound = sounds[sequence[index]]
                sound.play()
            }

            setTimeout(() => {
                if (ref && ref.current) {
                    ref.current.style.filter = "brightness(170%)"

                    setTimeout(() => {
                        if (ref && ref.current) {
                            ref.current.style.filter = "brightness(100%)"

                            if (index < sequence.length - 1) {
                                showSequence(index + 1)
                            } else {
                                setPlayIndex(0)
                            }
                        }
                    }, 350)
                }
            }, 350)
        }

        if (countdown === 0 && sequence.length > 0) {
            showSequence()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sequence, gameStarted, sounds.greenBox, sounds.redBox, sounds.yellowBox, sounds.blueBox, countdown])

    return {
        greenRef,
        redRef,
        blueRef,
        yellowRef,
        gameFinished,
        points,
        gameStarted,
        countdown,
        playerName,
        setPlayerName,
        startGame,
        handleClick,
        restartGame,
    }
}

export default useGenius