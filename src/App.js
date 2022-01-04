import Button from "./components/button";

function App(props) {
  return (
    <div className="container fs-h3 fw-bold text-primary-3">
      <Button value={`Ini Button`}/>
      <Button disabled value={`Ini Button`}/>
      <Button nofill value={`Ini Button`}/>
    </div>
  );
}

export default App;
