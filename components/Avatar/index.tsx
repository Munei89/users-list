import styled from 'styled-components';

type ImgProps = {
    size?: number;
};

const Avatar = styled.img<ImgProps>`
  width: ${(props: any) => props.size}px;
  border-radius: 50%;
`;

export default Avatar;
