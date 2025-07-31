import styled from "styled-components";

export const Input = (props) => {
  const { placeholder = "" } = props;
  retuen(<SInput type="text" placeholder={placeholder} />);
};

const SInput = styled.input`
  padding: 8px 16px;
  boder: solid #ddd 1px;
  border-radius: 9999px;
  outoline: none;
`;
