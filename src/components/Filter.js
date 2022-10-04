import React, {useState} from "react";
import './Filter.css';

export default function Filter(props) {

  const [search, setSearch] = useState('');

  function handleInputChange(e) {
    const value = e.target.value;
    setSearch(value);
    props.search(value);
  }

  return (
    <div className="d-flex justify-content-between px-5 m-4">
      <div className="search-input input-group mb-3">
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search by business name"
          value={search}
          onChange={handleInputChange}
        />
      </div>

      <div className="d-flex gap-3 fs-4 text-white">
        <i onClick={(e) => props.setDisplay('list')} className="bi bi-list-ul bg-primary rounded px-3 pt-2"></i>
        <i onClick={(e) => props.setDisplay('grid')} className="bi bi-grid-3x3-gap-fill bg-primary rounded px-3 pt-2"></i>
      </div>
    </div>
  );
}
