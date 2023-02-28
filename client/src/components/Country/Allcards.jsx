import React from "react";
import CountryCard from "./CountryCard";




const Allcards = ({currentCard}) => {
  //Get countries information for render
  //const countries = useSelector((state) => state.countries);

  return (
    <div>
      {currentCard?.map((c) => {
        return (
          <CountryCard
            key={c?.id}
            id={c?.id}
            name={c?.name}
            flag={c?.flag}
            region={c?.region}
          />
        );
      })}
    </div>
  );
};

export default Allcards;
