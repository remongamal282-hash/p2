import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";
import Footer from "./components/Footer";

export default function App() {
  const entryElements = data.map((entry) => {
    return <Entry key={entry.key} {...entry} />;
  });

  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
      <Footer />
    </>
  );
}
