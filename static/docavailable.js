const teamMembers = [
    {
        src: 'assets/dharam.jpg',
        name: 'Sammarth Vala',
        alias: '@Dharam',
        email: 'Sammarth@example.com',
        status: 'active',
        tags: ['Dentist']
    },
    {
        src: 'assets/Hasti.jpg',
        name: 'Hasti Hirpara',
        alias: '@Hasti',
        email: 'Hasti@example.com',
        status: 'active',
        tags: ['ENT', 'Surgeon']
    },
    {
        src: 'assets/Tavish.jpg',
        name: 'Tavish Gupta',
        email: 'Tavish@example.com',
        alias: '@backend',
        status: 'inactive',
        tags: ['Dentist', 'Surgeon']
    },

    {
        src: 'assets/Rhythm.jpg',
        name: 'Rhythm gandhi',
        email: 'rhythm@example.com',
        alias: '@surti',
        status: 'offline',
        tags: ['ENT']
    },
    {
        name: 'Yug Brahmbhatt',
        src: 'assets/yug.jpg',
        email: 'YugBrahmbhatt@example.com',
        alias: '@melissa',
        status: 'active',
        tags: ['Surgeon']
    },
    {
        name: 'Nemil Shah',
        src: 'assets/nemil.jpg',
        email: 'Nemil.shah@example.com',
        alias: '@Nemil',
        status: 'active',
        tags: ['ENT', 'Surgeon']
    },
    {
        src: 'assets/hritik.jpg',
        name: 'Hritik Shah',
        email: 'Hritikshah@example.com',
        alias: '@Eren.Jaeger',
        status: 'inactive',
        tags: ['Surgeon']
    },
];


let tableRowCount = document.getElementsByClassName('table-row-count');
tableRowCount[0].innerHTML = `(${teamMembers.length}) Members`;
console.log(tableRowCount)

let tableBody = document.getElementById('team-member-rows');

const itemsOnPage = 5;

const numberOfPages = Math.ceil(teamMembers.length / itemsOnPage);

const start = (new URLSearchParams(window.location.search)).get('page') || 1;

const mappedRecords = teamMembers
.filter((teamMember, i) => (((start - 1) * itemsOnPage) < i + 1) && (i+1 <= start * itemsOnPage))
.map(
  (teamMember) => {
    return `<tr>
        <td class="team-member-profile">
            <img src="${teamMember.src}" alt="${teamMember.name}">
            <span class="profile-info">
                <span class="profile-info__name">
                    ${teamMember.name}
                </span>
                <span class=profile-info__alias>
                    ${teamMember.alias}
                </span>
            </span>
        </td>
        <td>
            <span class="status status--${teamMember.status}">
                ${teamMember.status}
            </span>
        </td>
        <td>${teamMember.email}</td>
        <td>
            <span class="tags">
                ${teamMember.tags.map((tag) => `<span class="tag tag--${tag}">${tag}</span>`).join('')}
            </span>        
        </td>
    </tr>`;
});

tableBody.innerHTML = mappedRecords.join('');

const pagination = document.querySelector('.pagination');

const linkList = [];

for (let i = 0; i < numberOfPages; i++) {
    const pageNumber = i + 1;
    
    console.log(pageNumber, start)

    linkList.push(`<li><a href="?page=${pageNumber}" ${pageNumber == start ? 'class="active"' : ''} title="page ${pageNumber}">${pageNumber}</a></li>`);
}

pagination.innerHTML = linkList.join('');