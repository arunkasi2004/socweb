import { useEffect, useState } from "react";
import pikachu from "@/assets/pikachu.png";
import gengar from "@/assets/gengar.png";
import charizard from "@/assets/charizard.png";
import lapras from "@/assets/lapras.png";
import dragonite from "@/assets/dragonite.png";
import snorlax from "@/assets/snorlax.png";

const pokemon = [
  { img: pikachu, name: "Pikachu", size: "w-20 h-20 md:w-24 md:h-24" },
  { img: gengar, name: "Gengar", size: "w-16 h-16 md:w-20 md:h-20" },
  { img: charizard, name: "Charizard", size: "w-24 h-24 md:w-28 md:h-28" },
  { img: lapras, name: "Lapras", size: "w-20 h-20 md:w-24 md:h-24" },
  { img: dragonite, name: "Dragonite", size: "w-20 h-20 md:w-24 md:h-24" },
  { img: snorlax, name: "Snorlax", size: "w-20 h-20 md:w-24 md:h-24" },
];

const FloatingPokemon = () => {
  const [positions, setPositions] = useState<Array<{ top: string; left: string; delay: number }>>([]);

  useEffect(() => {
    // Generate random positions for each Pokemon
    const newPositions = pokemon.map(() => ({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
      delay: Math.random() * 2,
    }));
    setPositions(newPositions);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {pokemon.map((poke, index) => (
        <img
          key={poke.name}
          src={poke.img}
          alt={poke.name}
          className={`absolute ${poke.size} opacity-10 animate-float hover:opacity-30 transition-opacity duration-300`}
          style={{
            top: positions[index]?.top || "50%",
            left: positions[index]?.left || "50%",
            animationDelay: `${positions[index]?.delay || 0}s`,
            filter: "drop-shadow(0 0 10px hsl(var(--primary) / 0.3))",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPokemon;
