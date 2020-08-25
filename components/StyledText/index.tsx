import styled from 'styled-components';

type TextProps = {
    size?: number;
    color?: string;
};

const StyledText = styled.span<TextProps>`
  font-size: ${(props: any) => props.size}px;
  color: ${(props: any) => (props.color ? props.color : '#000')};
  font-weight: 400;
  margin-top: 12px;
  text-align: center;
`;

export default StyledText;
