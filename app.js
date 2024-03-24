$(document).ready(function () {
    let pages = [
        "home",
        "academics",
        "robotics",
        "volunteering",
        "job",
        "skills",
        "awards",
        "projects",
        "hobbies",
        "résumé",
        "contact",
    ];
    function loadTextIntoDiv(filePath, divId) {
        $.get(filePath, function (data) {
            $(divId).html(data);
        }).fail(function () {
            console.error("There was a problem fetching the file:", filePath);
        });
    }

    pages.forEach((page) => {
        loadTextIntoDiv(`pages/${page}.html`, `#v-pills-${page}`);
    });

    $(".submit-btn").click(function () {
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const subject = $("#subject").val();
        const message = $("#message").val();

        const mailtoLink = `mailto:quinnpfeifer@icloud.com?subject=${subject}&body=Name: ${
            firstName + " " + lastName
        }%0A${message}`;

        console.log(mailtoLink);
        window.location.href = mailtoLink;
    });

    $(".nav-link").click(function () {
        console.log("NAVLINK");
        $("#main-img").attr("src", "images/" + $(this).attr("id") + ".jpg");
    });
});
