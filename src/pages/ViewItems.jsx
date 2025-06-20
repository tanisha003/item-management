import React, { useContext, useState } from 'react';
import { ItemContext } from '../context/ItemContext';
import ItemModal from '../components/ItemModal';

const ViewItems = () => {
  const { items } = useContext(ItemContext);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="container mt-4">
      <h2>All Items</h2>
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-sm-3 mb-3" onClick={() => setSelectedItem(item)} style={{ cursor: 'pointer' }}>
            <img src={URL.createObjectURL(item.cover)} className="img-fluid border" alt={item.name} />
            <p className="mt-1 fw-bold">{item.name}</p>
          </div>
        ))}
      </div>
      {selectedItem && <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
};

export default ViewItems;