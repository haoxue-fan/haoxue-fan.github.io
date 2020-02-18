// create a global variables to set experiment related parameters
var para = {
    threshold_cal_range: 1, // n trials used to calculate threshold
    calibrate_rep: 2, // repeat calibrate n times (besides 2 burn in trials)
    confidence_rep: 2,
    advisor_accuracy_rep: 2,
    attitude_rep: 2,
    joint_rep: 2,
    choices: ['f', 'j'], // todo: change all into choices
    threshold: 0, // initialize threshold

}

/* ** subject to change ** define test stimuli */
var calibrate_stimuli = [
    { coherent_direction: 0, choices: para.choices, correct_choice: para.choices[1], data: { task: 'calibrate', direction: 'right', wrong_direction: 'left' } }, //right
    { coherent_direction: 180, choices: para.choices, correct_choice: para.choices[0], data: { task: 'calibrate', direction: 'left', wrong_direction: 'right' } }, //left,
];

// var fixed_stimuli = [
//     { coherent_direction: 0, choices: para.choices, correct_choice: para.choices[1], coherence: jsPsych.data.get().select('threshold').mean(),data: { task: 'calibrate', direction: 'right', wrong_direction: 'left' } }, //right
//     { coherent_direction: 180, choices: para.choices, correct_choice: para.choices[0], coherence: jsPsych.data.get().select('threshold').mean(), data: { task: 'calibrate', direction: 'left', wrong_direction: 'right' } }, //left,
// ];

/* Define observation stimuli */
// Todo: advisor's name? What did Oriel do?
// My logic: if we don't want people to get any further information than those we want to give them, maybe we should just use # to refer to them?
// Maybe we can further pair them with different color, use the sihoulette as SF has used?
// If we pair them with color, do we need to ask the participants about their opinion on color??
// But the problem with their stimuli: it seems to be a guy - should we also ask the participant to indicate his/her guessing about the adviser at the end of the exp?
// var advisor_stimuli = [
//     // keep accucary the same level as the participant now
//     // { coherent_direction: 0, choices: ['f', 'j'], correct_choice: 'j', coherence: 0.1, name: 'Victor', accuracy: 0.1, data: { test_part: 'advisor', direction: 'right', wrong_direction: 'left' } }, //right
//     // { coherent_direction: 180, choices: ['f', 'j'], correct_choice: 'j', coherence: 0.1, name: 'Victor', accuracy: 0.1, data: { test_part: 'advisor', direction: 'left', wrong_direction: 'right' } }, //left
//     // { coherent_direction: 0, choices: ['f', 'j'], correct_choice: 'j', coherence: 0.1, name: 'Victoria', accuracy: 0.1, data: { test_part: 'advisor', direction: 'right', wrong_direction: 'left' } }, //right
//     // { coherent_direction: 180, choices: ['f', 'j'], correct_choice: 'j', coherence: 0.1, name: 'Victoria', accuracy: 0.1, data: { test_part: 'advisor', direction: 'left', wrong_direction: 'right' } }, //left

//     { coherent_direction: 0, choices: para.choices, correct_choice: para.choices[1], coherence: jsPsych.data.get().select('threshold').mean(), name: 'Victor', accuracy: jsPsych.data.get().select('accurracy').mean(), data: { test_part: 'advisor', direction: 'right', wrong_direction: 'left' } }, //right
//     { coherent_direction: 180, choices: para.choices, correct_choice: para.choices[0], coherence: jsPsych.data.get().select('threshold').mean(), name: 'Victor', accuracy: jsPsych.data.get().select('accurracy').mean(), data: { test_part: 'advisor', direction: 'left', wrong_direction: 'right' } }, //left
//     { coherent_direction: 0, choices: para.choices, correct_choice: para.choices[1], coherence: jsPsych.data.get().select('threshold').mean(), name: 'Victoria', accuracy: jsPsych.data.get().select('accurracy').mean(), data: { test_part: 'advisor', direction: 'right', wrong_direction: 'left' } }, //right
//     { coherent_direction: 180, choices: para.choices, correct_choice: para.choices[0], coherence: jsPsych.data.get().select('threshold').mean(), name: 'Victoria', accuracy: jsPsych.data.get().select('accurracy').mean(), data: { test_part: 'advisor', direction: 'left', wrong_direction: 'right' } }, //left
// ]