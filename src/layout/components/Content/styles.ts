import styled from 'styled-components'
import { Container } from '@minily/components'
import { Flex } from '@minily/tools'

const Wrapper = styled(Container)`
  position: relative;
  width: 100%;
  height: 100vh;
  grid-area: 'content';
  overflow-y: auto;
  ${Flex.container('space-between', 'initial', { direction: 'column' })};

  @media only screen and (min-width: 1140px) {
    width: calc(100% - 80px);
    padding: 20px;
    margin-left: 80px;
  }
`

export { Wrapper }
