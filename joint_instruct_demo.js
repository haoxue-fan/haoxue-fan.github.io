/* joint decision phase */

// need further change
var joint_instructions1 = {
    type: "html-keyboard-response",
    stimulus: "<p>You will now begin the final task, in which you will perform 360 trials divided over 4 blocks.</p>" +
        "<p>Every trial consists of dots moving to the left or right. Press 'f' for left and 'j' for right.</p>" +
        "<p>Make sure to not think about it for too long, because you only have 1.5 seconds to decide.</p>" +
        "<p>After making your decision, you will also be asked to report your confidence.</p>" +
        "<p>Remember the participants you encountered in the previous economic game? We have recorded their decision on the same trial. </p>" +
        "<p>You can use that information as advice to adjust your initial response.</p>" +
        "<p>Press any key when you are ready to see what advice looks like.</p>",
    post_trial_gap: 500
};

// Todo: how to explain their varying confidence?
var joint_instructions2 = {
    type: "html-keyboard-response",
    stimulus: "<p>Recall that the accuracy of both Adviser A and Adviser B (need change here) are both (something)</p>" +
        "<p>In other words, they are same accurate in determining the direction of the dots. </p>" +
        "<p>However, the confidence of the advice can vary across trials.</p>" +
        "<p>Press any key to see an example of a relatively confident decision.</p>",
    post_trial_gap: 500
};

var joint_instructions3 = {
    type: "html-keyboard-response",
    stimulus: "<p>During the experiment you will have less time to look at the advice.</p>" +
        "<p>Press any key to see what actual advice will look like.</p>",
    post_trial_gap: 500
};

var joint_instructions4 = {
    type: "html-keyboard-response",
    stimulus: "After seeing their advice, you will be asked to rate your confidence again.</p>" +
        "<p>Press any key to see an example trial.</p>",
    post_trial_gap: 500
};

var joint_instructions5 = {
    type: "html-keyboard-response",
    stimulus: "<p>You will now do 6 practice trials to get used to the advice.</p>" +
        "<p>Press any key to begin the practise trials when you are ready.</p>",
    post_trial_gap: 500
};

var joint_instructions6 = {
    type: "html-keyboard-response",
    stimulus: "<p>This was the last practise trial. </p>" +
        "<p>If you are ready to start the experiment, press any key to begin.</p>",
    post_trial_gap: 500
};

// to be defined
var joint_demo1;
var joint_demo2;
var joint_demo3;
var joint_demo4;
var joint_demo5;