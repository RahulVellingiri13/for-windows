import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import FormPage from "./components/FormPage"
import FAQComponent from './components/FAQComponent';
import FooterComponent from './components/FooterComponent';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';

function App() {
  return (
   <div>
   <Page1/>
   <Page2/>
   <Page3/>
   <Page4/>
   <Page5/>
   <FormPage/>
   <FAQComponent/>
   <FooterComponent/>
   </div>
  );
}

export default App;
