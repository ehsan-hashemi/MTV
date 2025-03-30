// آرایه زمان‌بندی نمونه (فرمت HH:MM)
// در صورت نیاز می‌توانید این مقادیر را به برنامه واقعی تغییر دهید.
const scheduleData = [
    { time: "16:00", title: "کبوتر و ربات" },
    { time: "16:05", title: "جوک خنده دار رویا میر علمی در برنامه ۱۰۰۱" },
    { time: "16:07", title: "کار خنده دار حشمت فردوس با محمد در ستایش ۲" },
    { time: "16:12", title: "شکر کردن عجیب جناب خان در برنامه ۱۰۰۱" },
    { time: "16:15", title: "چالش دعای تحویل سال علیرضا قربانی و مهیار علیزاده"},
    { time: "16:20", title: "جد نرمالو در اسکیتی" },
    { time: "16:25", title: "داری چیچی می‌گویی فیل بستنی فروش در زوتوپیا" },
    { time: "16:28", title: "ای وای چسبو و خراب شدن ماسک صورتش در اسکیتی" },
    { time: "16:30", title: "خنده شیطانی دلقک ماهی در اسکیتی" },
    { time: "16:35", title: "آموزش ساخت لپ تاپ واقعی" },
    { time: "16:50", title: "آموزش ساخت کامپیوتر واقعی" },
    { time: "17:05", title: "سکانس اول سینمایی کبوتر و ربات" },
    { time: "17:07", title: "انیمیشن کبوتر و ربات، قسمت ویژه ولادت امام علی (ع)" },
    { time: "17:15", title: "متن آتشین ehsan" },
  ];
  
  function convertTimeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  }
  
  function getLivePrograms() {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    let currentProgram = null;
    let nextProgram = null;
    
    for (let i = 0; i < scheduleData.length; i++) {
      if (currentMinutes >= convertTimeToMinutes(scheduleData[i].time)) {
        currentProgram = scheduleData[i];
        nextProgram = (i < scheduleData.length - 1) ? scheduleData[i + 1] : null;
      }
    }
    return { currentProgram, nextProgram };
  }
  
  function updateLivePrograms() {
    const liveNowEl = document.getElementById("live-now");
    const liveNextEl = document.getElementById("live-next");
    const { currentProgram, nextProgram } = getLivePrograms();
    
    liveNowEl.textContent = currentProgram ? currentProgram.title : "پخشی در حال اجرا نیست.";
    liveNextEl.textContent = nextProgram ? nextProgram.title : "برنامه بعدی تعیین نشده!";
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    updateLivePrograms();
    setInterval(updateLivePrograms, 60000); // به‌روزرسانی هر دقیقه
  });  