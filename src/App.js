import "./styles.css";
import Form from "./Form";

const movies = [
  {
    name: "Avenger",
    available: 5,
    quantity: 0
  },
  {
    name: "Depradador",
    available: 3,
    quantity: 3
  }
];

export default function App() {
  return (
    <div>
      <h2>Peliculas </h2>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </div>
  );
}
