let themeableContainer;

const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse (localStorage.getItem("mode"));

tsParticles
  .load("tsparticles", {
    themes: [
      {
        name: "light",
        default: {
          value: true,
          mode: "light"
        },
        options: {
          background: {
            color: "#ffffff"
          },
          particles: {
            color: {
              value: ["#000000", "#0000ff"]
            }
          }
        }
      },
      {
        name: "dark",
        default: {
          value: true,
          mode: "dark"
        },
        options: {
          background: {
            color: "#000000"
          },
          particles: {
            color: {
              value: ["#ffffff", "#ff0000"]
            }
          }
        }
      }
    ],
    fpsLimit: 60,
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      },
      shape: {
        type: ["circle", "square"]
      },
      opacity: {
        value: 1
      },
      size: {
        value: 30,
        random: {
          enable: true,
          minimumValue: 15
        }
      },
      rotate: {
        value: 0,
        direction: "random",
        animation: {
          speed: 5,
          enable: true
        }
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      }
    },
    detectRetina: true
  })


  .then((container) => {
    themeableContainer = container;
    themeableContainer.canvas.initBackground();
    console.log(themeableContainer.actualOptions);
  });


function updateBody() {
    
    if(inputEl.checked) {

        
        bodyEl.style.background === themeableContainer.loadTheme("light");

    } else {

        bodyEl.style.background === themeableContainer.loadTheme("dark");
        
    }
}

inputEl.addEventListener("input", () => {

    updateBody();
     updateLocalStorage();
})


 function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
 }

