var allQuotes = [
  {
    id: 1,
    img: "https://images.gr-assets.com/authors/1696236573p8/22302.jpg",
    qoute: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },
  {
    id: 2,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1429114964i/9810._UX200_CR0,14,200,200_.jpg",
    qoute:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
  },
  {
    id: 3,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1197881416i/13755._UX200_CR0,47,200,200_.jpg",
    qoute: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },
  {
    id: 4,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1331977133i/5768330._UX200_CR0,30,200,200_.jpg",
    qoute:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "― Bernard M. Baruch",
  },
  {
    id: 5,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1282396130i/1744830._UX200_CR0,47,200,200_.jpg",
    qoute: `“You've gotta dance like there's nobody watching,
                Love like you'll never be hurt,
                Sing like there's nobody listening,
                And live like it's heaven on earth.”`,
    author: "― William W. Purkey",
  },
  {
    id: 6,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1193930952i/61105._UX200_CR0,30,200,200_.jpg",
    qoute: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "― Dr. Seuss",
  },
  {
    id: 7,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198551937i/259666._UX200_CR0,16,200,200_.jpg",
    qoute: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
  {
    id: 8,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1356810912i/5810891._UX200_CR0,21,200,200_.jpg",
    qoute: "“Be the change that you wish to see in the world.”",
    author: "― Mahatma Gandhi",
  },
  {
    id: 9,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1605640483i/7715._UX200_CR0,33,200,200_.jpg",
    qoute: "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: "― Robert Frost",
  },
  {
    id: 10,
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1596216614i/1077326._UX200_CR0,15,200,200_.jpg",
    qoute: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    author: "― J.K. Rowling, Harry Potter and the Goblet of Fire",
  },
];
// to save current random , to top render sam random number
var current = 0;
function getQuaote(){
    var res  = document.querySelector('#result');
    var rand = Math.floor(Math.random() * allQuotes.length);
    console.log("rand : " + rand);
    console.log("current : " + current);
    if(rand === current){
        // in case of equality, just recursive , till not equality achieve
        getQuaote();
    } else {
         res.innerHTML = `
        <div class="row d-flex justify-content-center align-items-center rounded-2 p-2">
                        <div class="col-md-6">
                            <div class="img_container ">
                                <img src="${allQuotes[rand].img}" alt="img" class="w-50 h-50 rounded-circle img-fluid">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="quote_info text-start">
                                <p class="text-black h3">${allQuotes[rand].qoute}</p>
                                <h4 class=" text_main">${allQuotes[rand].author}</h4>
                            </div>
                        </div>    
                    </div>
    `;
        current = rand;
    }
   
   
}