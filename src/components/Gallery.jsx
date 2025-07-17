import React, { useEffect, useRef, useState } from "react";
import videos from "./videos";

const Gallery = () => {
  const galleryRef = useRef(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const generateItems = () => {
      const rows = [
        { id: 1, count: 4 },
        { id: 2, count: 3 },
        { id: 3, count: 4 },
      ];

      const newItems = rows.map((row) => {
        return Array.from({ length: row.count }, (_, index) => {
          const itemId = `${row.id}-${index}`;
          const video = video.find((v) => v.id === itemId);
          return {
            id: itemId,
            rowId: row.id,
            video: video,
          };
        });
      });
      setItems(newItems);
    };

    generateItems();
  }, []);

  return <>
  <div className="container">
    <div className="gallery" ref={galleryRef}>
        
    </div>
  </div>
  </>;
};

export default Gallery;
