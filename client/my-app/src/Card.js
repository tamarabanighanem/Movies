// import React from 'react'
import  { React,useState,useEffect } from 'react';
import axios from 'axios';
const Card = () => {
  const [data, setData] = useState([]);
  console.log(data)
  
  useEffect(() => {
    axios
      .get('http://localhost:5050')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
  
    <div className='flex flex-wrap justify-between p-10'>
      {data.map((item) => (
        <div className="card w-96 bg-base-100 shadow-xl rounded-lg  mt-10 " key={item.id}>
          <figure>
            <img className="w-full rounded-lg" src={item.image} alt={item.title} />
          </figure>
          <div className="card-body p-5">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              {item.genre.map((genre) => (
                <div className="badge badge-outline" key={genre}>{genre}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  
  )
}

export default Card