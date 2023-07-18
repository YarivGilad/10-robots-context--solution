import styled from "styled-components";

export function Create(){
    return <H1>Create</H1>
}

const H1 = styled.h1`
  text-shadow: 2px 2px 10px rgba(71, 0, 37, 0.2);
  color: coral;
  font-size: 7rem;
  padding-left: 1rem;
  background: -webkit-linear-gradient(gold, coral);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;