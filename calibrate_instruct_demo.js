// js file for calibration instructions and demos

// Todo: add label for the data (maybe in the main exp)

var calibrate_instructions1 = {
    type: "html-keyboard-response",
    stimulus: "<p>In this experiment, You will be asked to perform a motion judgment task</p>" +
        "<p>For this first task you will perform 240 trials divided over 3 blocks.</p>" +
        "<p>We do this to identify how many dots you need to see to reach a specific performance-level.</p>" +
        "<p>Please keep your eyes fixated on the white fixation dot during the trials. Moving dots will appear around it.</p>" +
        "<p>Press any key when you are ready to an example of the moving dots.</p>",
    //prompt: "Press any key to continue", // I don't think a prmopt is needed - it doesnt appear at the end of the screen
    post_trial_gap: para.post_trial_gap_normal,
    trial_duration: para.trial_duration_normal,
    response_ends_trial: true,
    fixed_duration: 5000,
};

var calibrate_instructions2 = {
    type: "html-keyboard-response",
    stimulus: "<p>In this example, all dots moved to the right.</p>" +
        "<p>Now press any key again to see an example in which all dots move to the left.<p>",
    //prompt: "Press any key to continue",
    post_trial_gap: para.post_trial_gap_normal,
    trial_duration: para.trial_duration_normal,
    response_ends_trial: false
};

var calibrate_instructions3 = {
    type: "html-keyboard-response",
    stimulus: "<p>These examples were both pretty easy because all dots moved in one direction.</p>" +
        "<p>In the experiment, some of the dots will behave randomly, whereas others move to the right or left of the screen.</p>" +
        "<p>Your task is to guess the overall direction of the dots.</p>" +
        "<p>To see what this random motion looks like, press any key again.</p>",
    //prompt: "Press any key to continue",
    post_trial_gap: para.post_trial_gap_normal,
    trial_duration: para.trial_duration_normal,
    response_ends_trial: false
};

var calibrate_instructions4 = {
    type: "html-keyboard-response",
    stimulus: "<p>During the experiment you will have less time to look at the dots.</p>" +
        "<p>Press any key to see what an actual trial will look like.</p>",
    //prompt: "Press any key to continue",
    post_trial_gap: para.post_trial_gap_normal,
    trial_duration: para.trial_duration_normal,
    response_ends_trial: false
};

var calibrate_instructions5 = {
    type: "html-keyboard-response",
    stimulus: "<p>When the dots disappear it is time to respond. You can put your fingers on the 1 and 2 buttons.</p>" +
        "<p>If you think the dots moved to the left, press \"1\". If you think the dots moved to the right, press \"2\"</p>" +
        "<p>We will now show you the moving dots again. Look carefully, and decide whether they are</p>" +
        "<p>moving to the right or to the left. After the dots disappear, press 1 for left or 2 for right.</p>" +
        "<p>Make sure to not respond before the dots disappear</p>" +
        "<p>Press any key when you are ready to try out this example.</p>",
    //prompt: "Press any key to continue",
    post_trial_gap: para.post_trial_gap_normal,
    trial_duration: para.trial_duration_normal,
    response_ends_trial: false
};

var calibrate_instructions6 = {
    type: "html-keyboard-response",
    stimulus: "<p>The correct answer was 2, the dots were moving to the right. When you start the task, you will</p>" +
        "<p>get feedback on your choice. If you choose the correct response, you will see 'correct' on the next screen.</p>"+
        "<p>If you choose the wrong response, you will see 'wrong' on the next screen.</p>"+
        "<p>If you are ready to start the experiment, press any key to begin.",
    //prompt: "Press any key to continue",
    post_trial_gap: para.post_trial_gap_normal,
    trial_duration: para.trial_duration_normal,
    response_ends_trial: false
};

// Todo: speed of rdk?
var calibrate_demo1 = { // 2s, right, unlimited
    type: "rdk",
    post_trial_gap: 0,
    number_of_dots: 200,
    RDK_type: 3,
    coherent_direction: 0,
    coherence: 1,
    trial_duration: 2000, /* if -1, the stimulus will be displayed until a valid response is received*/
    aperture_type: 1,
    response_ends_trial: false, // the trial will not be stopped even if the participant has made a decision early
    move_distance: 3, // analogous to speed. - Question: not sure whether I want to set it so quick
    fixation_cross: true,
    fixation_cross_color: "white",
    border: true,
    border_color: "white",
}

var calibrate_demo2 = { // 2s, left, unlimited
    type: "rdk",
    post_trial_gap: 0,
    number_of_dots: 200,
    RDK_type: 3,
    coherent_direction: 180,
    coherence: 1,
    trial_duration: 2000, /* if -1, the stimulus will be displayed until a valid response is received*/
    aperture_type: 1,
    response_ends_trial: false, // the trial will not be stopped even if the participant has made a decision early
    move_distance: 3, // analogous to speed. - Question: not sure whether I want to set it so quick
    fixation_cross: true,
    fixation_cross_color: "white",
    border: true,
    border_color: "white",
}

var calibrate_demo3 = { //2s right 0.2 coherence
    type: "rdk",
    post_trial_gap: 0,
    number_of_dots: 200,
    RDK_type: 3,
    coherent_direction: 0,
    coherence: 0.2,
    trial_duration: 2000, /* if -1, the stimulus will be displayed until a valid response is received*/
    aperture_type: 1,
    response_ends_trial: false, // the trial will not be stopped even if the participant has made a decision early
    move_distance: 3, // analogous to speed. - Question: not sure whether I want to set it so quick
    fixation_cross: true,
    fixation_cross_color: "white",
    border: true,
    border_color: "white",
}

var calibrate_demo4 = { // 0.3s left 0.3 coherence - not quite sure why 0.3 coherence instead of 0.2?
    type: "rdk",
    post_trial_gap: 0,
    number_of_dots: 200,
    RDK_type: 3,
    coherent_direction: 180,
    coherence: 0.3,
    trial_duration: 300, /* if -1, the stimulus will be displayed until a valid response is received*/
    aperture_type: 1,
    response_ends_trial: false, // the trial will not be stopped even if the participant has made a decision early
    move_distance: 3, // analogous to speed. - Question: not sure whether I want to set it so quick
    fixation_cross: true,
    fixation_cross_color: "white",
    border: true,
    border_color: "white",
}

var calibrate_demo5 = { // fast right 0.3 coherence
    type: "rdk",
    post_trial_gap: 0,
    number_of_dots: 200,
    RDK_type: 3,
    coherent_direction: 0,
    coherence: 0.3,
    trial_duration: 300, /* if -1, the stimulus will be displayed until a valid response is received*/
    aperture_type: 1,
    response_ends_trial: false, // the trial will not be stopped even if the participant has made a decision early
    move_distance: 3, // analogous to speed. - Question: not sure whether I want to set it so quick
    fixation_cross: true,
    fixation_cross_color: "white",
    border: true,
    border_color: "white",
}

var calibrate_demo_decision5 = {
    type: "html-keyboard-response",
    stimulus: function () {
        // not sure I want to use this word or two pictures?
        var left = 'L';
        var right = 'R';
        return "<p>" + left + " or " + right + "?</p>"
    },
    choices: para.choices,
    post_trial_gap: para.post_trial_gap_normal,
    data: { task: 'demo' },
    on_finish: function (data) {
        if (data.key_press == 'j') {
            data.feedback = 'correct';
        } else {
            data.feedback = 'wrong'
        }
    }
}
