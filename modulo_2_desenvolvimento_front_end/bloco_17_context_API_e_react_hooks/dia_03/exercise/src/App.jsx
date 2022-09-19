import { useEffect, useState } from 'react';
import List from './components/List';
import emails from './data/emails';

function App() {
  const [emailsList, setEmailsList] = useState(emails)

  const setRead = (id) => {
    const setEmails = emailsList.map((email) => {
      if(email.id === id) {
        return { ...email, status: 1}
      }
      return email
    })
    setEmailsList(setEmails);
  }

  const setUnread = (id) => {
    const setEmails = emailsList.map((email) => {
      if(email.id === id) {
        return { ...email, status: 0}
      }
      return email
    })
    setEmailsList(setEmails);
  }

  useEffect(() => {
    const isAllMessagesRead = emailsList.every((email) => email.status === 1);

    if (isAllMessagesRead) {
      alert('Parabéns! Você leu todas suas mensagens!');
    }
  }, [emailsList])
  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>
      <section>
        <List emails={emailsList} setRead={setRead} setUnread={setUnread}/>
       </section>
    </div>
  );
}

export default App;
