function loadCommits() {
    $('#commits').empty();
    const url = `https://api.github.com/repos/${$('#username').val()}/${$('#repo').val()}/commits`;
    $.get(url).then(displayCommits).catch(displayError);

    function displayCommits(commits) {
        for (let obj of commits) {
            $('#commits').append($('<li>').text(`${obj.commit.author.name}: ${obj.commit.message}`))
        }
    }

    function displayError(error) {
        $('#commits').append($('<li>')).text(`Error: ${error.status} (${error.statusText})`)
    }
}
