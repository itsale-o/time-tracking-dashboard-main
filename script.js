const dailyTimeFrame = document.getElementById("daily-info");
const weeklyTimeFrame = document.getElementById("weekly-info");
const monthlyTimeFrame = document.getElementById("monthly-info");
const cardTitles = document.querySelectorAll(".title");
const curretWorkHours = document.getElementById("current-work-hours");
const previousWorkHours = document.getElementById("previous-work-hours");
const currentPlayHours = document.getElementById("current-play-hours");
const previousPlayHours = document.getElementById("previous-play-hours");
const currentStudyHours = document.getElementById("current-study-hours");
const previousStudyHours = document.getElementById("previous-study-hours");
const currentExerciseHours = document.getElementById("current-exercise-hours");
const previousExerciseHours = document.getElementById("previous-exercise-hours");
const currentSocialHours = document.getElementById("current-social-hours");
const previousSocialHours = document.getElementById("previous-social-hours");
const currentSelfCareHours = document.getElementById("current-self-care-hours");
const previousSelfCareHours = document.getElementById("previous-self-care-hours");

fetch("data.json").then(response => {
    response.json().then(data => {
        data.map(data => {
            dailyTimeFrame.addEventListener("click", e => {
                dailyTimeFrame.classList.add("selected-time-frame");
                if(weeklyTimeFrame.classList.contains("selected-time-frame") || monthlyTimeFrame.classList.contains("selected-time-frame")){
                    weeklyTimeFrame.classList.remove("selected-time-frame");
                    monthlyTimeFrame.classList.remove("selected-time-frame");                    
                };

                cardTitles.forEach(cardTile => {
                    if(data.title == "Work" && data.title == cardTile.innerHTML){
                        curretWorkHours.innerHTML = `${data.timeframes.daily.current}hrs`;
                        previousWorkHours.innerHTML = `Last Day - ${data.timeframes.daily.previous}hrs`;
                    };

                    if(data.title == "Play" && data.title == cardTile.innerHTML){
                        currentPlayHours.innerHTML = `${data.timeframes.daily.current}hrs`;
                        previousPlayHours.innerHTML = `Last Day - ${data.timeframes.daily.previous}hrs`;
                    };

                    if(data.title == "Study" && data.title == cardTile.innerHTML){
                        currentStudyHours.innerHTML = `${data.timeframes.daily.current}hrs`;
                        previousStudyHours.innerHTML = `Last Day - ${data.timeframes.daily.previous}hrs`;
                    };

                    if(data.title == "Exercise" && data.title == cardTile.innerHTML){
                        currentExerciseHours.innerHTML = `${data.timeframes.daily.current}hrs`;
                        previousExerciseHours.innerHTML = `Last Day - ${data.timeframes.daily.previous}hrs`;
                    };

                    if(data.title == "Social" && data.title == cardTile.innerHTML){
                        currentSocialHours.innerHTML = `${data.timeframes.daily.current}hrs`;
                        previousSocialHours.innerHTML = `Last Day - ${data.timeframes.daily.previous}hrs`;
                    };

                    if(data.title == "Self Care" && data.title == cardTile.innerHTML){
                        currentSelfCareHours.innerHTML = `${data.timeframes.daily.current}hrs`;
                        previousSelfCareHours.innerHTML = `Last Day - ${data.timeframes.daily.previous}hrs`;
                    };
                });
            });

            weeklyTimeFrame.addEventListener("click", e => {
                weeklyTimeFrame.classList.add("selected-time-frame");
                if(dailyTimeFrame.classList.contains("selected-time-frame") || monthlyTimeFrame.classList.contains("selected-time-frame")){
                    dailyTimeFrame.classList.remove("selected-time-frame");
                    monthlyTimeFrame.classList.remove("selected-time-frame");    
                };

                cardTitles.forEach(cardTile => {
                    if(data.title == "Work" && data.title == cardTile.innerHTML){
                        curretWorkHours.innerHTML = `${data.timeframes.weekly.current}hrs`;
                        previousWorkHours.innerHTML = `Last Week - ${data.timeframes.weekly.previous}hrs`;
                    };

                    if(data.title == "Play" && data.title == cardTile.innerHTML){
                        currentPlayHours.innerHTML = `${data.timeframes.weekly.current}hrs`;
                        previousPlayHours.innerHTML = `Last Week - ${data.timeframes.weekly.previous}hrs`;
                    };

                    if(data.title == "Study" && data.title == cardTile.innerHTML){
                        currentStudyHours.innerHTML = `${data.timeframes.weekly.current}hrs`;
                        previousStudyHours.innerHTML = `Last Week - ${data.timeframes.weekly.previous}hrs`;
                    };

                    if(data.title == "Exercise" && data.title == cardTile.innerHTML){
                        currentExerciseHours.innerHTML = `${data.timeframes.weekly.current}hrs`;
                        previousExerciseHours.innerHTML = `Last Week - ${data.timeframes.weekly.previous}hrs`;
                    };

                    if(data.title == "Social" && data.title == cardTile.innerHTML){
                        currentSocialHours.innerHTML = `${data.timeframes.weekly.current}hrs`;
                        previousSocialHours.innerHTML = `Last Week - ${data.timeframes.weekly.previous}hrs`;
                    };

                    if(data.title == "Self Care" && data.title == cardTile.innerHTML){
                        currentSelfCareHours.innerHTML = `${data.timeframes.weekly.current}hrs`;
                        previousSelfCareHours.innerHTML = `Last Week - ${data.timeframes.weekly.previous}hrs`;
                    };
                });
            });

            monthlyTimeFrame.addEventListener("click", e => {
                monthlyTimeFrame.classList.add("selected-time-frame");
                if(dailyTimeFrame.classList.contains("selected-time-frame") || weeklyTimeFrame.classList.contains("selected-time-frame")){
                    dailyTimeFrame.classList.remove("selected-time-frame");
                    weeklyTimeFrame.classList.remove("selected-time-frame");                    
                };

                cardTitles.forEach(cardTile => {
                    if(data.title == "Work" && data.title == cardTile.innerHTML){
                        curretWorkHours.innerHTML = `${data.timeframes.monthly.current}hrs`;
                        previousWorkHours.innerHTML = `Last Month - ${data.timeframes.monthly.previous}hrs`;
                    };

                    if(data.title == "Play" && data.title == cardTile.innerHTML){
                        currentPlayHours.innerHTML = `${data.timeframes.monthly.current}hrs`;
                        previousPlayHours.innerHTML = `Last Month - ${data.timeframes.monthly.previous}hrs`;
                    };

                    if(data.title == "Study" && data.title == cardTile.innerHTML){
                        currentStudyHours.innerHTML = `${data.timeframes.monthly.current}hrs`;
                        previousStudyHours.innerHTML = `Last Month - ${data.timeframes.monthly.previous}hrs`;
                    };

                    if(data.title == "Exercise" && data.title == cardTile.innerHTML){
                        currentExerciseHours.innerHTML = `${data.timeframes.monthly.current}hrs`;
                        previousExerciseHours.innerHTML = `Last Month - ${data.timeframes.monthly.previous}hrs`;
                    };

                    if(data.title == "Social" && data.title == cardTile.innerHTML){
                        currentSocialHours.innerHTML = `${data.timeframes.monthly.current}hrs`;
                        previousSocialHours.innerHTML = `Last Month - ${data.timeframes.monthly.previous}hrs`;
                    };

                    if(data.title == "Self Care" && data.title == cardTile.innerHTML){
                        currentSelfCareHours.innerHTML = `${data.timeframes.monthly.current}hrs`;
                        previousSelfCareHours.innerHTML = `Last Month - ${data.timeframes.monthly.previous}hrs`;
                    };
                });
            });        
        }); 
    });
});