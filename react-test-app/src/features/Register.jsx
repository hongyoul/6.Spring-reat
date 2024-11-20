import React from 'react'
import { CustomCard, CustomContainer } from '../components/Styles'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Context } from '../index';
import { useContext } from 'react';

// 회원가입 컴포넌트

const Register = () => {

  // 새로운 회원 정보
  const [member, setMember] = useState(null);

  // 입력필드의 이벤트 함수
  const handleChang = (event) => {

    console.log(event.target);
  }



  return (

    <CustomCard>
      <CustomContainer>
      <h3>회원가입</h3>
      <Form>
        <Form.Group className="mb-3" controlId="member.id">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="text" onChange={handleChang}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="member.password">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" onChange={handleChang}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="member.name">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" onChange={handleChang}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="member.role">
          <Form.Check
            type="radio"
            label="사용자" 
            id="member.role1"
            name="role"
            value="ROLE_USER" onChange={handleChang}
          />
          <Form.Check
            type="radio"
            label="관리자" 
            id="member.role2"
            name="role"
            value="ROLE_ADMIN" onChange={handleChang}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      </CustomContainer>
    </CustomCard>
    
  )
}

export default Register