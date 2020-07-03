import styled from 'styled-components'
import { Flex } from '@minily/tools'

const Body = {
  Container: styled.div`
    font-family: ${p => p.theme.fonts.numans};
    color: #ffffff;
    padding-bottom: 100px;

    @media only screen and (min-width: 576px) {
      padding-bottom: 0px;

      h1 {
        font-size: 4rem;
      }

      p {
        font-size: 1rem;
      }
    }
  `,

  Title: styled.div`
    font-family: ${p => p.theme.fonts.hammer};
    font-size: 2rem;
    color: ${p => p.theme.colors.yellow};
    ${Flex.container('center', 'center')};
  `,

  Content: styled.div`
    text-align: left;
    padding: 0 3%;
    ${Flex.container('center', 'center', { direction: 'column' })};
  `,
}

const Brand = styled.img`
  width: 8rem;
  margin: 20px;

  @media only screen and (min-width: 576px) {
    width: 18rem;
  }
`

export { Body, Brand }
