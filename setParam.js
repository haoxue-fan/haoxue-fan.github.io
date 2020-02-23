// create a global variables to set experiment related parameters
var para = {
    threshold_cal_range: 5, // n trials used to calculate threshold
    calibrate_rep: 2, // repeat calibrate n times (besides 2 burn in trials)
    confidence_rep: 2,
    advisor_accuracy_rep: 2,
    attitude_rep: 2,
    joint_rep: 2,
    choices: ['1', '2'], // todo: change all into choices
    threshold: 0, // initialize threshold
    accuracy: 1, // initialize accuracy
    accuracy_warmup: 0.5, // used for instruction
    post_trial_gap_normal: 500,
    trial_duration_normal: 2000,
    advice_time_instruction: 3000,
    advice_time_trial: 3000,
    coherence_practice: [0.08, 0.16, 0.32],
    color: ['yellow', 'red'],
    name: ['Victor', 'Victoria'],
    color_feedback: ['blue', 'red'], // feedback wrong and correct

}

/* ** subject to change ** define test stimuli */
var calibrate_stimuli = [
    { coherent_direction: 0, choices: para.choices, correct_choice: para.choices[1], data: { task: 'calibrate', direction: 'right', wrong_direction: 'left' } }, //right
    { coherent_direction: 180, choices: para.choices, correct_choice: para.choices[0], data: { task: 'calibrate', direction: 'left', wrong_direction: 'right' } }, //left,
];

var practice_stimuli = [
    {coherent_direction: 0, choices: para.choices, correct_choice: para.choices[1], coherence: para.coherence_practice[0], data: {task: 'practice', direction: 'right', wrong_direction: 'left'}},
    {coherent_direction: 0, choices: para.choices, correct_choice: para.choices[1], coherence: para.coherence_practice[1], data: {task: 'practice', direction: 'right', wrong_direction: 'left'}},
    {coherent_direction: 0, choices: para.choices, correct_choice: para.choices[1], coherence: para.coherence_practice[2], data: {task: 'practice', direction: 'right', wrong_direction: 'left'}},
    {coherent_direction: 180, choices: para.choices, correct_choice: para.choices[0], coherence: para.coherence_practice[0], data: {task: 'practice', direction: 'left', wrong_direction: 'right'}},
    {coherent_direction: 180, choices: para.choices, correct_choice: para.choices[0], coherence: para.coherence_practice[1], data: {task: 'practice', direction: 'left', wrong_direction: 'right'}},
    {coherent_direction: 180, choices: para.choices, correct_choice: para.choices[0], coherence: para.coherence_practice[2], data: {task: 'practice', direction: 'left', wrong_direction: 'right'}},
];

/* Define observation stimuli */
// Todo: advisor's name? What did Oriel do?
// My logic: if we don't want people to get any further information than those we want to give them, maybe we should just use # to refer to them?
// Maybe we can further pair them with different color, use the sihoulette as SF has used?
// If we pair them with color, do we need to ask the participants about their opinion on color??
// But the problem with their stimuli: it seems to be a guy - should we also ask the participant to indicate his/her guessing about the adviser at the end of the exp?
