import React, { useState, useContext } from 'react';
import { ItemContext } from '../context/ItemContext';

const AddItem = () => {
  const { addItem } = useContext(ItemContext);
  const [form, setForm] = useState({
    name: '', type: '', description: '', cover: null, images: []
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'cover') {
      setForm({ ...form, cover: files[0] });
    } else if (name === 'images') {
      setForm({ ...form, images: Array.from(files) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ ...form, id: Date.now() });
    setSuccess(true);
    setForm({ name: '', type: '', description: '', cover: null, images: [] });
  };

  return (
    <div className="container mt-4">
      <h2>Add New Item</h2>
      {success && <div className="alert alert-success">Item successfully added</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-2"><input name="name" value={form.name} onChange={handleChange} placeholder="Item Name" className="form-control" required /></div>
        <div className="mb-2"><input name="type" value={form.type} onChange={handleChange} placeholder="Item Type" className="form-control" required /></div>
        <div className="mb-2"><textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="form-control" required /></div>
        <div className="mb-2"><label>Cover Image</label><input type="file" name="cover" onChange={handleChange} accept="image/*" className="form-control" required /></div>
        <div className="mb-3"><label>Additional Images</label><input type="file" name="images" onChange={handleChange} accept="image/*" multiple className="form-control" /></div>
        <button className="btn btn-primary">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;