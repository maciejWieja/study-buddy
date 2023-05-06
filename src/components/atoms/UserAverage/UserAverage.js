import React from 'react';
import { Wrapper } from './UserAverage.style';

const UserAverage = ({ average }) => <Wrapper average={average}>{average}</Wrapper>;

export default UserAverage;
