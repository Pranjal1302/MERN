import React, { useEffect, useState } from "react";
import axios from "axios";

const Show = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getList = async () => {
    try {
      const res = await axios.get("http://localhost:5000/movie/");
      if (res.status === 200) {
        setList(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎬 Movie Library</h1>

      {loading ? (
        <p style={styles.loading}>Loading movies...</p>
      ) : (
        <div style={styles.grid}>
          {list.map((movie) => (
            <div key={movie._id} style={styles.card}>
              <div style={styles.posterWrapper}>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  style={styles.poster}
                />
              </div>

              <div style={styles.cardBody}>
                <h2 style={styles.title}>{movie.title}</h2>
                <p style={styles.year}>📅 {movie.year}</p>

                <p style={styles.plot}>
                  {movie.plot.length > 120
                    ? movie.plot.substring(0, 120) + "..."
                    : movie.plot}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Show;

// ---- Styles ----
const styles = {
  container: {
    padding: "40px",
    fontFamily: "Segoe UI, sans-serif",
    background: "#f0f2f5",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    fontSize: "42px",
    fontWeight: 800,
    color: "#222",
    marginBottom: "40px",
  },
  loading: {
    textAlign: "center",
    fontSize: "20px",
    color: "#555",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "30px",
    padding: "10px",
  },
  card: {
    background: "#fff",
    borderRadius: "14px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
    overflow: "hidden",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  posterWrapper: {
    width: "100%",
    height: "360px",
    overflow: "hidden",
  },
  poster: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  cardBody: {
    padding: "18px",
  },
  title: {
    fontSize: "22px",
    fontWeight: 700,
    marginBottom: "6px",
  },
  year: {
    fontSize: "15px",
    color: "#777",
    marginBottom: "12px",
  },
  plot: {
    fontSize: "15px",
    color: "#444",
    lineHeight: "1.5",
  },
};

// Add hover effect
styles.card["&:hover"] = {
  transform: "scale(1.04)",
  boxShadow: "0 10px 25px rgba(0,0,0,0.20)",
};
