import closed from '../icons/closed.svg';
import opened from '../icons/opened.svg';
import '../styles/List.css';

function List({emails, setRead, setUnread}) {
  return (
    <ul>
      {emails.map(({ id, title, status }) => (
          <div key={id}>
          <li>
            <p
              className={status === 0 ? 'unread' : 'read'}
            >
              {title}
            </p>
          </li>
          <button
            type='button'
            title='Marcar como lida'
            onClick={() => setRead(id)}
          >
            <img src={closed} alt="" style={{ width: "30px"}}/>
          </button>
          <button
            type='button'
            title='Marcar como não lida'
            onClick={() => setUnread(id)}
          >
            <img src={opened} alt=""  style={{ width: "30px"}}/>
          </button>
        </div>
      ))}
    </ul>
  )
}

export default List