

function meetTheTeamCreate() {
    ////MEET THE TEAM CONTENT
    const meetTheTeam = document.createElement('div');
    meetTheTeam.classList.add('meetTheTeam');
    meetTheTeam.classList.add('tabContents')
    meetTheTeam.id = '3';
    content.appendChild(meetTheTeam);

    const meetTheTeamHeader = document.createElement('div');
    meetTheTeamHeader.classList.add('tabContentHeader');
    meetTheTeamHeader.classList.add('titleContainer');
    meetTheTeam.appendChild(meetTheTeamHeader);

    const meetTheTeamHeaderHeading = document.createElement('h1');
    meetTheTeamHeaderHeading.classList.add('a');
    meetTheTeamHeaderHeading.textContent = 'MEET THE TEAM!'
    meetTheTeamHeader.appendChild(meetTheTeamHeaderHeading);


    const headChef = document.createElement('div');
    headChef.classList.add('contentContainer');
    meetTheTeam.appendChild(headChef);

    const headChefName = document.createElement('h3');
    headChefName.classList.add('headChefName');
    headChef.appendChild(headChefName);

    const headChefNum = document.createElement('p');
    headChefNum.textContent = '555-555-4444';
    headChef.appendChild(headChefNum);
    
    const headChefEmail = document.createElement('p');
    headChefEmail.textContent = 'headChefEmail@gmail.com';
    headChef.appendChild(headChefEmail);

    const juniorChef = document.createElement('div');
    juniorChef.classList.add('contentContainer');
    meetTheTeam.appendChild(juniorChef);

    const juniorChefName = document.createElement('h3');
    juniorChefName.classList.add('juniorChefName');
    juniorChef.appendChild(juniorChefName);

    const juniorChefNum = document.createElement('p');
    juniorChefNum.textContent = '111-111-2222';
    juniorChef.appendChild(juniorChefNum);
    
    const juniorChefEmail = document.createElement('p');
    juniorChefEmail.textContent = 'juniorChefEmail@gmail.com';
    juniorChef.appendChild(juniorChefEmail); 
}

export {meetTheTeamCreate,}