/* joint decision phase */

// need further change
var joint_instructions1 = {  // demo1 is defined in the main text
    type: "html-keyboard-response",
    stimulus: "<p>You will now begin the final task, in which you will perform 360 trials divided over 4 blocks.</p>" +
        "<p>Every trial consists of dots moving to the left or right. Press 'f' for left and 'j' for right.</p>" +
        "<p>Make sure to not think about it for too long, because you only have 1.5 seconds to decide.</p>" +
        "<p>After making your decision, you will also be asked to report your confidence.</p>" +
        "<p>Remember the participants you encountered in the previous economic game? We have recorded their decision on the same trial. </p>" +
        "<p>You can use that information as advice to adjust your initial response.</p>" +
        "<p>Press any key when you are ready to see what advice looks like.</p>",
        post_trial_gap: para.post_trial_gap_normal
};

// Todo: how to explain their varying confidence?
var joint_instructions2 = { // demo2 is defined in the main text too 
    type: "html-keyboard-response",
    stimulus: "<p>Recall that the accuracy of both Adviser A and Adviser B (need change here) are both (something)</p>" +
        "<p>In other words, they are same accurate in determining the direction of the dots. </p>" +
        "<p>However, the confidence of the advice can vary across trials.</p>" +
        "<p>Press any key to see an example of a relatively confident decision.</p>",
        post_trial_gap: para.post_trial_gap_normal
};

var joint_instructions3 = {
    type: "html-keyboard-response",
    stimulus: "<p>During the experiment you will have less time to look at the advice.</p>" +
        "<p>Press any key to see what actual advice will look like.</p>",
        post_trial_gap: para.post_trial_gap_normal
};

var joint_instructions4 = {
    type: "html-keyboard-response",
    stimulus: "After seeing their advice, you will be asked to rate your confidence again.</p>" +
        "<p>Press any key to see an example trial.</p>", // ask them to click again - change the instructions here
        post_trial_gap: para.post_trial_gap_normal
};

var joint_instructions5 = {
    type: "html-keyboard-response",
    stimulus: "<p>You will now do 6 practice trials to get used to the advice.</p>" +
        "<p>Press any key to begin the practice trials when you are ready.</p>",
        post_trial_gap: para.post_trial_gap_normal
};

var joint_instructions6 = {
    type: "html-keyboard-response",
    stimulus: "<p>This was the last practise trial. </p>" +
        "<p>If you are ready to start the experiment, press any key to begin.</p>",
        post_trial_gap: para.post_trial_gap_normal
};

var joint_demo1 = { // random start random color
    type: "image-slider-response-adv",
    stimulus: 'img/sil.png',
    stimulus_height: function () {
        return window.screen.height / 6
    },
    labels: ['LEFT', 'RIGHT'],
    start: function () {
        return Math.random() * 100
    },
    values: ['100', '80', '60', '60', '80', '100'],
    center: '50',
    vertical_center: true,
    vertical: true,
    slider_width: function () {
        return window.screen.width / 4
    },
    adv: function () {
        return Math.random() * 100
    },
    adv_color: function(){
        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);
        return "rgb("+r+", "+g+", "+b+")"
        console.log(para.advice_time_instruction)
    },
    trial_duration: para.advice_time_instruction, // it now works though I don't know why...
    stimulus_duration: para.advice_time_instruction,
};

var joint_demo2 = { // high start random color
    type: "image-slider-response-adv",
    stimulus: 'img/sil.png',
    stimulus_height: function () {
        return window.screen.height / 6
    },
    labels: ['LEFT', 'RIGHT'],
    start: function () {
        return Math.random() * 100
    },
    values: ['100', '80', '60', '60', '80', '100'],
    center: '50',
    vertical_center: true,
    vertical: true,
    slider_width: function () {
        return window.screen.width / 4
    },
    adv: function () {
        return Math.random() * 20 + 80 // make it larger
    },
    adv_color: function(){
        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);
        return "rgb("+r+", "+g+", "+b+")"
    },
    trial_duration: para.advice_time_instruction,
    stimulus_duration: para.advice_time_instruction,
};

var joint_demo3 = { // random start random color
    type: "image-slider-response-adv",
    stimulus: 'img/sil.png',
    stimulus_height: function () {
        return window.screen.height / 6
    },
    labels: ['LEFT', 'RIGHT'],
    start: function () {
        return Math.random() * 100
    },
    values: ['100', '80', '60', '60', '80', '100'],
    center: '50',
    vertical_center: true,
    vertical: true,
    slider_width: function () {
        return window.screen.width / 4
    },
    adv: function () {
        return Math.random() * 100
    },
    adv_color: function(){ // not sure whether we need a random color heres
        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);
        return "rgb("+r+", "+g+", "+b+")"
    },
    trial_duration: para.advice_time_trial, // these two length should be kept the same though now don't know what is the exact num
    stimulus_duration: para.advice_time_trial,
};