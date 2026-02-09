import { Welcome } from "./Welcome.jsx";
import Button from "./Button.jsx";
import { Hello, HelloWithoutJSX } from "./Hello.jsx";
import { UserProfile } from "./UserProfile.jsx";
import { ContactForm } from "./ContactForm.jsx";
import { StyledForm } from "./StyledForm.jsx";
import { CandidateProfile } from "./CandidateProfile.jsx";
import { Product } from "./Product.jsx";
import { Greeting } from "./Greeting.jsx";
import { CardWrapper } from "./CardWrapper.jsx";
import { UserDetails } from "./UserDetails.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <UserDetails
        name="Bruce Wayne"
        isOnline={true}
        isPremium={true}
        isNewUser={true}
        role="admin"
      />
      <UserDetails
        name="Clark Kent"
        isOnline={true}
        hideOffline={true}
        role="vip"
      />
      <CardWrapper title="User Profile">
        <p>Bruce Wayne</p>
        <p>batmail.com</p>
        <button>Edit profile</button>
      </CardWrapper>

      <Greeting name="Bruce" message="Goodmorning" />
      <Greeting name="Clark" />
      <Greeting message="Welcome" />
      <Greeting />
      <Product
        title="Gaming Laptop" // strings use double quote & everything else is curly braces, array is curly braces and []
        price={1299.99}
        inStock={true}
        categories={["Electronics", "Computers", "Gaming"]}
      />
      <Welcome name="Bruce" alis="Batman" />
      <Welcome name="Clark" alias="Superman" />
      <Welcome name="Diana" alias="Wonder Woman" />
      <CandidateProfile />
      <StyledForm />
      <ContactForm />
      <UserProfile />
      <Hello />
      <HelloWithoutJSX />
      <Button />
    </div>
  );
}

export default App;
