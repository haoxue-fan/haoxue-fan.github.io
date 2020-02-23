/* attitude induction phase instruction*/
var attitude_instructions1 = {
    type: "html-keyboard-response",
    stimulus: "<p>In this part of the study, you will play economic games with the two participants</p>"+
    "<p>you have met before. For each interaction, they will choose how much money to give to you.</p>"+
    "<p>Based on their decisions, the money will be distributed accordingly.</p>"+ 
    "<p>At the beginning of each trial, your partner starts off with $1, and you start off with nothing.</p>"+
    "<p>In each interaction, your partner will choose how much of their $1 (if any) to give to you.</p>"+
    "<p>They can choose to give you any portion of their $1.<p>",
    post_trial_gap: para.post_trial_gap_normal,
};

var attitude_instructions2 = {
    type: "html-keyboard-response",
    stimulus: "<p> In each interaction, you will see how much money your partner chose to give to you.</p>"+
    "<p>You will also be asked how you feel about the split of money on a 5-point scale from Bad to Good.</p>"+
    "<p>Please click the item on the scale using your mouse. Once you have made your choice, you can't change it.</p>"+
    "<p>You will be given 2.5 seconds to respond on each trial.</p>"+
    "<p>You will automatically forfeit your money for a given interaction if you do not respond in time.</p>"+
    "<p>At the end of the experiment, a trial will be randomly picked by the computer and add to your total payment.</p>"+
    "<p>Based on that trial, all players will receive the money as determined on that trial.</p>", 
    post_trial_gap: para.post_trial_gap_normal,
};

var attitude_instructions3 = {
    type: "html-keyboard-response",
    stimulus: "<p>You will now do 6 practice trials to get used to the task.</p>" +
        "<p>If you are ready for the practice trials, press any key to begin.</p>",
    post_trial_gap: para.post_trial_gap_normal,
};

var attitude_instructions4 = {
    type: "html-keyboard-response",
    stimulus: "<p>This was the last practise trial.</p>" +
        "</p>If you are ready to start the experiment, press any key to begin.</p>",
    post_trial_gap: para.post_trial_gap_normal
}

