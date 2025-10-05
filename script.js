document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const letterContent = document.getElementById('letterContent');

    // ฟังก์ชันเมื่อคลิกที่ซองจดหมาย
    envelope.addEventListener('click', () => {
        // 1. เพิ่ม class 'open' ให้ซองจดหมายเพื่อเปิดฝา
        envelope.classList.add('open');

        // 2. ซ่อนซองจดหมายและแสดงข้อความเซอร์ไพรส์หลังจากเปิดฝา
        setTimeout(() => {
            letterContent.classList.add('show'); // แสดงข้อความ
            // คุณอาจจะซ่อนซองจดหมายไปเลยก็ได้:
            // envelope.style.display = 'none'; 
        }, 500); // รอ 0.5 วินาที (เท่ากับเวลา transition ของฝาซอง)
    });
});