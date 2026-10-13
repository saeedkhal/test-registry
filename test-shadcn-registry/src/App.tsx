import { Button } from "./components/ui/button";
import { DirectionProvider, useDirection } from "./components/ui/direction";
import { Select, SelectContent, SelectValue, SelectTrigger, SelectItem } from "./components/ui/select";

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
      <Select>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    </main>
  );
}

export default App;
