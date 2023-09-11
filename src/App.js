// import React from 'react';
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Button } from 'react-bootstrap';
// import './App.css'
// import { Container } from "reactstrap";


// function App() {
//   const [data, setData] = useState([]);
//   const [state, setState] = useState([]);
//   const [city, setCity] = useState([]);



//   useEffect(() => {
//     axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json").
//       then(res => setData(res.data))
//       .catch(err => console.log(err))
//   }, [])

//   //removing duplicate country names
//   let country = [...new Set(data.map(item => item.country))];
//   country.sort();

//   const handleCountryChange = (e) => {
//     setState("Select State");
//     setCity("Select City");
//     //As you select country from select box, in below line we filter that country from all data so that we can get subcountry(state), name(city) out of it.
//     let Singlecountry = data.filter(item => item.country === e.target.value);

//     //now this singleCountry which is getting the name of subcountry(state) multiple times. So to remove duplicates set is used.
//     let states = [...new Set(Singlecountry.map(item => item.subcountry))];
//     states.sort();
//     //after removing the duplicate subcountry names(state names). we have saved the data in state state using setState.
//     setState(states);

//   }

//   const handleStateChange = (e) => {
//     //here when user selects particular subcountry(state name), we have checked again with original data to get all subcounty that match that name. to get the data of perticular city.


//     let singleCity = data.filter(item => item.subcountry === e.target.value);

//     setCity(singleCity);

//   }



//   return (
//     <>
//       {/* <div className="body"> */}
        // <div className="navigationbar">
        //   {/*Country Selection */}
        //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <div className="container-fluid">
        //       <a className="navbar-brand" href="#">Saurabh Devslopes</a>
        //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //       </button>
        //       <div className="collapse navbar-collapse" id="navbarScroll">
        //         <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        //           <li className="nav-item">
        //             <a className="nav-link active" aria-current="page" href="#">Home</a>
        //           </li>
        //           <li className="nav-item">
        //             <a className="nav-link" href="#">About</a>
        //           </li>
        //           <li className="nav-item dropdown">
        //             <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //               Services
        //             </a>
        //             <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
        //               <li><a className="dropdown-item" href="#">Action</a></li>
        //               <li><a className="dropdown-item" href="#">Another action</a></li>
        //               <li><hr className="dropdown-divider" /></li>
        //               <li><a className="dropdown-item" href="#">Something else here</a></li>
        //             </ul>
        //           </li>
        //           <li className="nav-item">
        //             <a className="nav-link" href="#" tabindex="-1" >Contact Us</a>
        //           </li>
        //         </ul>
        //         <form className="d-flex">
        //           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //           <button className="btn btn-outline-success" type="submit">Search</button>
        //         </form>
        //       </div>
        //     </div>
        //   </nav>
        // </div>
//         {/* <div className="content"> */}
//         <div className="content">
//         <React.Fragment >
//           <Container >
//             <div className="row">
//               <div className="col-sm-12">
//                 <h2 className="mt-4 mb-4 fw-bold">
//                   Select Country, State and City ReactJs{" "}
//                 </h2>
//                 <form className='row g-3' >
//                   <div className='col-md-3'>
//                     <label className="control-label"  id="country" >Country</label>
//                     <select  name="country" className='form-control p-2' onChange={(e) => handleCountryChange(e)}>
//                       <option>Select Country</option>
//                       {country?.map((item, index) => (
//                         <option key={index} value={item}>{item}</option>
//                       ))}
//                     </select>
//                   </div>
//                   {/*State Selection */}
//                   <div className='col-md-3' >
//                     <label className='control-label' id="state">State</label>
//                     <select  name='state' className='form-control p-2' onChange={(e) => handleStateChange(e)}>
//                       <option>Select State</option>
//                       {state !== 'Select State' && state?.map((item, index) =>
//                         <option key={index} value={item}>{item}</option>
//                       )}
//                     </select>
//                   </div>
//                   {/*City Selection */}
//                   <div className='col-md-3' id="city" >
//                     <label className='control-label' >City</label>
//                     <select className='form-control p-2 ' name='city'>
//                       <option>Select City</option>
//                       {city !== 'Select City' && city?.map((item, index) =>
//                         <option key={index} value={item?.name}>{item?.name}</option>
//                       )}
//                     </select>
//                   </div>
//                   <div className="col-md-3 ">
//                     <Button className=" btn btn-primary mt-4  " variant="success">Submit</Button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </Container>
//         </React.Fragment>
//         </div>
//       {/* </div> */}
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import './App.css';
import { Container } from 'reactstrap';


