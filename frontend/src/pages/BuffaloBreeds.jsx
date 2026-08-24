import { useState } from "react";

import buffaloHero from "../assets/buffalohero.jpg";
import murrahImage from "../assets/murrah.jpg";
import jaffarabadiImage from "../assets/jaffarabadi.png";
import mehsanaImage from "../assets/mehsana.jpg";
import surtiImage from "../assets/surti.jpg";

import {
  Search,
  MapPin,
  Heart,
  ArrowRight
} from "lucide-react";

import "./CowBreeds.css";


const breeds = [
  {
    name: "Murrah",
    origin: "Haryana",
    type: "Dairy",
    image: murrahImage,
    description:
      "One of India's most important dairy buffalo breeds, known for high milk production and adaptability."
  },

  {
    name: "Jaffarabadi",
    origin: "Gujarat",
    type: "Dairy",
    image: jaffarabadiImage,
    description:
      "A large buffalo breed known for good milk production, strong build and adaptability."
  },

  {
    name: "Mehsana",
    origin: "Gujarat",
    type: "Dairy",
    image: mehsanaImage,
    description:
      "Popular dairy buffalo breed known for efficient milk production and good adaptability."
  },

  {
    name: "Surti",
    origin: "Gujarat",
    type: "Dairy",
    image: surtiImage,
    description:
      "Medium-sized buffalo breed valued for quality milk and suitability for small-scale dairy farming."
  }
];


function BuffaloBreeds() {

  const [search, setSearch] = useState("");

  const [activeFilter, setActiveFilter] =
    useState("All Breeds");

  const [liked, setLiked] = useState([]);


  const filters = [
    "All Breeds",
    "Dairy",
    "Dual Purpose"
  ];


  /* =========================
     FILTER BREEDS
  ========================= */

  const filteredBreeds = breeds.filter((breed) => {

    const matchesSearch =
      breed.name
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchesFilter =
      activeFilter === "All Breeds" ||
      breed.type === activeFilter;


    return matchesSearch && matchesFilter;
  });


  /* =========================
     LIKE / UNLIKE
  ========================= */

  const toggleLike = (breedName) => {

    setLiked((previous) => {

      if (previous.includes(breedName)) {

        return previous.filter(
          (name) => name !== breedName
        );

      }

      return [...previous, breedName];

    });

  };


  return (

    <div className="cow-page">


      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section
        className="cow-hero"
        style={{
          backgroundImage: `url(${buffaloHero})`
        }}
      >

        <div className="cow-hero-overlay">

          <div className="cow-hero-content">


            {/* LABEL */}

            <div className="hero-label">

              <span>🐃</span>

              BREED EXPLORER

            </div>


            {/* HEADING */}

            <h1>

              Explore Indian

              <span>
                Buffalo Breeds
              </span>

            </h1>


            {/* DESCRIPTION */}

            <p>

              Discover the diversity of Indian buffalo breeds.
              Learn about their origin, traits, milk production
              and unique characteristics.

            </p>


            {/* SEARCH */}

            <div className="hero-search">

              <Search size={20} />

              <input
                type="text"
                placeholder="Search for a buffalo breed..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />

            </div>

          </div>

        </div>

      </section>



      {/* =====================================
          BREED SECTION
      ===================================== */}

      <section className="browse-section">


        {/* SECTION HEADER */}

        <div className="browse-top">


          <div>

            <div className="browse-title">

              <div className="browse-icon">
                🐃
              </div>

              <div>

                <h2>
                  Browse Buffalo Breeds
                </h2>

                <p>
                  Explore different Indian buffalo breeds
                </p>

              </div>

            </div>


            {/* FILTERS */}

            <div className="breed-filters">

              {filters.map((filter) => (

                <button
                  key={filter}
                  className={
                    activeFilter === filter
                      ? "filter-btn active"
                      : "filter-btn"
                  }
                  onClick={() =>
                    setActiveFilter(filter)
                  }
                >

                  {filter}

                </button>

              ))}

            </div>

          </div>


          {/* TOTAL BREEDS */}

          <div className="breed-count-box">

            <div className="count-icon">
              🐃
            </div>

            <div>

              <small>
                Total Breeds
              </small>

              <strong>
                8
              </strong>

            </div>

          </div>

        </div>



        {/* =====================================
            BREED CARDS
        ===================================== */}

        {filteredBreeds.length > 0 ? (

          <div className="breed-grid">

            {filteredBreeds.map((breed) => (

              <div
                className="breed-card"
                key={breed.name}
              >


                {/* IMAGE */}

                <div className="card-image">

                  <img
                    src={breed.image}
                    alt={breed.name}
                  />


                  {/* HEART */}

                  <button
                    className={
                      liked.includes(breed.name)
                        ? "heart-btn liked"
                        : "heart-btn"
                    }
                    onClick={() =>
                      toggleLike(breed.name)
                    }
                    aria-label={`Favorite ${breed.name}`}
                  >

                    <Heart
                      size={18}
                      fill={
                        liked.includes(breed.name)
                          ? "currentColor"
                          : "none"
                      }
                    />

                  </button>

                </div>



                {/* INFORMATION */}

                <div className="card-content">


                  <h3>
                    {breed.name}
                  </h3>


                  <div className="origin">

                    <MapPin size={13} />

                    <span>
                      {breed.origin}
                    </span>

                  </div>


                  <span className="type-badge">

                    {breed.type}

                  </span>


                  <p>
                    {breed.description}
                  </p>


                  <button
                    className="view-details"
                    onClick={() =>
                      alert(
                        `${breed.name} breed details coming soon!`
                      )
                    }
                  >

                    View Details

                    <ArrowRight size={16} />

                  </button>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="no-results">

            <div className="no-results-icon">
              🐃
            </div>

            <h3>
              No breed found
            </h3>

            <p>
              Try searching for another buffalo breed.
            </p>

          </div>

        )}

      </section>

    </div>

  );

}


export default BuffaloBreeds;