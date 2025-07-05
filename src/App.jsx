import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <h1 className="text-2xl font-bold">Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
}

export default App;
