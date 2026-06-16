let userName = 'max';

console.log(typeof userName);

type UserName = typeof userName;


const settings = {
    difficulty: 'easy',
    minLevel: 10,
    didStart: false,
    players: ['John', 'Jane']
};


/* type Settings = {
    difficulty: string;
    minLevel: number;
    didStart: boolean;
    players: string[];
}; */

// automatically sets up the type instead of the above which you can introduce typos
type Settings = typeof settings;


function loadData(settings: Settings) {
    //....
}


loadData(settings);



