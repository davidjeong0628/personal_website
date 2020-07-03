function projectHeight() {
    var project = document.getElementById('personal-website');
    var projectStyle = getComputedStyle(project);
    var projectHeight = (2 * parseFloat(projectStyle.marginLeft)) + (2 * parseFloat(projectStyle.borderLeft)) +
        parseFloat(projectStyle.width);

    var allProjects = document.getElementsByClassName('project');

    var i;
    for (i = 0; i < allProjects.length; i += 1) {
        allProjects[i].style.height = projectHeight + "px";
    }
}
