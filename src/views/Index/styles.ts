import styled from 'styled-components'
import { Flex } from '@minily/tools'

const Copyright = styled.div`
  position: fixed;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  font-family: ${p => p.theme.fonts.numans};
  color: ${p => p.theme.colors.light};
  font-size: 0.6rem;

  @media only screen and (min-width: 576px) {
    font-size: 0.8rem;
  }
`

const Social = {
  Container: styled.div`
    height: 30px;
    padding: 10px;
    ${Flex.container('center', 'center')};
  `,

  Button: styled.a`
    margin: 5px;

    i {
      transition: 0.3s;

      :hover {
        color: ${p => p.color};
      }
    }
  `,
}

export { Copyright, Social }
