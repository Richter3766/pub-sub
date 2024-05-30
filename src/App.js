import './App.css';
import { Routes, Route } from 'react-router-dom'
import ChatRoom from "./page/ChatRoom";
import {MainPage} from "./page/MainPage";

function App() {
  return (
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/room/:roomId" element={<ChatRoom />} />
      </Routes>
  );
}

export default App;
