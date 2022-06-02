import React from 'react'

const Table = ({data}) => {
  return (
    <table>
        <tr>
            {Object.keys(data[0]).map((key)=>{
                return <th>{key}</th>
            })}
        </tr>
        {data.map((item)=>{
            return <tr>
                {Object.values(item).map((val)=>{
                    return ( <td>{val}</td>) 
                })}
            </tr>
        })}

    </table>
  )
}

export default Table