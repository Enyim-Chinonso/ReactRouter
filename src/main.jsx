import { createRoot } from "react-dom/client";
import App from "./App";
import Navbar from "./Components/Navbar";
import Main from "./Components/main";



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

function Challenge() {
  return (
    <>
     <Navbar />
     <Main />
      
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
