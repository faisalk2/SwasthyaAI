import React from 'react'

const List = ({data}) => {
  return (
    <div>
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
    <th>Date</th>
  </tr>
  {data.length==0?   <tr>
    <td>company</td>
    <td>contract</td>
    <td>country</td>
    <td>Date</td>
  </tr>:""}
  {data.map((ele)=>{
    return (
        <tr>
    <td>{ele.company}</td>
    <td>{ele.constact}</td>
    <td>{ele.country}</td>
    <td>{ele.data}</td>
  </tr>
    )
  })}
</table>
    </div>
  )
}

export default List