function App() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState(''); // Store the selected country
  const [state, setState] = useState(''); // Store the selected state
  const [city, setCity] = useState(''); // Store the selected city
  const [submittedValues, setSubmittedValues] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  // const [randomImageId, setRandomImageId] = useState(null);
  const [placesToVisit, setPlacesToVisit] = useState([]);

  const imageUrls = {
    'New York City': [
      'https://i.guim.co.uk/img/media/b3585cf7b5525c4f27b924754ed98b3b7fbdaf53/0_383_8048_4831/master/8048.jpg?width=1200&quality=85&auto=format&fit=max&s=7c79a7b8220f2d5aca237616cac7abda'
      // Add more image URLs for New York as needed
    ],
    'Paris': [
      'https://images.unsplash.com/photo-1564594736624-def7a10ab047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'
      // Add more image URLs for Paris as needed
    ],
    'Hyderabad': [
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Iconic_Charminar_in_Hyderabad%2C_India.jpg'
      // Add more image URLs for New York as needed
    ],
    'Pune': [
      'https://mittalbuilders.com/wp-content/uploads/2020/12/Reasons-to-settle-down-in-Pune.png'
      // Add more image URLs for New York as needed
    ],
    'Mumbai': [
      'https://www.tripsavvy.com/thmb/soWUDapWGtmRQbvvY5OFMdd8Ezs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1008831236-5c65d6bf4cedfd00014aa310.jpg'
    ],
    'London': [
      'https://a.cdn-hotels.com/gdcs/production27/d274/43014cca-c88c-4061-ace8-58edc24531ee.jpg?impolicy=fcrop&w=800&h=533&q=medium'
    ],
    'Bengaluru':[
      'https://www.theyouth.in/wp-content/uploads/2020/12/Bengaluru-Name-min.jpg'
    ],
    'Chennai':[
      'https://media.istockphoto.com/id/1226340114/photo/puratchi-thalaivar-dr-mgr-central-railway-station-chennai-central-railway-station-india.jpg?s=612x612&w=0&k=20&c=lZjBnWBBoLiApWZUUWP1Vl3XAVdKjYMcgGpItXv_L14='
    ],
    'Panaji':[
      'https://www.holidify.com/images/bgImages/GOA.jpg'
    ],
    'Kolkata':[
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQyHTbmswc4LsAp6nmEJ7DGJrpwdAiayc8A&usqp=CAU'
    ],
    'Jaipur':[
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwDzTad3bLvmxGvMyCPQ7b94QwhFSrEQNOYQ&usqp=CAU'
    ],
    'Delhi':[
      'https://static.toiimg.com/photo/46382359.cms'
    ],
    'Ahmedabad':[
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWNiplpiiowzXDjhZwFIxP7i7mht4vBCC6A&usqp=CAU'
    ],
    'Nanded':[
      'https://saibabatravels.com/wp-content/uploads/2020/01/maxresdefault-1.jpg'
    ]

    // Add more cities and their image URLs here
  };



  useEffect(() => {
    axios
      .get(
        'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleCountryChange = (e) => {
    setCountry(e.target.value); // Update the selected country
    setState(''); // Reset the selected state
    setCity(''); // Reset the selected city
  };

  const handleStateChange = (e) => {
    setState(e.target.value); // Update the selected state
    setCity(''); // Reset the selected city
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    setSubmittedValues({ country, state, city });
    fetchWeatherData(city);

    fetchPlacesToVisit(city);
    // setRandomImageId(Math.floor(Math.random() * 1000));


  };



  const fetchWeatherData = (selectedCity) => {
    axios
      .get(`https://wttr.in/${selectedCity.replace(/\s+/g, '_')}?format=%C+%t+%w`)
      .then((res) => setWeatherData(res.data))
      .catch((err) => console.log(err));
  };

  const fetchPlacesToVisit = (selectedCity) => {
    // Simulate dynamic places to visit based on the selected city
    // You can customize this logic to generate dynamic places
    let dynamicPlaces = [];

    // Example: Places for New York City
    if (selectedCity === 'New York City') {
      dynamicPlaces = ['Central Park', 'Times Square', 'Statue of Liberty', 'Museum of Modern Art'];
    }

    // Example: Places for London
    if (selectedCity === 'London') {
      dynamicPlaces = ['Big Ben', 'The British Museum', 'Tower of London', 'Buckingham Palace'];
    }
    if (selectedCity === 'Hyderabad') {
      dynamicPlaces = ['Golconda Fort', 'Charminar', 'Birla Temple', 'NTR Garden'];
    }
    if (selectedCity === 'Pune') {
      dynamicPlaces = ['Sinhagad Fort', 'Shaniwar Wada', 'Aga Khan Palace', 'Dagdusheth Halwai Ganpati Temple'];
    }
    if (selectedCity === 'Mumbai') {
      dynamicPlaces = ['Gateway of India', 'Taj Hotel', 'Marine Drive', 'Juhu Beach'];
    }
    if (selectedCity === 'Bengaluru') {
      dynamicPlaces = ['Lalbagh Botanical Garden', 'Cubbon Park', 'Bengaluru Palace', 'Vidhana Souda'];
    }
    if (selectedCity === 'Chennai') {
      dynamicPlaces = ['Santhome Cathedral Basilica', 'Marina Beach', 'Kapaleeshwarar Temple', 'Arulmigu Sri Parthasarathy Perumal Temple Tiruvallikeni'];
    }
    if (selectedCity === 'Panaji') {
      dynamicPlaces = ['Palolem Beach', ' Agonda Beach', 'Baga Beach', 'Cavelossim Beach'];
    }
    if (selectedCity ==="Kolkata") {
      dynamicPlaces=["Victoria Memorial","Eden Gardens", "St. Paul's Cathedral","Howrah Bridge"];
    }
    if (selectedCity==="Jaipur"){
      dynamicPlaces=["Amber Palace","Jaigarh Fort","Ele Safari","Hawa Mahal"];
    }
    if (selectedCity=="Delhi"){
      dynamicPlaces=['Red Fort','India Gate','Jantar Mantar',"Jama Masjid"] ;
    }
    if (selectedCity=='Ahmedabad'){
      dynamicPlaces=[ "Shree Swaminarayan Mandir",  "Sabarmati Ashram",   "The Adalaj Stepwell",    "Kankaria Lake"];
    }
    if (selectedCity=='Nanded'){
      dynamicPlaces=[ "Takhat Sachkhand Shri Hazur Abchal Nagar Sahib",  "Kaleshwar Mandir Vishnupuri",   "Nanded Fort",    "Visava Garden Jurassic Park"];
    }

    setPlacesToVisit(dynamicPlaces);
  };

  // Filter unique country names
  let uniqueCountries = [...new Set(data.map((item) => item.country))];
  uniqueCountries.sort();

  // Filter state names based on the selected country
  let uniqueStates = [...new Set(data.filter((item) => item.country === country).map((item) => item.subcountry))];
  uniqueStates.sort();

  // Filter city names based on the selected state
  let uniqueCities = [...new Set(data.filter((item) => item.subcountry === state).map((item) => item.name))];
  uniqueCities.sort();

  return (
    <>
      <div className="navigationbar">
          {/*Country Selection */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Saurabh Devslopes</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Services
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" tabindex="-1" >Contact Us</a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      <div className="content">
        <Container>
          <div className="row">
            <div className="col-sm-12">
              <h2 className="mt-4 mb-4 fw-bold">Select Country, State, and City ReactJs</h2>
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-3">
                  <label className="control-label" id="country">
                    Country
                  </label>
                  <select name="country" className="form-control p-2" onChange={handleCountryChange}>
                    <option value="">Select Country</option>
                    {uniqueCountries?.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="control-label" id="state">
                    State
                  </label>
                  <select name="state" className="form-control p-2" onChange={handleStateChange}>
                    <option value="">Select State</option>
                    {country && uniqueStates?.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-3" id="city">
                  <label className="control-label">City</label>
                  <select className="form-control p-2" name="city" value={city} onChange={(e) => setCity(e.target.value)}>
                    <option value="">Select City</option>
                    {state && uniqueCities?.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-3">
                  <Button className="btn btn-primary mt-4" variant="success" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
              {submittedValues && (
                <div className='page'>
                  <div className="mt-4">
                    <h3>Selected Place</h3>
                    <p>{submittedValues.city},{submittedValues.state},{submittedValues.country}</p>
                  </div>
                </div>
              )}

              {weatherData && (
                <div className='weather'>
                  <div className="mt-4">
                    <h3>Weather Information for {submittedValues.city}</h3>
                    <p>{weatherData}</p>
                    {/* You can format and display the weather information as needed */}
                  </div>
                </div>
              )}
              {placesToVisit.length > 0 && (
                <div className='visit'>
                  <div className="mt-4">
                    <h3>Places to Visit in {submittedValues.city}</h3>
                    {placesToVisit.map((place, index) => (
                      <li key={index}>{place}</li>
                    ))}
                  </div>
                </div>
              )}
              {submittedValues && (
                  <div className="mt-4">
                    <h2 className='cityphotos'>Photos of {submittedValues.city}</h2>
                    <img className='cityimg' src={imageUrls[submittedValues.city]} />
                  </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
