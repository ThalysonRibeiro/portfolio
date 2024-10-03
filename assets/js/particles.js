window.onload = async function () {
  await tsParticles.load({
    id: "tsparticles",
    options: {
      "autoPlay": true,
      "background": {
        "color": {
          // "value": "#232741" //background
        },
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "20%",
        "opacity": 1
      },
      "particles": {
        "color": {
          "value": "#ffffff"
        },
        "move": {
          "enable": true,
          "speed": {
            "min": 0.1,
            "max": 1
          }
        },
        "number": {
          "value": 160,
          "density": {
            "enable": true,
            "width": 1920,
            "height": 1080
          }
        },
        "opacity": {
          "value": {
            "min": 0.1,
            "max": 1
          },
          "animation": {
            "enable": true,
            "speed": 1,
            "sync": false
          }
        },
        "size": {
          "value": {
            "min": 1,
            "max": 2
          }
        }
      },
      "interactivity": {
        "events": {
          "onClick": {
            "enable": true,
            "mode": "repulse"
          },
          "onHover": {
            "enable": true,
            "mode": "bubble"
          }
        },
        "modes": {
          "bubble": {
            "distance": 250,
            "duration": 2,
            "opacity": 0,
            "size": 0
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          }
        }
      }
    }
  });
};