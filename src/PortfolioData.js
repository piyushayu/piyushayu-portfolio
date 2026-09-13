import vetshaathi from "./assets/vetshaathi.png";
import myfrontfolio from "./assets/myfrontfolio.png";

function getPortfolioData() {
  const portfolio = {
  "projects": [
    {
      "title": "vetshaathi",
      "description": "virtual consultant "
    },
    {
      "title": "myfrontfolio",
      "description": "ready made template for portfolio"
    }
  ]
};
  return portfolio;
}

export default getPortfolioData;