import Layout from './containers/MainContent/Layout';
import GlobalCssPriority from './nesto';
import './reset.css';

function App() {
  GlobalCssPriority()
  return (
    <div className="App">
        <Layout />
    </div>
  );
}

export default App;
