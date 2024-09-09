function updateTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    // Thêm số 0 nếu phút hoặc giây dưới 10
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById('timeDisplay').innerHTML = h + ":" + m + ":" + s;
}

// Cập nhật thời gian mỗi giây
setInterval(updateTime, 1000);

// Hiển thị thời gian ngay khi trang được load
updateTime();
