import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Layout from '../Container/Container';
import Header from '../Header/Header';
import Section from '../Section/Section';

import { selectContacts } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Wrapper } from './App.styled';

const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
        <Header title="Contacts" />
        {contacts.length > 0 ? (
          <>
            <Filter />
          </>
        ) : (
          <Wrapper>
            Unfortunately, your phone book is empty. Please add your first
            contact!
          </Wrapper>
        )}
        {contacts.length > 0 && <ContactList />}
      </Section>
      <ToastContainer />
    </Layout>
  );
};
export default App;
