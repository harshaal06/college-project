let reviewListName = [];
let reviewListMsg = [];

const reviewBox = document.getElementById("review-Box");

const reviewNameItemsLS = localStorage.getItem("reviewListName");
const reviewMsgItemsLS = localStorage.getItem("reviewListMsg");

if (reviewNameItemsLS) {
    reviewListName = JSON.parse(reviewNameItemsLS);
    reviewListMsg = JSON.parse(reviewMsgItemsLS);
    loadList();
}

function addReview() {
    const inputName = document.getElementById("input-Name");
    const name = inputName.value;
    const inputMsg = document.getElementById("input-Msg");
    const msg = inputMsg.value;

    if (name) {
        reviewListName.push(name);
        reviewListMsg.push(msg);

        localStorage.setItem("reviewListName", JSON.stringify(reviewListName));
        localStorage.setItem("reviewListMsg", JSON.stringify(reviewListMsg));

        inputName.value = "";
        inputMsg.value = "";
        loadList();
    }
    else {
        alert("Please enter name");
    }
}

function loadList() {
    reviewBox.innerHTML = "";

    for (let i = 0; i < reviewListName.length; i++) {
        let name = reviewListName[i];
        let msg = reviewListMsg[i];
        reviewBox.innerHTML = reviewBox.innerHTML + `<div class="bg-white text-center shadow p-3 py-4 border d-inline-block" style="width: 290px;">
                    <img style="width: 30%;" class="" src="./profile.png" alt="">
                    <h5 class="mt-3">${name}</h5>
                    <p class="ha mt-3">"${msg}"</p>
                </div>`;
    }
}