import { Welcome } from "./Welcome.jsx";
import Button from "./Button.jsx";
import { Hello, HelloWithoutJSX } from "./Hello.jsx";
import { UserProfile } from "./UserProfile.jsx";
import { ContactForm } from "./ContactForm.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <ContactForm />
      <UserProfile />
      <Hello />
      <HelloWithoutJSX />
      <Welcome />
      <Button />
    </div>
  );
}

export default App;
