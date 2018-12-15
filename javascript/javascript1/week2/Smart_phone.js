var activities = [];
var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();
var D = year + '/' + month + '/' + day;
let theLimit = 240;
let totalDuration = 0;
function addActivity(date, activity, duration, starting) {
    activities.push({
        date: date,
        activity: activity,
        duration: duration,
        starting: starting
    })
}

addActivity(D, 'Sport', 90, '10:30')
addActivity(D, 'Youtube', 140, '13:00')
addActivity(D, 'Lunch', 30, '15:00')
addActivity(D, 'Study', 120, '16:00')
console.log(activities);

function showStatus() {
    for (let i = 0; i < activities.length; i++)
        totalDuration += activities[i].duration;
    if (totalDuration > theLimit) {
        console.log("You have reached your limit, no more smartphoning for you!");
    }

    if (activities.length == 0) {
        console.log("Add some activities before calling showStatus.");
    }
    else { console.log("You have added " + activities.length + " activities. They amount to " + totalDuration + " min. of usage."); }
    console.log('You have ' + activities.length + ' activities today.');
    
}

showStatus();

function myMax() {
    var maxDuration = 0;

    for (let i = 0; i != activities.length; ++i) {
        if (activities[i].duration > maxDuration) {
            maxDuration = activities[i].duration;
            maxActivity = activities[i].activity;
            x= [maxActivity, maxDuration];
        }
    }

    return x;
}
let mostTimeSpent = myMax(activities);
console.log('The activity you spent most of the time is: '+mostTimeSpent[0]+' ,at a rate of '+mostTimeSpent[1]+' minutes.');
