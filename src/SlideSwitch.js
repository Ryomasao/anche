import React from 'react'

class SlideSwitch extends React.Component {
  state = {
    prevChild: () => {},
    prevPageKey: '',
  }
  componentDidUpdate(prevProps) {
    const { pageKey } = this.props

    if (prevProps.pageKey !== pageKey) {
      this.setState({
        prevChild: prevProps.children,
        // 以前参照していたURLを持たせないと、prevPageも常に最新のURLを参照していることになる
        prevPageKey: prevProps.pageKey,
      })
    }
  }

  render() {
    const { pageKey } = this.props
    return (
      <React.Fragment>
        {this.state.prevChild(this.state.prevPageKey)}
        {this.props.children(pageKey)}
      </React.Fragment>
    )
  }
}

export default SlideSwitch
