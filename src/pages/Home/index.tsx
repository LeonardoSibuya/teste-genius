import * as S from './styles'

import Genius from "../../components/Genius"
import { Container } from "../../styles"

const Home = () => {
    return (
        <Container>
            <S.Section>
                <Genius />
            </S.Section>
        </Container>
    )
}

export default Home