import React from 'react'

const TableHead = ({ nombres }) => {


    return (
        <>
            {nombres.map((nombre, index) => (
                <th key={index} scope='col'>{ nombre }</th>
            ))}
        </>
    )
}

export default TableHead
