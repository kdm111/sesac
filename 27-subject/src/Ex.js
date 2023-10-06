import { useState } from 'react';

const Ex = () => {
  const [inputs, setInputs] = useState({
    writer: '',
    title: '',
    search: '',
  }); // 하나의 state로 input 여러개 관리하기
  const { writer, title, search } = inputs; // 객체 구조분해
  const [comment, setComment] = useState([
    {
      writer: '민수',
      title: '안뇽',
    },
    {
      writer: '지민',
      title: '하이하이',
    },
    {
      writer: '희수',
      title: '멋쟁이',
    },
  ]);
  const [result, setResult] = useState([]);
  const [searchType, setSearchType] = useState('writer');

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const addComment = () => {
    const newComment = {
      writer,
      title,
    };

    setComment([...comment, newComment]);
    setInputs({
      ...inputs,
      writer: '',
      title: '',
    }); // input 초기화
  };

  const searchComment = () => {
    let searchResult = comment.filter((item) => {
      // console.log(item); // comment에 대한 각 원소(객체)
      // console.log(item[searchType]); // 검색 조건(key)에 대한 value 값
      // console.log(item[searchType].includes(search)); // true or false

      if (!item[searchType].includes(search)) {
        return null; // 검색결과 없음; null 반환
      }

      return item; // 검색결과 있음; 검색결과(배열) 반환
    });

    setResult(searchResult); // 검색 결과 state 설정
    setInputs({
      ...inputs,
      search: '',
    });
  };

  const selectSearchType = (e) => {
    setSearchType(e.target.value); // select option 상태 설정
  };

  return (
    <div style={{ margin: '200px 0' }}>
      <form>
        <label htmlFor="wirter2">작성자:</label>
        <input
          id="wirter2"
          type="text"
          name="writer"
          value={writer}
          onChange={onChange}
        />
        <label htmlFor="title2">제목:</label>
        <input
          id="title2"
          type="text"
          name="title"
          value={title}
          onChange={onChange}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <form>
        <select name="type" onChange={selectSearchType}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>

        <input
          type="text"
          name="search"
          placeholder="검색어"
          value={search}
          onChange={onChange}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>

      <h3>전체 댓글 목록</h3>
      <table border={1} style={{ margin: '30px auto', width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            // value = { writer: xxx , titlex: xxx };
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>댓글 검색 결과</h3>
      {result.length > 0 ? (
        <div>
          <table border={1} style={{ margin: '30px auto', width: '500px' }}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
              </tr>
            </thead>
            <tbody>
              {result.map((value, idx) => {
                // value = { writer: xxx , title: xxx };
                return (
                  <tr key={idx + 1}>
                    <td>{idx + 1}</td>
                    <td>{value.title}</td>
                    <td>{value.writer}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h5>검색 결과가 없습니다.</h5>
      )}
    </div>
  );
};

export default Ex;