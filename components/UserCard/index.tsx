import React from 'react';
import styled from 'styled-components';

import ContentWrapper from '../ContentWrapper';
import CardWrapper from '../CardWrapper';
import StyledText from '../StyledText';
import Avatar from '../Avatar';

interface Props {
    data?: any;
}

const UserCard: React.FC<Props> = ({ data }) => {
    return (
        <ContentWrapper>
            <CardWrapper>
                <Avatar src={data.picture} size={120} />
                <StyledText size={28}>{data.name}</StyledText>
                <StyledText size={20}>{data.email}</StyledText>
                <StyledText size={20}>{data.phone}</StyledText>
                <StyledText size={18}>{data.gender?.toUpperCase()}</StyledText>
                <RowDiv>
                    <ColumnDiv>
                        <StyledText size={18} color={'#9b9b9b'}>
                            Age
                        </StyledText>
                        <StyledText size={18}>{data.age} Years</StyledText>
                    </ColumnDiv>
                </RowDiv>
                <RowDiv>
                    <ColumnDiv>
                        <StyledText size={18}>ADDRESS</StyledText>
                        <StyledText size={18} color={'#9b9b9b'}>
                            {data.location?.street?.number}, {data.location?.street?.name},<br />
                            {data.location?.city}, {data.location?.state},<br />
                            {data.location?.country}, {data.location?.postcode}
                        </StyledText>
                    </ColumnDiv>
                </RowDiv>
            </CardWrapper>
        </ContentWrapper>
    );
};

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 16px;
  width: 100%;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default UserCard;
