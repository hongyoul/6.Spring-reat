import React from 'react'
import { CustomCard, CustomContainer } from '../components/Styles'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useContext } from 'react';
import { Context } from '../index';

const BoardDetail = () => {
  
  // 게시물 데이터
  // API를 통해서 게시물 데이터를 조회
  // 조회한 데이터를 화면에 표시!
  const [board, setBoard] = useState(null);

  const navigate = useNavigate();

  const {host} = useContext(Context);

  // URL에 포함되어 있는 파라미터 가져오기
  const params = useParams();

  // 게시물 조회 API 호출
  // useEffect: 컴포넌트가 생성될 때 코드를 한번만 실행
  useEffect(()=>{

    // 함수의 정의
    const apiCall = async()=>{

      // 조회는 get
      // 인자: 주소, 헤더 + 파라미터
      // 주소: /board/read?no=1 
      const response = await axios.get(
        `${host}/board/read?no=${params.no}`,
        {
          headers: { 
            Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzIwNjIxMDYsImV4cCI6MTczNDY1NDEwNiwic3ViIjoidXNlciJ9.BN_x6oJJOHXGsn3KvksSxglToFy-k47_lIbJAtpHfdI'
          }
        }
      );
      if(response.status === 200) {
        setBoard(response.data); // state 업데이트
      } else {
        throw new Error(`api error: ${response.status} ${response.statusText}`);
      }

    }

    // 함수 호출
    apiCall();

  },[]);

  return (
    <CustomCard>
      <CustomContainer>
        <h3>게시물 상세</h3>

        { 
          board!==null && 
          <Form>
            <Form.Group className="mb-3" controlId="board.no">
              <Form.Label>번호</Form.Label>
              <Form.Control type="text" value={board.no} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="board.title">
              <Form.Label>제목</Form.Label>
              <Form.Control type="text" value={board.title} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="board.content">
              <Form.Label>내용</Form.Label>
              <Form.Control as="textarea" rows={3} value={board.content} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="board.writer">
              <Form.Label>작성자</Form.Label>
              <Form.Control type="text" value={board.writer} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="board.regDate">
              <Form.Label>등록일</Form.Label>
              <Form.Control type="text" value={board.regDate} readOnly/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="board.modDate">
              <Form.Label>수정일</Form.Label>
              <Form.Control type="text" value={board.modDate} readOnly/>
            </Form.Group>

            <Button variant="primary" onClick={ ()=>{
              navigate(`/board/modify/${board.no}`);
            }} >수정</Button>

          </Form>
          
        }

      </CustomContainer>
    </CustomCard>
  )
}

export default BoardDetail