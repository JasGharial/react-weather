export const getLocalLatLong = async () => {
  try {
    const location = await getLocalLatLongHandler();
    return location;
  } catch (error) {
    console.error(error);
    // Fallback to default coordinates
    return {
      latitude: 38.72,
      longitude: 9.13,
    };
  }
};

const getLocalLatLongHandler = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          // resolve({ latitude: latitude, longitude: longitude });
          resolve(getLocation(latitude, longitude))
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error("Geolocation not supported by your browser"));
    }
  });
};

export const getLocation = async (latitude, longitude) => {
  try {
    const city = await getLocationHandler(latitude, longitude);
    return city;
  } catch (error) {
    console.error(error);
    return {
      location: "Lisbon",
    };
  }
};

const getLocationHandler = async (latitude, longitude) => {
  const params = new URLSearchParams({
    format: 'jsonv2',
    lat: latitude,
    lon: longitude
  });
  const url = `https://nominatim.openstreetmap.org/reverse?${params}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Extract the city name from the response
      const address = data.address;
      let city = address.county.split(' ')[0];
      if (!city) {
        // If city is not available, try town or village
        city = address.town || address.village;
      }
      return {location: city, latitude: latitude, longitude: longitude};
    }).catch((error) => {
      console.log(error)
    });
};
