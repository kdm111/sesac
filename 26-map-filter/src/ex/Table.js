const Table = (props) => {
  const {data} = props
  return (
    <table>
      <tr>
        <th>번호</th>
        <th >제목</th>
        <th>작성자</th>
      </tr>
      {data.map((el, idx) => {
        return (
          <tr key={idx}>
            <td>{idx+1}</td>
            <td>{el.title}</td>
            <td>{el.name}</td>
          </tr>
        )
      })}
  </table>
  )
}
export default Table