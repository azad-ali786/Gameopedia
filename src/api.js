// Getting date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
      return `0${month}`;
    } else {
      return month;
    }
  };
  const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
      return `0${day}`;
    } else {
      return day;
    }
  };
  
  // Date vars
  const currentYear = new Date().getFullYear();
  const currentMonth = getCurrentMonth();
  const currentDay = getCurrentDay();
  
  const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
  const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
  const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
  
  // Key things
  const key = "de599ea34a6a49fe960098c7e45ddaee"; // YOUR KEY GOES HERE
  const key_url = `key=${key}`;
  
  // Base URL
  const base_url = `https://api.rawg.io/api/`;
  
  // Popular games
  const popular_games = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`; 
  export const popularGamesURL = () => `${base_url}${popular_games}`;