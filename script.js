function initSkillsPage() {
    $.ajax('skills.json').done( function (skills){
        var list= $('#skills-page ul');

        

        var result= skills.map(function(skill) {
            var endorsedBy= skill.endorsedBy;

            if (endorsedBy) {
                endorsedBy = `<span class="endorsed">- Endorsed by</span> ${skill.endorsedBy}`
            }

            return `<li>${skill.name.toUpperCase()} - ${skill.endorsments} ${endorsedBy} </li>`
        })
        list.html(result);
    })
}

function initMenu() {
    $('header ul a').click(function(e) {
        var page = e.target.getAttribute('data-page');
        console.log(' : ', page);
        $('.page-block').hide();
        $(`#${page}-page`).slideDown();
    })
}

initMenu();
initSkillsPage();
$('#skills-page').show();

