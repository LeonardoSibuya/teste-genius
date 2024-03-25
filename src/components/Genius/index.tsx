import * as S from './styles'

import { Colors } from '../../styles'

import { Box, Button, Input } from '@chakra-ui/react'

const Genius = () => {
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
                <Input 
                    placeholder="Insira seu nome"
                    padding="8px"
                    textAlign="center"
                    borderRadius="16px 16px 0 0"
                    border="none"
                    fontWeight="bold"
                    color={`${Colors.black}`}
                    outline="none"
                    width="80%"
                />
                <Button
                    type="button"
                    padding="8px"
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
                >
                    Iniciar
                </Button>
            </S.GameContent>
        </S.GeniusContainer>
    )
}

export default Genius