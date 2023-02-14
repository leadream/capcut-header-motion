import styled, { keyframes } from 'styled-components'
import ThinChevronDown from './ThinChevronDown'

const breathing = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const AnimatingDown = styled(ThinChevronDown)`
  animation: ${breathing} 2.4s ${({delay=0}: {delay?: number})=>delay}s linear infinite;
`

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-12px);
  display: flex;
  flex-direction: column;
  svg:first-child {
    margin-bottom: -12px;
  }
`

function ScrollIndicator () {
  return (
    <Container>
      <AnimatingDown/>
      <AnimatingDown delay={1.2}/>
    </Container>
  )
}

export  default ScrollIndicator
