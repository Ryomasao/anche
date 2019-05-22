import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Page = ({
  match: {
    params: { id },
  },
  pageKey,
}) => (
  <Wrapper>
    <div>Page:{pageKey}</div>
    <div>
      <Link to={`/${Number(id) + 1}`}>next page</Link>
    </div>
    <div>
      <Link to="1">back first page</Link>
    </div>
  </Wrapper>
)

const Wrapper = styled.div`
  height: 100vh;
  background-color: #e8f5e9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`

export default Page
