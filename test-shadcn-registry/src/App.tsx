import { Button } from "./components/ui/button";
import { DirectionProvider, useDirection } from "./components/ui/direction";

function App() {
  return (
    <DirectionProvider direction="rtl">
      <Layout />
    </DirectionProvider>
  );
}

function Layout() {
  const direction = useDirection();

  return (
    <main>
      direction = {direction}
      <Button>Click sdfdsf</Button>
    </main>
  );
}

export default App;
