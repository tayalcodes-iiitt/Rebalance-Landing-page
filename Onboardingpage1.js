// import React,{useEffect,useState, Component}from "react";

// import './appp.css';
// // import styled from "styled-components";
// // import Onboardingpincode from 

// // import onbboardingpincode from './onboard.css';

// class OnBoardingpage1 extends Component {

//     function (event) {
//         function searchPin() {
//           let pin = document.getElementById("text").value;
//           getJSON("https://api.postalpincode.in/pincode/" + pin, function (data) {
//             createHTML(data);
//           })
//           function createHTML(data) {
//             var htmlElements = " ";
//             var msg = "";
//             msg += '<div id="msg">' + data[0].Message + '<span id="close">X</span></div>'
//             if (data[0].PostOffice && data[0].PostOffice.length) {
//               for (var i = 0; i < data[0].PostOffice.length; i++) {
//                 if (data[0].PostOffice.length > 3) {
//                   document.getElementById("mkslider").classList.add("sliders");
//                 }
//                 else {
//                   document.getElementById("mkslider").removeAttribute("class");
//                 }
//                 htmlElements += '<div class="col-sm-4"><div class="card"><div class="list-group"><h4>' + data[0].PostOffice[i].Name + '<small class="pull-right underline">' + data[0].PostOffice[i].Block + '</small></h4><p>District: <span class="pull-right">' + data[0].PostOffice[i].District + '</span></p><p>PostOffice :<span class="pull-right">' + data[0].PostOffice[i].State + '</span></p></div></div></div></div>'
//               }
//             }
//             else {
//               alert('Enter Valid pincode');
//             }
//             var htmlView = document.getElementById("mkslider");
//             htmlView.innerHTML = htmlElements;
//             var msgView = document.getElementById("total-msg");
//             msgView.innerHTML = msg;
//             createSlider();
//           }
//           setTimeout(function () {
//             $('#close').trigger('click');
//           }, 3000);
//         }
    
//         $(document).on("click", '#close', function () {
//           $('#total-msg').remove();
//         });
    
//         function createSlider() {
//           $('.sliders').slick({
//             dots: false,
//             infinite: false,
//             speed: 300,
//             slidesToShow: 3,
//             arrows: true,
//             slidesToScroll: 1,
//             autoplay: true,
//             responsive: [
//               {
//                 breakpoint: 600,
//                 settings: {
//                   slidesToShow: 2,
//                   slidesToScroll: 1
//                 }
//               },
//               {
//                 breakpoint: 480,
//                 settings: {
//                   slidesToShow: 1,
//                   slidesToScroll: 1
//                 }
//               }
//             ]
//           });
//         }
//         document.getElementById("submit").addEventListener("click", searchPin);
//       };

//     render() {
//         return (
//             <div>
//             <div id="page-wrapper">
//     <div class="container">
//       <div class="row">
//         <div class="col-sm-4 col-sm-offset-4" id="form-sec">
//           <form>
//             <div class="form-group">
//               <label for="text">Enter Indian Pincode</label>
//               <input type="text" class="form-control" id="text" placeholder="Enter Pincode" maxlength="6"
//                 onkeypress="return event.charCode >= 48 && event.charCode <= 57" />
//             </div>
//             <button id="submit" type="button" class="btn btn-default btn-lg btn-block">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//     <br />
//   </div>
//   <div id="total-msg"></div>
//   <div id="htmlView">
//     <div class="container">
//       <div class="row">
//         {/* <div class="col-md-12" style="padding: 0;">
//           <div id="mkslider">

//           </div>
//         </div> */}
//       </div>
//     </div>
//   </div>
//   </div>
           
//         );
//     }
//  }

//  export default OnBoardingpage1;




import React, { useEffect, useState } from "react";
// import "./App.css";

