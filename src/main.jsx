import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Pages/Layout";
// import Home from "./Pages/Home";
// import Blogs from "./Pages/Blogs";
// import Contact from "./Pages/Contact";
// import NoPage from "./Pages/NoPage";


// export default function App() {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="blogs" element={<Blogs />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="*" element={<NoPage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     );
//   }

function Challenge () {
  return (
    <div>
      <header>
        <img src="src/assets/IMG_20240131_095209_547.jpg" width={200} alt="image" />
      </header>
      
      <main>
        <h1>My Career Path</h1>
        <ol>
          <li>My name is Enyim Chinonso.</li>
          <li>I am a professional Software Engineer.</li>
          <li>I write HTML, CSS, Bootstrap, javaScript and React.</li>
          <li>I work with an Ameerican company that pays me $80,000 annually.</li>
          <li>I am the future of Tech in Nigeria, A frica and worldwide.</li> 
        </ol>
      </main>

      <footer>
      <small>© 2024 BachelorTech development. All rights reserved.</small>

      </footer>
    </div>
  );
}

  
  const root = createRoot(document.getElementById('root'));
  root.render(<Challenge />);