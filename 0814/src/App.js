import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function Article(props) {
  // console.log('props', props, props.title, props.body)
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

// export default Article extends Component {

// };

function Header(props) {
  // console.log('props', props, props.title);
  return (
    <header>
      <h1><a href='/' onClick={(event) => {
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  )
}

function Nav(props) {
  const list = [
  ]
  for (let i = 0; i < props.to.length; i++) {
    let t = props.to[i];
    list.push(<li key={t.id}>
      <a id={t.id} href={'/read' + t.title} onClick={event => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>)
  }
  return (
    <nav>
      <ol>
        {list}
      </ol>
    </nav>
  )
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={event => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type='text' name='title' placeholder='title' /></p>
        <p><textarea name='body' placeholder='body' /></p>
        <p><input type='submit' value='Create'></input></p>
      </form>
    </article>
  )
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={event => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p><input type='text' name='title' placeholder='title' value={title} onChange={(event => {
          setTitle(event.target.value);
        })} /></p>
        <p><textarea name='body' placeholder='body' value={body} onChange={(event => {
          setBody(event.target.value)
        })} /></p>
        <p><input type='submit' value='Update'></input></p>
      </form>
    </article>
  )
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ])
  let content = null;
  let contextControl = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB" />
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} />
    contextControl = <>
      <li><a href={'/update/' + id} onClick={event => {
        event.preventDefault();
        setMode('UPDATE');
      }}>Update</a></li>
      <li><input type='button' value='Delete' onClick={() => {
        const newTopics = [];
        for (let i = 0; i < topics.length; i++) {
          if (topics[i].id !== id) {
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode('WELCOME');
      }} /></li>
    </>
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body) => {
      const newTopic = {
        id: nextId,
        title: _title,
        body: _body
      }
      const newTopics = [...topics]
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId + 1);
    }} />
  } else if (mode === 'UPDATE') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body) => {
      console.log(title, body);
      const newTopics = [...topics];
      const updatedTopic = { id: id, title: title, body: body }
      for (let i = 0; i < newTopics.length; i++) {
        if (newTopics[i].id === id) {
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');

    }} />
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={() => {
        setMode('WELCOME');
      }} />
      <Nav to={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id);
      }} />
      {content}
      <ul>
        <li><a href='/create' onClick={event => {
          event.preventDefault();
          setMode('CREATE');
        }}>Create</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
