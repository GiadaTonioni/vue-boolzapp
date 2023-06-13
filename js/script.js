const {createApp} = Vue;

let id = 0;

createApp({
    data(){
        return{
            activeContact : 0,
            contacts:[
                {
                    name: 'Michele',
                    avatar: '1',
                    visibile: true,
                    img: './img/avatar_1.jpg',
                    messages: ['Come stai?', 'Potrebbe andare meglio', 'mi dispiace, come mai?']
                },
                {
                    name: 'Fabio',
                    avatar: '2',
                    visibile: false,
                    img: './img/avatar_2.jpg',
                    messages: ['Hai chiuso le finestre?', 'Sisi, prima di uscire']
                },
                {
                    name: 'Samuele',
                    avatar: '3',
                    visibile: true,
                    img: './img/avatar_3.jpg',
                    messages: ['Alla fine ho le ferie ad Agosto', 'Perfetto, organizziamoci', 'ci vediamo in bar']
                },
                {
                    name: 'Michele',
                    avatar: '4',
                    visibile: true,
                    img: './img/avatar_4.jpg',
                    messages: ['Come stai?', 'Potrebbe andare meglio', 'mi dispiace, come mai?']
                },
                {
                    name: 'Michele',
                    avatar: '5',
                    visibile: false,
                    img: './img/avatar_5.jpg',
                    messages: ['Come stai?', 'Potrebbe andare meglio', 'mi dispiace, come mai?']
                },
                {
                    name: 'Michele',
                    avatar: '6',
                    visibile: true,
                    img: './img/avatar_6.jpg',
                    messages: ['Come stai?', 'Potrebbe andare meglio', 'mi dispiace, come mai?']
                },
                {
                    name: 'Michele',
                    avatar: '7',
                    visibile: true,
                    img: './img/avatar_7.jpg',
                    messages: ['Come stai?', 'Potrebbe andare meglio', 'mi dispiace, come mai?']
                },
                {
                    name: 'Michele',
                    avatar: '8',
                    visibile: true,
                    img: './img/avatar_8.jpg',
                    messages: ['Come stai?', 'Potrebbe andare meglio', 'mi dispiace, come mai?']
                },
            ]
        }
    }
})