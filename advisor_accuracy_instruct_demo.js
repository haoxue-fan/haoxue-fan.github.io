/* define instructions trial */
// Instructions are under construction (for the observe part)

var observe_instructions1 = {
    type: "html-keyboard-response",
    stimulus: "<p>Now we want to introduce you to two former experiment participants.</p>" +
        "<p>You will interact with them multiple times in the following tasks.</p>" +
        "<p>These two people are randomly drawn from our participant pool.</p>" +
        "<p>We have recorded their behavior during the experiment.</p>"+
        "<p>They will be presented using the same silhouette but with different background colors.</p>"+
        "<p>Press any button to see how these silhouettes look like",
    post_trial_gap: para.post_trial_gap_normal
}

var observe_instructions2 = { // how to calculate it?
    type: "html-keyboard-response",
    stimulus: "<p>In this part of the study, you will observe them play the motion judgment task.</p>" +
        "<p>You have done the same task in the first part of the study.</p>" +
        "<p>In each trial, you will first see random moving dots and see their decisions</p>" +
        "<p>on that specific trial. We want you to pay close attention to their performance </p>" +
        "<p>because you will be asked to estimate their accuracy rate at the end of this part.</p>" +
        "<p>The more accurate you are, the more money you will make.</p>"+
        "<p>Press any key when you are ready to see what their previous decision looks like.</p>",
    post_trial_gap: para.post_trial_gap_normal
}

var observe_instructions3 = {
    type: "html-keyboard-response",
    stimulus: "<p>You will now do 6 practice trials to get used to the task.</p>" +
    "<p>At the end of the practice trials, you will be asked to estimate the accuracy of the two people you have encountered.</p>"+
        "<p>If you are ready for the practice trials, press any key to begin.</p>",
    post_trial_gap: para.post_trial_gap_normal
};

var observe_instructions4 = {
    type: "html-keyboard-response",
    stimulus: "<p>This was the last practise trial.</p>" +
        "</p>If you are ready to start the experiment, press any key to begin.</p>",
    post_trial_gap: para.post_trial_gap_normal
}

// demo1 and demo2 are in the main exp

var advisor_stimuli_demo1 = [
    { name: para.name[0], color: para.color[0]}, 
    { name: para.name[1], color: para.color[1]}, 
]

var advisor_stimuli_demo2 = [ // just leave one with a fake feedback
    { name: para.name[0], color: para.color[0], advisor_answer: 'L', feedback: 'correct'}
]