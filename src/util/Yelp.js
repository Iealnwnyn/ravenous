const apiKey = '{{MY_API_KEY}}';
const Yelp = {
    search: (term, location, sortBy) => {
        return fetch(
           `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
           {
               headers: {
                   Authorization: `Bearer ${apiKey}`
               }
           }
       ).then( response => response.json()).then( jsonResponse => {
           if(jsonResponse.businesses) {
               console.log(jsonResponse.business)
               return jsonResponse.businesses.map(business => {
                   return {
                       id: business.id,
                       imageSrc: business.image_url,
                       name: business.name,
                       address: `${business.location.address1} ${business.location.address2} ${business.location.address3}`,
                       city: business.location.city,
                       state: business.location.state,
                       zipCode: business.location.zip_code,
                       category: business.categories[0].title,
                       rating: business.rating,
                       reviewCount: business.review_count,
                   };
               });
           }
       })
   }
};
export default Yelp;