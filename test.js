const data = [
    {
      name: "Hotel Havana",
      description: "Precio Por Noche",
      images: ["https://source.unsplash.com/random/800x400/?hotel"],
      stars: 3,
      price: 34.51
    },
    {
      name: "Hotel Ramblas",
      description: "Precio Por Noche",
      images: ["https://source.unsplash.com/random/800x400/?resort"],
      stars: 2,
      price: 53000
    },
    {
      name: "Hotel Decaron",
      description: "Precio Por Noche",
      images: ["https://source.unsplash.com/random/800x400/?home"],
      stars: 4,
      price: 46200
    }
  ];

function isBigEnough(value) {
  return value >= 10
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
// filtered is [12, 130, 44]
console.log(filtered);


var marvelHeroes =  data.filter(function(info) {
	return info.name.includes("Ramb");
});

console.log(marvelHeroes);


/*
const filteredData = data.filter(item => {
  return Object.keys(item).some(key =>  item[key].toLowerCase().includes("Hotel"))  
  });
*/

/*

  onPress = (data) => {
    console.log(data);
    this.props.navigation.navigate("Detalle", {      
      itemId: data._id
    });
  }
  */