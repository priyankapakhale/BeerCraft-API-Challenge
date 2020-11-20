import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { searchBeerByName } from '../redux/actions/actions'

const SearchBeer = (props) => {
  const [name, setName] = useState('')

  useEffect(() => {
    props.searchBeerByName(name)
  }, [name])

  return (
    <div className="d-flex justify-content-center">
      <div className="col-lg-6 col-md-8 col-12">
        <input className="px-3 py-1 mr-3" type="text" placeholder="Enter beer's name" value={name} onChange={e => setName(e.target.value)} />
      </div>
    </div>
  );
};

export default connect(null, { searchBeerByName })(SearchBeer)