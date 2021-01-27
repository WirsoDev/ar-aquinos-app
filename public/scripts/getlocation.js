  if ('geolocation' in navigator){
      console.log('OK')
      navigator.geolocation.getCurrentPosition(possition => {
          const lat = possition.coords.latitude
          const lon = possition.coords.longitude


          const modelName = window.location.pathname.replace('/', '')
          console.log(modelName)

          // Divice type

          const ua = navigator.userAgent
          let device

          if(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)){
              device = "Tablet"
          }else if(/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)){
              device = 'Mobile'
          }else{
              device = 'Desktop'
          }

          const data = { lat, lon, modelName, device}
          console.log(data)

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




