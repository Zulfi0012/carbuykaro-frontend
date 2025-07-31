import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostPage from "./pages/PostPage";
import Videos from "./pages/Videos";
import VideoPage from "./pages/VideoPage";
import CreatePost from "./pages/CreatePost";
import CreateVideo from "./pages/CreateVideo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/videos/:id" element={<VideoPage />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/create-video" element={<CreateVideo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
