import React from 'react';
import { Wrapper } from './UserAverage.styles';

const UserAverage = ({ average }) => <Wrapper average={average}>{average}</Wrapper>;

export default UserAverage;
