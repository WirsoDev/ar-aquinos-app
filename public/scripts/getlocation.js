  if ('geolocation' in navigator){
      console.log('OK')
      navigator.geolocation.getCurrentPosition(possition => {
          const lat = possition.coords.latitude
          const lon = possition.coords.longitude

          const modelName = window.location.pathname.replace('/', '')
          console.log(modelName)
          const data = { lat, lon, modelName}

          const options = {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                  "Content-Type": "application/json"
              }
          }
          fetch('/:name', options)
      })
  }else{
      console.log('No geolocation available')
  }




