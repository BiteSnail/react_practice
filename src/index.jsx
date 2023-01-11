import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { MainPage } from './MainPage';

const user = {
  username:"박정현",
  userImgPath:"https://avatars.githubusercontent.com/u/55152597?v=4",
  birth:"2000-07-04",
  introduce: "백엔드 프로그래머를 지향하고 있는 충북대학교 학생입니다.",
  tag: ["IT", "백엔드", "학생", "COSMIC"]
}

const items = [
  {
    src:"https://img1.daumcdn.net/thumb/C280x280.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/5tdm/image/awCx6_lLVT4xus0_HP36eWQ_wjg.png",
    title: "내 정보",
    preview: "운동의 시작은 오늘부터",
    createDate: "2000-07-04"
  },
  {
    src:"https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Ftvcast.phinf%2F20230104_273%2Fn9o7c_16728336929071Tu7t_JPEG%2F63b563a675681c5f2e39f913_upload_1672832008406.jpeg%22&type=nf464_260",
    title: "TV 드라마",
    preview: "다르 ㄴ사모님을 찾아가 손정미을 ",
    createDate: "2023-01-04"
  },
  {
    src:"https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Ftvcast.phinf%2F20230104_113%2FigP1F_16728135918990o4pD_JPEG%2Fclip_20230104151431_9.jpg%22&type=nf464_260",
    title: "TV 예능",
    preview: "김남희 연기에 과몰입한",
    createDate: "2023-01-03"
  }
];


ReactDOM.render((
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage items={items} user={user}/>}></Route>
          <Route path="/*" element={<h1>Not Found</h1>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>)
,document.getElementById('root')
);