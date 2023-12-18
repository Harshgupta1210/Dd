// import { AuthProvider } from './contexts';
import Routes from './router/Routes';

const App =() => {
  return (
    <div className="App">
      {/* <AuthProvider>  */}
        <Routes/>
      {/* </AuthProvider> */}
    </div>
  );
  
}

export default App;
