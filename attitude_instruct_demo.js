/* attitude induction phase instruction*/
var attitude_instructions1 = {
    type: "html-keyboard-response",
    stimulus: "<p>In this part of the experiment, you will have the opportunity to make money by participating in</p>" +
        "<p>multiple economic interactions with the two partners you have encountered in the previous part of the experiment.</p>" +
        "<p>For each interaction, your partner will choose how much money to give to you. Based on their decisions, </p>" +
        "<p>the money will be distributed accordingly. At the beginning of each trial, your partner starts off with $1, and you start off with nothing</p>" +
        "<p>In each interaction, your partner will choose how much of their $1 (if any) to give to you. </p>" +
        "<p>They can choose to give you any portion of their $1. You will see how much money your partner chose to give to you. </p>" +
        "<p>You will also be asked how you feel now on a scale from Negative to Positive</p>" +
        "<p>Press any key to see further information about how the payoff works.</p>",
    post_trial_gap: 500
};

var attitude_instructions2 = {
    type: "html-keyboard-response",
    stimulus: "<p>Payment will work as follows:</p>" +
        "<p>At the end of the experiment, a trial from all the economic interactions will be randomly picked by the computer to be paid out.</p>" +
        "<p>Based on that trial, you and your partner will receive the money as determined on that trial.</p>" +
        "<p>Press any key to see an example trial.</p>",
    post_trial_gap: 500
};

var attitude_demo1;

var attitude_demo = {
    timeline: [attitude_instructions1,
        attitude_instructions2, attitude_demo1]
}

