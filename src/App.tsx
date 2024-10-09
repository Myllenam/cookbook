import { AppThemeProvider, Router } from "./providers";


function App() {
  return (
    <AppThemeProvider>
      <Router />
    </AppThemeProvider>
  );
}

export default App;
