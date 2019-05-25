import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'

const Page = ({
  match: {
    params: { id },
  },
  pageKey,
  question: { title },
}) => {
  return (
    <Wrapper>
      <div>Page:{pageKey}</div>
      <div>{title}</div>
      <div>
        <Link to={`/${Number(id) + 1}`}>next page</Link>
      </div>
      <div>
        <Link to="1">back first page</Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  background-color: #e8f5e9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`

const getIdFromPageKey = PageKey => {
  // スラッシュを除去
  return PageKey.replace(/\//, '')
}
// idからqを返す、ない場合は適当にからのオブジェクト
const getQuestion = (questions, id) =>
  questions.find(q => q.id === id) || { title: 'page not found' }

const mapStateToProps = (state, props) => {
  const { pageKey } = props
  // pageKeyは/idでスラッシュがついちゃってる
  const id = getIdFromPageKey(pageKey)
  return { question: { ...getQuestion(state.questions, id) } }
}

export default connect(mapStateToProps)(Page)
