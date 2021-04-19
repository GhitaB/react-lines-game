import './App.css';

function Header() {
  return (
    <div class="header">
      <h1>Notes App</h1>
      <h3>Quick notes</h3>
    </div>
  );
}

function Notes() {
  return (
    <div class="notes" contenteditable="true">
      <div id="quick-notes">Click and edit</div>
    </div>
  );
}

function Footer() {
  return (
    <div class="footer">
      <p>Just for fun.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
