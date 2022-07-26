import React from "react";
import cities from "./cities";
import City from "./City";

class CityList extends React.Component {
  render() {
    return (
      <div class="grid sm:grid-cols-3 gap-6">
         {cities.map(function(city){
            return<City {...city} />
        })} 
      </div>

      
    );
  }
}
export default CityList;
