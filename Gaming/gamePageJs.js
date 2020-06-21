const gameNameCookie = document.cookie;
const reg = /gameName=\w+/g;
let gameName = gameNameCookie.match(reg).join(''); // gameName=xxxx format
gameName = gameName.slice(9);  // except "gameName="
