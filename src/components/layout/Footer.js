import styled from "styled-components";
const StyledNav = styled.div`
  a {
    margin-right: 0.5rem;
  }

  &:last-child {
    margin: 0;
  }
`;
const StyledFooter = styled.div`
  width: 100%;
  padding: 2.5rem;
  color: #7e91ae;
  text-align: center;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const CodedWith = styled.div`
  margin: 0.7rem 0;
`;
function Footer() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <StyledFooter>
        <StyledNav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </StyledNav>
        <CodedWith>Coded with React and Style Components 💅</CodedWith>
        <div>
          &copy; March 2024 - {months[new Date().getMonth()]}{" "}
          {new Date().getFullYear()}
        </div>
      </StyledFooter>
    </>
  );
}

export default Footer;
