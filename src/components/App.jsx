import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


function App() {
  const contacts = useSelector(state => state.contacts.item);

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 20,
      color: '#010101',
    }}>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length === 0 ? (
        <h2>
          You have 0 contacts
        </h2>
      ) : (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
}
export default App;