const xml2json = (srcDOM) => {
  let children = [...srcDOM.children];
  // base case for recursion.
  if (!children.length) {
    return srcDOM.innerHTML;
  }
  // initializing object to be returned.
  let jsonResult = {};
  for (let child of children) {
    // checking is child has siblings of same name.
    let childIsArray =
      children.filter((eachChild) => eachChild.nodeName === child.nodeName)
        .length > 1;
    // if child is array, save the values as array, 
    // else as strings.
    if (childIsArray) {
      if (jsonResult[child.nodeName] === undefined) {
        jsonResult[child.nodeName] = [xml2json(child)];
      } else {
        jsonResult[child.nodeName].push(xml2json(child));
      }
    } else {
      jsonResult[child.nodeName] = xml2json(child);
    }
  }
  return jsonResult;
};

function App() {
  const parser = new DOMParser();

  const initialCityState = { city: "", state: "" };
  // eslint-disable-next-line
  const [cityState, setCityState] = useState(initialCityState);
  const [zipcode, setZipcode] = useState("");
  const [loading, setLoading] = useState(false);

  // We check to see if the input is 6 characters long and there
  // is something there
  const isZipValid = zipcode.length === 6 && zipcode;

  useEffect(() => {
    const fetchCityState = async () => {
      try {
        // If zip is valid then...fetch something
        if (isZipValid) {
          const response = await fetch(
            `https://api.postalpincode.in/pincode/${zipcode}`,
            {
              headers: { accept: "application/json" },
            }
          );
          const data = await response.json();
          const srcDOM = parser.parseFromString(data, "application/xml");
          console.log(xml2json(srcDOM));
          const res = xml2json(srcDOM);
          console.log(data[0]['PostOffice'][0]);

          // Using optional chaining we check that all the DOM
          // items are there
          if (data[0]['PostOffice'][0]) {
            // set loading to false because we have a result
            setLoading(false);
            // then spread the result to the setCityState hook
            setCityState({
              ...cityState,
              city: data[0]['PostOffice'][0]['District'],
              state: data[0]['PostOffice'][0]['State'],
            });

            // Error checking. User did not put in a valid zipcode
            // according to the API
          } else if (data[0]['PostOffice'][0].Error) {
            setLoading(false);
            // then spread the error to the setCityState hook
            setCityState({
              ...cityState,
              city: `Invalid Zip Code for ${zipcode}`,
              state: "Try Again",
            });
          }
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchCityState();
  }, [zipcode]);

  return (
    <div className="App">
      <h6 className="Storeheading">Store Pincode</h6>
      <form action="" className="form-data">
        {/* <label htmlFor="zip">Type Zip Code Here</label> */}
        <input
          maxLength="6"
          className="zip"
          value={zipcode || ""}
          placeholder="Enter store pincode"
          type="text"
          name="zip"
          id="zip"
          onChange={(event) => {
            const { value } = event.target;
            // Set the loading to true so we show some sort of
            // progress
            setLoading(true);
            setCityState(initialCityState);
            setZipcode(value.replace(/[^\d{6}]$/, "").substr(0, 6));
          }}
        />
         <pre>
        <code className="Mainresult">
          {JSON.stringify(
            (cityState.city)+", "+
            cityState.state
         )}
        </code>
      </pre>
      


        {/* <label htmlFor="city">City</label>
        <div className="input-container">
          <input
            className={`city`}
            value={cityState.city}
            type="text"
            name="city"
            disabled
            id="city"
          />
          <div className="icon-container">
            <i className={`${loading && isZipValid ? "loader" : ""}`}></i>
          </div>
        </div>
        <label htmlFor="state">State</label>
        <div className="input-container">
          <input
            className={`state`}
            value={cityState.state}
            type="text"
            name="state"
            disabled
            id="state"
          />
          <div className="icon-container">
            <i className={`${loading && isZipValid ? "loader" : ""}`}></i>
          </div>
        </div> */}
      </form>

            <div> 
            <button id="submit" type="button" class="btn btn-default btn-lg btn-block">
               Join Waitlist
             </button></div>
     

             <div>
             <button id="submit1" type="button" class="btn btn-default btn-lg btn-block">
               Share on WhatsApp
             </button>
             </div>

             <div>
                <h6 className="Lowerheading">verified and authenticated by =rebalance</h6>
             </div>
             <div>

             </div>
      
    </div>
  );
}

export default App;