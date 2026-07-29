window.onerror = function (message, source, line, column, error) {
    alert(
        "Lỗi:\n" +
        message +
        "\nDòng: " + line
    );
};
alert("app.js đã chạy");// ==========================================
// VTP Check V4
// app.js
// ==========================================

const videoInput = document.getElementById("videoInput");
const video = document.getElementById("video");
const scanBtn = document.getElementById("scanBtn");
const result = document.getElementById("result");
const progressBar = document.getElementById("progressBar");

let selectedFile = null;

// =========================
// Chọn video
// =========================

videoInput.addEventListener("change", (e) => {

    const file = e.target.files[0];

    if (!file) return;

    selectedFile = file;

    video.src = URL.createObjectURL(file);

    result.value =
`✔ Đã chọn video

Tên:
${file.name}

Dung lượng:
${(file.size / 1024 / 1024).toFixed(2)} MB`;

});

// =========================
// Bắt đầu quét
// =========================

scanBtn.addEventListener("click", async () => {

    if (!selectedFile) {

        alert("Hãy chọn video.");

        return;

    }

    progressBar.style.width = "10%";

    try {

        await waitVideoReady();

        progressBar.style.width = "100%";

        result.value +=

`\n
----------------------

Thời lượng:

${video.duration.toFixed(2)} giây

Độ phân giải:

${video.videoWidth} × ${video.videoHeight}`;

    }

    catch (err) {

        alert(err.message);

    }

});

// =========================
// Đợi video sẵn sàng
// =========================

function waitVideoReady() {

    return new Promise((resolve) => {

        if (video.readyState >= 1) {

            resolve();

            return;

        }

        video.onloadedmetadata = () => {

            resolve();

        };

    });

}