import React from 'react'
import styled, { css } from 'styled-components'

class SlideSwitch extends React.Component {
  state = {
    prevChild: () => {},
    prevPageKey: '',
    isAnimating: false,
  }
  constructor(props) {
    super(props)
    this.node = React.createRef()
  }

  componentDidMount() {
    this.node.current.addEventListener('transitionend', this.onTransitionEnd)
  }

  componentDidUpdate(prevProps) {
    const { pageKey } = this.props

    if (prevProps.pageKey !== pageKey) {
      // yes we detect page change!
      this.setState({
        prevChild: prevProps.children,
        // 以前参照していたURLを持たせないと、prevPageも常に最新のURLを参照していることになる
        prevPageKey: prevProps.pageKey,
        isAnimating: true,
      })
    }
  }

  componentWillUnmount() {
    this.node.current.removeEventListener('transitionend', this.onTransitionEnd)
  }

  onTransitionEnd = () => {
    this.setState({ isAnimating: false, prevChild: () => {}, prevPageKey: '' })
  }

  render() {
    const { pageKey } = this.props
    const { prevPageKey, isAnimating } = this.state
    return (
      <PageWrapper animateStart={isAnimating} ref={this.node}>
        {prevPageKey && (
          <PrevPage>{this.state.prevChild(this.state.prevPageKey)}</PrevPage>
        )}
        <CurPage hasPrev={prevPageKey}>{this.props.children(pageKey)}</CurPage>
      </PageWrapper>
    )
  }
}

const PageWrapper = styled.div`
  position: relative;
  ${({ animateStart }) =>
    animateStart &&
    css`
      transform: translateX(-100%);
      transition: all 1s;
    `};
`

const Page = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`

const PrevPage = styled(Page)`
  left: 0;
`
// nextButtonを押す
// PrevPage--画面外--CurPage と画面外にCurPageを用意しておく
const CurPage = styled(Page)`
  left: ${({ hasPrev }) => (hasPrev ? `100%` : 0)};
`

export default SlideSwitch
