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
  
  const upcoming_games = `games?${key_url}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
  const newGames = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;
  const popular_games = `games?${key_url}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`; 
  export const popularGamesURL = () => `${base_url}${popular_games}`;
  export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
  export const newGamesURL = () => `${base_url}${newGames}`;

  //Game details 
  export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?${game_id}&${key_url}`;
//Screenshots
export const gameScreenshotURL = (game_id) =>
   `${base_url}games/${game_id}/screenshots?${key_url}`;
