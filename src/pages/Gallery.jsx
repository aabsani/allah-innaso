import React from 'react';

export default function Gallery() {
  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="image-grid">
        <img src="/placeholder.jpg" alt="Frozen Food 1" />
        <img src="/placeholder.jpg" alt="Frozen Food 2" />
        <img src="/placeholder.jpg" alt="Frozen Food 3" />
      </div>
    </section>
  );
}