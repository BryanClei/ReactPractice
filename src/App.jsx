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
import { ProductList } from "./ProductList.jsx";
import { NameList } from "./NameList.jsx";
import { TodoList } from "./TodoList.jsx";
import { Alert } from "./Alert.jsx";
import { CustomButton } from "./CustomButton.jsx";
import { Contact } from "./Contact.jsx";
import { NewsLetter } from "./NewsLetter.jsx";
import "./App.css";
import { NewButton } from "./NewButton.jsx";
import { Menu } from "./Menu.jsx";
import { Counter } from "./Counter.jsx";
import { LoginCard } from "./LoginCard.jsx";
import { SimpleCounter } from "./SimpleCounter.jsx";
import { PrevStateCounter } from "./PrevStateCounter.jsx";
import { BatchingCounter } from "./BatchingCounter.jsx";
import { ShoppingCart } from "./ShoppingCart.jsx";
import { CounterWithReducer } from "./CounterWithReducer.jsx";
import { ShoppingCartWithReducer } from "./ShoppingCartWithReducer.jsx";
import { CounterWithInIt } from "./CounterWithInIt.jsx";

function App() {
  return (
    <div>
      <h1>Codevolution</h1>
      <CounterWithInIt />
      {/* <ShoppingCartWithReducer /> */}
      {/* <CounterWithReducer /> */}
      {/* <ShoppingCart /> */}
      {/* <TodoList /> */}
      {/* <UserProfile /> */}
      {/* <BatchingCounter /> */}
      {/* <SimpleCounter /> */}
      {/* <PrevStateCounter /> */}
      {/* <LoginCard />
      <Counter /> */}
      {/* <Menu />
      <Contact />
      <NewsLetter />
      <CustomButton text="Like" />
      <CustomButton text="Bookmark" />
      <Alert>Your changes have been saved</Alert>
      <Alert type="error">Something Went Wrong</Alert>
      <NewButton />
      <TodoList />
      <NameList />
      <ProductList />
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
        title="Gaming Laptop" // strings use double quote & everything else is curly braces, array is curly braces and [] hehe
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
      <Button /> */}
    </div>
  );
}

export default App;
