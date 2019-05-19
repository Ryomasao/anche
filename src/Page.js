import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Page = ({
  match: {
    params: { id },
  },
}) => (
  <Wrapper>
    <div>Page:{id}</div>
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

`

export default Page
