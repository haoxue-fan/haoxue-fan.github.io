
// js file for confidence instructions and demos


var confidence_instructions1 = {
    type: "html-keyboard-response",
    stimulus: "<p>We will now explain the second task in this experiment.</p>"+
    "<p>The second task consists of 900 trials divided over 9 blocks. There are two changes compared to the first task,</p>"+
    "The first change is that you will no longer get visual feedback after you have pressed 1 or 2.</p>"+
    "<p>The second change is that, instead of getting feedback, you will be asked to rate confidence in the direction judgment.</p>"+
    "<p>On each trial, you will be asked: How sure are you that the dots moved to the left or right?</p>"+
    "<p>You can rate your confidence by left-clicking with the mouse on the confidence scale.</p>"+
    "<p>You can rate higher confidence by choosing positions further away from the centre of the confidence scale.</p>"+
    "Press any key to see the confidence scale, and click on it to continue the instructions.</p>",
    post_trial_gap: parseFloat.post_trial_gap
}

var confidence_instructions2 = {
    type: "html-keyboard-response",
    stimulus: "<p>There are percentages for each confidence level. These percentages are: 100% left, 80% left, 60% left</p>"+
    "<p>60% right, 80% right, 100% right. They correspond to your left or righward judgment,</p>"+
    "<p>in addition to how certain you might be about your leftward or rightward choice.</p>"+
    "<p>You can click anywhere on the confidence scale.</p>"+
    "<p>Press any key to see the confidence scale again and practice clicking on it.</p>",
    post_trial_gap: parseFloat.post_trial_gap
}

var confidence_instructions3 = {
    type: "html-keyboard-response",
    stimulus: "<p>During this task you can earn extra money!</p>"+
    "<p>You can win points by matching your confidence to your performance."+
    "<p>Specifically, the number of points you earn is based on a rule that</p>"+
    "<p>calculates how closely your confidence tracks your performance:</p>"+
    "<p>points = 100 * (1- (accuracy - confidence)^2)</p>"+
    "<p>This formula may appear complicated, but what it means for you is very simple:</p>"+
    "<p>You will get paid the most if you honestly report your best guess about the direction of the dots</p>"+
    "<p>for each decision. You can earn between 0 and 100 points for each trial.</p>"+
    "<p>We will now ask you some questions about how you earn money in this experiment.</p>"+
    "<p>Press any key when you are ready to answer these questions.</p>",
    post_trial_gap: para.post_trial_gap_normal
};
var confidence_instructions4 = {
    type: "html-keyboard-response",
    stimulus: "<p>You will now do 6 practice trials to get used to these new changes.</p>"+
    "<p>If you are ready for the practice trials, press any key to begin.</p>",
    post_trial_gap: para.post_trial_gap_normal
};

var confidence_instructions5 = {
    type: "html-keyboard-response",
    stimulus: "<p>This was the last practise trial.</p>"+
              "</p>If you are ready to start the experiment, press any key to begin.</p>",
              post_trial_gap: para.post_trial_gap_normal
    
}

var confidence_demo1_2 = { // confidence scale
        type: "image-slider-response",
        stimulus: 'img/sil_blank.png',
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
    };

    var confidence_demo3_1_1 = {
        type: "image-slider-response",
        stimulus: 'img/sil_blank.png',
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
        prompt: "<p>Imagine that you have just completed one motion judgment and you were sure it was moving to the right.</p>"+
        "<p>Which confidence rating should you select to maximize your earnings? Click on the scale to select your answer.</p>"
    };

    var confidence_demo3_1_2 = {
        type: "image-slider-response",
        stimulus: 'img/sil_blank.png',
        stimulus_height: function () {
            return window.screen.height / 6
        },
        labels: ['LEFT', 'RIGHT'],
        start: function () {
            return 100 //Math.random() * 100
        },
        values: ['100', '80', '60', '60', '80', '100'],
        center: '50',
        vertical_center: true,
        vertical: true,
        slider_width: function () {
            return window.screen.width / 4
        },
        prompt: "<p>If you are sure that the dots moved to the right, you should select the most extreme right position on the scale.</p>"+
        "<p>Please click at the most extreme right position on the scale to proceed.</p>",
        adv: 100,
        adv_color: 'red'
    };

    var confidence_demo3_2_1 = {
        type: "image-slider-response",
        stimulus: 'img/sil_blank.png',
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
        prompt: "<p>Imagine that you have just completed one motion judgment and you were sure it was moving to the left.</p>"+
        "<p>Which confidence rating should you select to maximize your earnings? Click on the scale to select your answer.</p>"
    };

    var confidence_demo3_2_2 = {
        type: "image-slider-response",
        stimulus: 'img/sil_blank.png',
        stimulus_height: function () {
            return window.screen.height / 6
        },
        labels: ['LEFT', 'RIGHT'],
        start: function () {
            return 0 //Math.random() * 100
        },
        values: ['100', '80', '60', '60', '80', '100'],
        center: '50',
        vertical_center: true,
        vertical: true,
        slider_width: function () {
            return window.screen.width / 4
        },
        prompt: "<p>If you are sure that the dots moved to the left, you should select the most extreme left position on the scale.</p>"+
        "<p>Please click at the most extreme left position on the scale to proceed.</p>",
        adv: 0,
        adv_color: 'red'
    };

    var confidence_demo3_3_1 = {
        type: "image-slider-response",
        stimulus: 'img/sil_blank.png',
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
        prompt: "<p>Imagine that you have just completed one motion judgment, but you are unsure as to whether</p>"+
        "<p>dots were moving to the right or left. Which confidence rating should you select to maximize your earnings?</p>",
    };

    var confidence_demo3_3_2 = {
        type: "image-slider-response",
        stimulus: 'img/sil_blank.png',
        stimulus_height: function () {
            return window.screen.height / 6
        },
        labels: ['LEFT', 'RIGHT'],
        start: function () {
            return 50 //Math.random() * 100
        },
        values: ['100', '80', '60', '60', '80', '100'],
        center: '50',
        vertical_center: true,
        vertical: true,
        slider_width: function () {
            return window.screen.width / 4
        },
        prompt: "<p>If you are not sure about being correct or incorrect you should select a location in between.</p>"+
        "<p>Please click at any place between the extreme left and right to proceed.</p>",
        // not showing adv because anywhere between will be feasible
    };

    var confidence_demo4 = { // rdk. 3 coherence levels (.Mguess in matlab code)
            type: "rdk",
            post_trial_gap: 0,
            number_of_dots: 200,
            RDK_type: 3,
            choices: jsPsych.timelineVariable('choices'),
            correct_choice: jsPsych.timelineVariable('correct_choice'),
            coherent_direction: jsPsych.timelineVariable('coherent_direction'),
            coherence: jsPsych.timelineVariable('coherence'),
            trial_duration: 300, /* if -1, the stimulus will be displayed until a valid response is received*/
            aperture_type: 1,
            response_ends_trial: false, // the trial will not be stopped even if the participant has made a decision early
            move_distance: 3, // analogous to speed. - Question: not sure whether I want to set it so quick
            data: jsPsych.timelineVariable('data'),
                    fixation_cross: true,
            fixation_cross_color: "white",
            border: true,
            border_color: "white",
        };
