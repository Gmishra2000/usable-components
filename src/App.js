import './App.css';
import Carousel from './components/Caraousel';
import Accordion from './components/accordion/Accordion';
import AccordionItem from "./components/accordion/AccordionItem"
function App() {
  return (
    <div className="App">
      <Carousel
        carouselItems={[
          <div>carousel item 1</div>,
          <div>carousel item 2</div>,
          <div>carousel item 3</div>
        ]}
      />
      <Accordion defaultIndex="1" onItemClick={console.log}>
        <AccordionItem label="A" index="1">
          Lorem ipsum
        </AccordionItem>
        <AccordionItem label="B" index="2">
          Dolor sit amet
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
