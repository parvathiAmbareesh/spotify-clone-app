// https://developer.spotify.com/documentation/web-playback-sdk/tutorials/getting-started

export const authEndpoint = "https://accounts.spotify.com/authorize"; //Takes user to Spotify auth page
const redirectUri = "http://localhost:3000/"; //Brings user back to app after auth
const clientId = "3cf68b602e814b7b8acb7487146dbf89";

const scopes =[ //What all privileges the user's got
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

//cause accessToken=mysecretkey&name=someRandomName
export const getTokenFromUrl = () =>{
    return window.location.hash 
    .substring(1)
    .split('&')
    .reduce((initial, item)=>{
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial
    }, {});
}

//Generating a URL to send the user off to
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
//scopes.join to join all the 5 scopes in the list, separated by a space (ASCII %20)
//token = string that's like a pass, dialog=true is the prompt