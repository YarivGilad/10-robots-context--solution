import { Link } from "react-router-dom";
import styled from "styled-components";

export const Links = () => (
  <Ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/browse">Browse</Link>
    </li>
    <li>
      <Link to="/create">Create</Link>
    </li>
  </Ul>
);

// const SLink = styled(Link)`
//   color: mintcream;
// `;

// const Links = () => (
//   <Nav>
//     <li>
//       <Link to="/">Home</Link>
//     </li>
//     <li>
//       <Link to="/about">About</Link>
//       {/* <a href="/about">About</a> */}
//     </li>
//     <li>
//       <Link to="/contact">Contact</Link>
//     </li>
//   </Nav>
// );

// export default Links;

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: "Yanone Kaffeesatz";
  font-weight: 400;
  font-size: 2.8rem;
  width: 30rem;
  justify-content: space-between;
  a {
    color: mintcream;
  }
`;
