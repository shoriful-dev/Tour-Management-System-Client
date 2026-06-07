import { Outlet } from "react-router";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div>
      <h1>This is a React app</h1>
      <Button>click me</Button>
      <Outlet/>
    </div>
  )
}

export default App;
