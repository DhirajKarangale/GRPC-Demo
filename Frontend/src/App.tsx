import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import GRPC from './components/GPRC';

function App() {
 
  return (
    <main className="container py-4" role="main" aria-label="Main Content" style={{ overflowX: "hidden" }}>
      <GRPC />
    </main>
  );
}

export default App;