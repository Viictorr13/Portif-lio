const sr = ScrollReveal ({
    distance: '35px',
    duration: 2400,
    reset: true
});

sr.reveal('.logo',{delay:210, origin: 'left'});
sr.reveal('.navlist',{delay:310, origin: 'top'});
sr.reveal('.top-btn',{delay:410, origin: 'right'});

sr.reveal('.main-content',{delay:510, origin: 'top'});
sr.reveal('.main-content h1',{delay:610, origin: 'left'});
sr.reveal('.main-content p',{delay:710, origin: 'right'});
sr.reveal('.social',{delay:810, origin: 'left'});
sr.reveal('.main-btn',{delay:910, origin: 'top'});

sr.reveal('.bottom',{delay:1010, origin: 'bottom'});
