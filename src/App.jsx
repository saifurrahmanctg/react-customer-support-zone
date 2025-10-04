import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

const ticketData = fetch("/tickets.json").then((res) => res.json());

function App() {
  const ticketPromise = ticketData;

  return (
    <>
      {/* Header section */}
      <header className="bg-base-100 shadow-sm">
        <Navbar />
      </header>

      {/* Main section */}
      <section className="bg-[#F5F5F5]">
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-3 text-gray-600 font-medium">
                Loading Tickets...
              </p>
            </div>
          }
        >
          <MainContainer ticketPromise={ticketPromise} />
        </Suspense>
      </section>

      {/* Footer section */}
      <section className="footer bg-black">
        <Footer />
      </section>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
