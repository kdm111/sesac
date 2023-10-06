
const SearchBar = (props) => {
  return (
    <>
      <select>
        <option value="name">작성자</option>
        <option value="title">제목</option>
      </select>
      <input placeholder='검색어'/>
      <button
      >
        검색
      </button>
    </>
  )
}

export default SearchBar