import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Table from "./Components/Table";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
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
      <Header />
      <Content />
      <Form />
      <Table />
      <Footer />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Challenge />);
