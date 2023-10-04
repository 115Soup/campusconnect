// my_profile.js

document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.querySelector(".edit-user-info");
    const saveButton = document.querySelector(".save-user-info");
    const formFields = document.querySelectorAll("form input[type='text']");

    let editMode = false;

    editButton.addEventListener("click", function () {
        editMode = !editMode;
        formFields.forEach((field) => {
            field.disabled = !editMode;
        });

        if (editMode) {
            editButton.style.display = "none";
            saveButton.style.display = "inline-block";
        } else {
            editButton.style.display = "inline-block";
            saveButton.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
        const editBioButton = document.querySelector(".edit-bio");
        const bioText = document.querySelector(".bio-text");
        const bioEditForm = document.querySelector(".bio-edit-form");
        const bioTextarea = document.querySelector("#bio");

        let bioEditMode = false;

        editBioButton.addEventListener("click", function () {
            bioEditMode = !bioEditMode;
            bioText.style.display = bioEditMode ? "none" : "block";
            bioEditForm.style.display = bioEditMode ? "block" : "none";
            bioTextarea.value = bioText.innerText.trim(); // Set textarea value from bio text

            if (bioEditMode) {
                editBioButton.style.display = "none";
            } else {
                editBioButton.style.display = "inline-block";
            }
        });

        // Handle cancel button
        const cancelButton = document.querySelector(".cancel-bio");
        cancelButton.addEventListener("click", function () {
            bioEditMode = false;
            bioText.style.display = "block";
            bioEditForm.style.display = "none";
            editBioButton.style.display = "inline-block";
        });
    });

    function openFileInput() {
        document.getElementById("profile-photo-input").click();
    }

    