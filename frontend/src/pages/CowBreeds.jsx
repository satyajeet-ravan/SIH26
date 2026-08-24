import { useState } from "react";

import cowHero from "../assets/cow.jpg";
import girImage from "../assets/gir.jpg";
import sahiwalImage from "../assets/sahiwal.jpg";
import redSindhiImage from "../assets/red-sindhi.jpg";
import kankrejImage from "../assets/kankrej.jpg";

import {
  Search,
  MapPin,
  Heart,
  ArrowRight
} from "lucide-react";

import "./CowBreeds.css";


const breeds = [
  {
    name: "Gir",
    origin: "Gujarat",
    type: "Dairy",
    image: girImage,
    description:
      "Famous for high milk yield, calm temperament and strong adaptability."
  },

  {
    name: "Sahiwal",
    origin: "Punjab",
    type: "Dairy",
    image: sahiwalImage,
    description:
      "Excellent dairy breed known for good milk production and heat resistance."
  },

  {
    name: "Red Sindhi",
    origin: "Sindh",
    type: "Dairy",
    image: redSindhiImage,
    description:
      "Adaptable breed known for good milk production and docile nature."
  },

  {
    name: "Kankrej",
    origin: "Gujarat",
    type: "Dual Purpose",
    image: kankrejImage,
    description:
      "Strong and hardy breed used for both milk production and agricultural work."
  }
];


function CowBreeds() {

  const [search, setSearch] = useState("");

  const [activeFilter, setActiveFilter] =
    useState("All Breeds");

  const [liked, setLiked] = useState([]);


  const filters = [
    "All Breeds",
    "Dairy",
    "Dual Purpose",
    "Draught"
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
          backgroundImage: `url(${cowHero})`
        }}
      >

        <div className="cow-hero-overlay">

          <div className="cow-hero-content">


            {/* LABEL */}

            <div className="hero-label">

              <span>🐄</span>

              BREED EXPLORER

            </div>


            {/* HEADING */}

            <h1>

              Explore Indian

              <span>
                Cow Breeds
              </span>

            </h1>


            {/* DESCRIPTION */}

            <p>

              Discover the richness and diversity of Indian
              cattle breeds. Learn about their origin, traits,
              milk production and unique characteristics.

            </p>


            {/* SEARCH */}

            <div className="hero-search">

              <Search size={20} />

              <input
                type="text"
                placeholder="Search for a breed..."
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
                🐄
              </div>

              <div>

                <h2>
                  Browse Cow Breeds
                </h2>

                <p>
                  Explore different Indian cattle breeds
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
              🐮
            </div>

            <div>

              <small>
                Total Breeds
              </small>

              <strong>
                12
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


                  {/* NAME */}

                  <h3>
                    {breed.name}
                  </h3>


                  {/* ORIGIN */}

                  <div className="origin">

                    <MapPin size={13} />

                    <span>
                      {breed.origin}
                    </span>

                  </div>


                  {/* TYPE */}

                  <span className="type-badge">

                    {breed.type}

                  </span>


                  {/* DESCRIPTION */}

                  <p>
                    {breed.description}
                  </p>


                  {/* DETAILS */}

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

          /* =====================================
             NO RESULTS
          ===================================== */

          <div className="no-results">

            <div className="no-results-icon">
              🐄
            </div>

            <h3>
              No breed found
            </h3>

            <p>
              Try searching for another breed.
            </p>

          </div>

        )}

      </section>

    </div>

  );

}


export default CowBreeds;