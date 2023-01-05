import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Articles } from './Articles';
import { Header } from './Header';
import { Routes } from 'react-router-dom';
import { NavBar } from './NavBar';
import { Info } from './Info';
import { Magagine } from './Magagine';

const user = {
  username:"박정현",
  userImgPath:"https://avatars.githubusercontent.com/u/55152597?v=4",
  birth:"2000-07-04"
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
      <Header user={user}/>
        <main class="mainArc">
          <NavBar/>
        <Routes>
          <Route path="/" element={<Articles items={items}/>}></Route>
          <Route path="/info" element={<Info user={user}/>}/>
          <Route path="/magagine" element={<Magagine/>}/>
          <Route path="/*" element={<h1>Not Found</h1>}/>
        </Routes>
        </main>
    </BrowserRouter>
  </React.StrictMode>)
,document.getElementById('root')
);