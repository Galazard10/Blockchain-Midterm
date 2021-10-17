import HomeContainer from "./HomeContainer";
import MyOrders from "./MyOrders";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Container */}
      <HomeContainer />
    </div>
  );
}

export default App;