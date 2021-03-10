
import './App.css';
import Form from './components/Form';
import List from './components/List';

const App = (props) => {
  <div>    
    <div>
      <h2>React-Redux List</h2>
      <List/>
    </div>
    <div>
      <h2>Add a new article</h2>
    <Form/>
    </div>
  </div>
}
export default App;
