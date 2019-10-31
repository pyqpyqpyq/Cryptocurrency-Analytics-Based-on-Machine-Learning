// @flow

import React from 'react';
import styled from 'styled-components';
import { textColor } from "../style/colors";

// this table is coded by CSS
type Prop = {
    columns: {
        [key: string]: {
            key: string,
            label?: string,
            align?: "center" | "right" | "left",
            width?: number,  
        }
    },
    data: Array<Object>
};

const T = styled.table`
    width: 100%;
`;

const Th = styled.th`
    color: ${textColor};
    font-size: 18px;
    font-weight: 700;
    text-align: ${props => props.align ? props.align : 'left'};
    width: ${props => props.width && `${props.width}px`}
`;

const Tr = styled.tr`

`;

const Td = styled.td`

`;

const Table = ({ columns, data }: Prop) => {
    const headerColumns = () => 
         Object.keys(columns).map(key => (
            <Th align={columns[key].align} width={columns[key].width}>
                {columns[key].label}
            </Th>
        ));
    const cell = (item, key) => 
        <Td> 
            {item[key]} 
        </Td>
    const row = (item) => 
        <Tr>
            {Object.keys(columns).map(key => cell(item, key))}
        </Tr>;

    return(
        <T>
            <thead>
                <tr>{headerColumns()}</tr>     
            </thead>
            <tbody>
                {data.map(item => row(item))}
            </tbody>
        </T>
    );
}

export default Table