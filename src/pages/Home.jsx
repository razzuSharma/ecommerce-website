import Navbar from "./Navbars";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="text-center m-20 font-bold text-5xl">
        Welcome
        <span className="grid text-xl mt-4 text-blue-400">To our website</span>
      </div>
      <p className="text-center items-center min-w-md">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe laborum
        atque suscipit nemo aliquid inventore temporibus totam neque cumque 
        delectus.
      </p>
      <div className="text-center text-2xl m-6">
        Go to the products tab to see our products 🚀
      </div>
    </div>
  );
}

export default Home;
