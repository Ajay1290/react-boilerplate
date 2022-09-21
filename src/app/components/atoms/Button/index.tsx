/**
 * Button
 */
import * as React from 'react';
import styled from 'styled-components/macro';

export default function Button(props) {
  return <Div>{props.children}</Div>;
}

const Div = styled.div``;
