const buttons = document.querySelectorAll("[data-option]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((button) => button.classList.remove("active"));
    // button.classList.add("active");
    const tabs = document.querySelectorAll("[role='tabpanel']");

    tabs.forEach((tab) => tab.setAttribute(`aria-hidden`, "tab-true"));

    const btnId = button.getAttribute("aria-controls");
    const panel = document.querySelector(`#${btnId}`);
    const tab = panel.setAttribute("aria-hidden", "tab-false");
    // console.log(tab);
  });
});

function getPastValue(time) {
  switch (time) {
    case "daily":
      return "Yesterday";
      break;
    case "weekly":
      return "Last Week";
      break;
    case "monthly":
      return "Last Month";
      break;
    default:
      return;
  }
}

function retrieveTimeData(obj, period) {
  // console.log(obj.time["title"]);
  return obj.time[period];
}

function cardInformation(data) {
  const HTMLString = Object.entries(data)
    .map((time) => {
      {
        const title = time[1].map((t) => t.title);
        const timeperiod = time[0];
        const previousTime = getPastValue(timeperiod);
        return `   
        <div class="card_conttainer grid" id="panel-${timeperiod}" role="tabpanel" aria-labelledby="tab-${timeperiod}" aria-hidden="tab-${timeperiod === "daily" ? "false" : "true"}">
        <div class="card work__card">
          <div class="card__content">
            <div class="card__upper--content">
              <p class="card__title">${title[0]}</p>
              <div class="more">
                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"></path></svg>
              </div>
            </div>
            <div class="lower--content">
              <p class="card__time">${retrieveTimeData(...time[1].filter((t) => t.title === "Work"), "current")}hrs</p>
              <p class="card__date--hrs">${previousTime} - ${retrieveTimeData(...time[1].filter((t) => t.title === "Work"), "previous")}hrs</p>
            </div>
          </div>
        </div>
  
        <div class="card play__card">
          <div class="card__content">
            <div class="card__upper--content">
              <p class="card__title">${title[1]}</p>
              <div class="more">
                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"></path></svg>
              </div>
            </div>
            <div class="lower--content">
              <p class="card__time">${retrieveTimeData(...time[1].filter((t) => t.title === "Play"), "current")}hrs</p>
              <p class="card__date--hrs">${previousTime} - ${retrieveTimeData(...time[1].filter((t) => t.title === "Play"), "previous")}hrs</p>
            </div>
          </div>
        </div>
  
        <div class="card study__card">
          <div class="card__content">
            <div class="card__upper--content">
              <p class="card__title">${title[2]}</p>
              <div class="more">
                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"></path></svg>
              </div>
            </div>
            <div class="lower--content">
              <p class="card__time">${retrieveTimeData(...time[1].filter((t) => t.title === "Study"), "current")}hrs</p>
              <p class="card__date--hrs">${previousTime} - ${retrieveTimeData(...time[1].filter((t) => t.title === "Study"), "previous")}hrs</p>
            </div>
          </div>
        </div>
  
        <div class="card excercise__card">
          <div class="card__content">
            <div class="card__upper--content">
              <p class="card__title">${title[3]}</p>
              <div class="more">
                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"></path></svg>
              </div>
            </div>
            <div class="lower--content">
              <p class="card__time">${retrieveTimeData(...time[1].filter((t) => t.title === "Exercise"), "current")}hrs</p>
              <p class="card__date--hrs">${previousTime} - ${retrieveTimeData(...time[1].filter((t) => t.title === "Exercise"), "previous")}hrs</p>
            </div>
          </div>
        </div>
  
        <div class="card social__card">
          <div class="card__content">
            <div class="card__upper--content">
              <p class="card__title">${title[4]}</p>
              <div class="more">
                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"></path></svg>
              </div>
            </div>
            <div class="lower--content">
              <p class="card__time">${retrieveTimeData(...time[1].filter((t) => t.title === "Social"), "current")}hrs</p>
              <p class="card__date--hrs">${previousTime} - ${retrieveTimeData(...time[1].filter((t) => t.title === "Social"), "previous")}hrs</p>
            </div>
          </div>
        </div>
  
        <div class="card self-care__card">
          <div class="card__content">
            <div class="card__upper--content">
              <p class="card__title">${title[5]}</p>
              <div class="more">
                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"></path></svg>
              </div>
            </div>
            <div class="lower--content">
              <p class="card__time">${retrieveTimeData(...time[1].filter((t) => t.title === "Self Care"), "current")}hrs</p>
              <p class="card__date--hrs">${previousTime} - ${retrieveTimeData(...time[1].filter((t) => t.title === "Self Care"), "previous")}hrs</p>
            </div>
          </div>
        </div>
      </div>
`;
      }
    })
    .join("");
  return HTMLString;
}

async function fecthData() {
  const data = await fetch("./data.json");
  const body = await data.json();

  const dailyData = body.map((type) => ({
    time: type.timeframes.daily,
    title: type.title,
  }));
  const weeklylyData = body.map((type) => ({
    time: type.timeframes.weekly,
    title: type.title,
  }));
  const monthlyData = body.map((type) => ({
    time: type.timeframes.monthly,
    title: type.title,
  }));

  document.querySelector("#panel-container").innerHTML = cardInformation({
    daily: dailyData,
    weekly: weeklylyData,
    monthly: monthlyData,
  });
}

fecthData();

// document.addEventListener("click", (e) => {
//   const target = e.target;
//   const button = target.matches("[data-option]");
//   console.log(butto);
// });
