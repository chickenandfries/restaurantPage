

function homeCreate() {
    ////HOME CONTENT
    const home = document.createElement('div');
    home.classList.add('tabContents')
    home.classList.add('home');
    home.classList.add('active');
    home.id = '1';
    console.log(typeof(home.id));
    
    home.dataset.target = 1;
    content.appendChild(home);

    ////home header
    const homeHeader = document.createElement('div');
    homeHeader.classList.add('tabContentHeader');
    homeHeader.classList.add('titleContainer');
    home.appendChild(homeHeader);
    
    const homeHeaderHeading = document.createElement('h1');
    homeHeaderHeading.classList.add('homeHeaderHeading');
    homeHeaderHeading.textContent = 'Potato Restaurant!';
    homeHeader.appendChild(homeHeaderHeading);

    ////home review
    const homeReview = document.createElement('div');
    homeReview.classList.add('homeReview');
    homeReview.classList.add('contentContainer');
    home.appendChild(homeReview);

    const homeReviewPara = document.createElement('p');
    homeReviewPara.classList.add('homeReviewPara');
    homeReviewPara.textContent =`"potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato"`
    homeReview.appendChild(homeReviewPara);

    const homeReviewName = document.createElement('h3');
    homeReviewName.classList.add('homeReviewName');
    homeReviewName.textContent = 'potatoLover69';
    homeReview.appendChild(homeReviewName);


    ////home Hours
    const homeHours = document.createElement('div');
    homeHours.classList.add('homeHours');
    homeHours.classList.add('contentContainer');
    home.appendChild(homeHours);

    const homeHoursHeading = document.createElement('h3');
    homeHoursHeading.classList.add('homeHoursHeading');
    homeHoursHeading.textContent = 'Hours'
    homeHours.appendChild(homeHoursHeading);

    const homeHoursSun = document.createElement('span');
    homeHoursSun.classList.add('homeHoursDay');
    homeHoursSun.textContent = 'Sunday: 11am - 5pm';
    homeHours.appendChild(homeHoursSun);

    const homeHoursMon = document.createElement('span');
    homeHoursMon.classList.add('homeHoursDay');
    homeHoursMon.textContent = 'Monday: closed!';
    homeHours.appendChild(homeHoursMon);

    const homeHoursTue = document.createElement('span');
    homeHoursTue.classList.add('homeHoursDay');
    homeHoursTue.textContent = 'Tuesday: 12pm - 10pm';
    homeHours.appendChild(homeHoursTue);

    const homeHoursWed = document.createElement('span');
    homeHoursWed.classList.add('homeHoursDay');
    homeHoursWed.textContent = 'Wednesday: 12pm - 10pm';
    homeHours.appendChild(homeHoursWed);

    const homeHoursThu = document.createElement('span');
    homeHoursThu.classList.add('homeHoursDay');
    homeHoursThu.textContent = 'Thursday: 12pm - 10pm';
    homeHours.appendChild(homeHoursThu);

    const homeHoursFri = document.createElement('span');
    homeHoursFri.classList.add('homeHoursDay');
    homeHoursFri.textContent = 'Friday: 12pm - 11pm';
    homeHours.appendChild(homeHoursFri);

    const homeHoursSat = document.createElement('span');
    homeHoursSat.classList.add('homeHoursDay');
    homeHoursSat.textContent = 'Saturday: 11am - 11pm';
    homeHours.appendChild(homeHoursSat);

    ////home Location
    const homeLocation = document.createElement('div');
    homeLocation.classList.add('homeLocation');
    homeLocation.classList.add('contentContainer');
    home.appendChild(homeLocation);

    const homeLocationHeading = document.createElement('h3');
    homeLocationHeading.classList.add('homeLocationHeading');
    homeLocationHeading.textContent = 'Location'
    homeLocation.appendChild(homeLocationHeading);

    const homeLocationAddress = document.createElement('homeLocationAddress');
    homeLocationAddress.classList.add('homeLocationAddress');
    homeLocationAddress.textContent = 'Potato drive, Potato town, Idaho';
    homeLocation.appendChild(homeLocationAddress);
    
}


export {homeCreate,};