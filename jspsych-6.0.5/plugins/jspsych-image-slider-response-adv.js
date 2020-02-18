/**
 * jspsych-image-slider-response-adv
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */

// Changed by Haoxue Feb 2020
// Goal: remove the 'Continue button'
//       add different values
//       add a center indicator/value
//       add vertical lines for these values
// Todo: change its color

jsPsych.plugins['image-slider-response-adv'] = (function () {

  var plugin = {};

  plugin.info = {
    name: 'image-slider-response-adv',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The image to be displayed'
      },
      //
      stimulus_height: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Image height',
        default: null,
        description: 'Set the image height in pixels'
      },
      stimulus_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Image width',
        default: null,
        description: 'Set the image width in pixels'
      },
      maintain_aspect_ratio: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Maintain aspect ratio',
        default: true,
        description: 'Maintain the aspect ratio after setting width or height'
      },
      //
      min: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Min slider',
        default: 0,
        description: 'Sets the minimum value of the slider.'
      },
      max: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Max slider',
        default: 100,
        description: 'Sets the maximum value of the slider',
      },
      start: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Slider starting value',
        default: 50,
        description: 'Sets the starting value of the slider',
      },
      step: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Step',
        default: 1,
        description: 'Sets the step of the slider'
      },
      labels: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Labels',
        default: [],
        array: true,
        description: 'Labels of the slider.',
      },
      //Haoxue's adding
      values: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        default: [],
        pretty_name: 'Values',
        array: true,
        description: 'Value labels of the slider (in the string form).'
      },
      vertical: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Vertical marker',
        default: false,
        description: 'Show vertical markers to facilitate measurement.'
      },
      vertical_color: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Vertical marker (color)',
        default: 'white',
        description: 'Set the color for the vertical marker for all values.'
      },
      center: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Center',
        default: undefined,
        description: 'If true, a 50% will be displayed in the middle of the slider.'
      },
      vertical_center: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Vertical marker (center)',
        default: false,
        description: 'Show vertical marker for the center value.'
      },
      vertical_center_color: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Vertical marker (color)',
        default: 'white',
        description: 'Set the color for the vertical marker for the center value.'
      },
      adv: {
        type: jsPsych.plugins.parameterType.HTML_INT,
        pretty_name: 'Advice',
        default: undefined,
        description: 'The advice of other player.'
      },
      adv_color: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Advice color',
        default: 'red',
        description: 'The color of the advice marker and the advisor background.'
      },

      //end adding
      slider_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Slider width',
        default: null,
        description: 'Width of the slider in pixels.'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default: 'Continue',
        array: false,
        description: 'Label of the button to advance.'
      },
      require_movement: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Require movement',
        default: false,
        description: 'If true, the participant will have to move the slider before continuing.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed below the slider.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: 1000,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show the trial.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when user makes a response.'
      },
    }
  }

  plugin.trial = function (display_element, trial) {

    var html = '<div id="jspsych-image-slider-response-wrapper" style="margin: 100px 0px;">';
    html += '<div id="jspsych-image-slider-response-stimulus">';
    html += '<img src="' + trial.stimulus + '" style= "background-color:'+trial.adv_color+';';
    if (trial.stimulus_height !== null) {
      html += 'height:' + trial.stimulus_height + 'px; '
      if (trial.stimulus_width == null && trial.maintain_aspect_ratio) {
        html += 'width: auto; ';
      }
    }
    if (trial.stimulus_width !== null) {
      html += 'width:' + trial.stimulus_width + 'px; '
      if (trial.stimulus_height == null && trial.maintain_aspect_ratio) {
        html += 'height: auto; ';
      }
    }
    html += '"></img>';



    //
    
    //
    html += '</div>';

    // draw the slider
    html += '<div class="jspsych-image-slider-response-adv-container" style="position:relative; margin: 0 auto 3em auto; '; // try absolute
    if (trial.slider_width !== null) {
      html += 'width:' + trial.slider_width + 'px;';
    }
    html += '">';
    //


    // html += '<div id="jspsych-image-slider-response-adv-stimulus">' + trial.stimulus + '</div>';
    // html += '<div class="jspsych-image-slider-response-adv-container" style="position:relative; margin: 0 auto 3em auto; ';




    // if(trial.slider_width !== null){
    //   html += 'width:'+trial.slider_width+'px;';
    // }
    // html += '">';

    //Haoxue's adding

    // add middle 50
    html += '<br>';
    if (typeof (trial.center) != 'undefined') {
      var width = 100;
      var left_offset = 0; 
      //html += '<div id = "jspsych-image-slider-response-adv-stimulus">' + '50' + '</div>'
      html += '<div style="display: inline-block; position: absolute; left:' + left_offset + '%; text-align: center; width: ' + width + '%;">'; // draw a box and put the text in the middle
      html += '<span style="text-align: center; font-size: 80%;">' + trial.center + '</span>';
      html += '</div>';
    }
    if (trial.vertical_center != false) {
      html += '<hr width = "1" size = "20" style = "display: inline-block; position: absolute; top: 60%; border: 0.5px solid ' + trial.vertical_center_color + '">';
    }
    // add each value
    for (var j = 0; j < trial.values.length; j++) {
      var width = 100 / (trial.values.length - 1);
      var left_offset = (j * (100 / (trial.values.length - 1))) - (width / 2);
      var left_offset_tick = (j * (100 / (trial.values.length - 1)));
      //html += '<div>'+width+' '+left_offset+' '+trial.labels.length+'</div>';
      html += '<div style="display: inline-block; position: absolute; left:' + left_offset + '%; text-align: center; width: ' + width + '%;">'; //absolute means relative to its nearest ancestor
      html += '<span style="text-align: center; font-size: 80%;">' + trial.values[j] + '</span>';
      // Todo: change the size according to the monitor?
      html += '</div>';
      if (trial.vertical != false) {
        html += '<hr width="1" size="20" style="display: inline-block; position: absolute; top: 60%; left:' + left_offset_tick + '%; border: 0.5px solid ' + trial.vertical_color + '">'; // thanks to: https://stackoverflow.com/questions/5605306/is-there-anyway-to-have-an-hr-under-text-with-no-vertical-space
      }
    }

    // add adv 
    var adv_offset = trial.adv;
    // lets try give it id
    html += '<hr id = "test" width = "1" size = "20" style = "display: inline-block; position: absolute; top: 60%; left:' + adv_offset + '%; border: 0.5px solid ' + trial.adv_color + '">';

    html += '<br>'; // can't use <p> not know why but can see this link: https://www.quora.com/What-is-the-difference-between-a-p-tag-and-br-tag


    html += '<input type="range" value="' + trial.start + '" min="' + trial.min + '" max="' + trial.max + '" step="' + trial.step + '" style="width: 100%;" id="jspsych-image-slider-response-adv-response"></input>';
    html += '<div>';

    for (var j = 0; j < trial.labels.length; j++) {
      var width = 100 / (trial.labels.length - 1);
      var left_offset = (j * (100 / (trial.labels.length - 1))) - (width / 2);
      //html += '<div>'+width+' '+left_offset+' '+trial.labels.length+'</div>';
      html += '<div style="display: inline-block; position: absolute; left:' + left_offset + '%; text-align: center; width: ' + width + '%;">';
      html += '<span style="text-align: center; font-size: 80%;">' + trial.labels[j] + '</span>';
      html += '</div>'
    }
    html += '</div>';
    html += '</div>';
    html += '</div>';


    if (trial.prompt !== null) {
      html += trial.prompt;
    }
    // Haoxue editing
    // add submit button
    //html += '<button id="jspsych-image-slider-response-adv-next" class="jspsych-btn" '+ (trial.require_movement ? "disabled" : "") + '>'+trial.button_label+'</button>';
    // end editing
    display_element.innerHTML = html;

    var response = {
      rt: null,
      response: null
    };

    if (trial.require_movement) {
      display_element.querySelector('#jspsych-image-slider-response-adv-response').addEventListener('change', function () {
        display_element.querySelector('#jspsych-image-slider-response-adv-next').disabled = false;
      })
    }


    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-image-slider-response-stimulus').style.visibility = 'hidden';
        display_element.querySelector('#test').style.visibility = 'hidden';
      }, trial.stimulus_duration);

    }

    // // end trial if trial_duration is set
    // if (trial.trial_duration !== null) {
    //   jsPsych.pluginAPI.setTimeout(function() {
    //     end_trial();
    //   }, trial.trial_duration);
    // }





    //html += '<input type="range" value="'+trial.start+'" min="'+trial.min+'" max="'+trial.max+'" step="'+trial.step+'" style="width: 100%;" id="jspsych-image-slider-response-adv-response"></input>';
    // Haoxue editing - future: may need to put the option of adding 'continue' back?
    display_element.querySelector('#jspsych-image-slider-response-adv-response').addEventListener('click', function () {
      // measure response time
      var endTime = performance.now();
      response.rt = endTime - startTime;
      response.response = display_element.querySelector('#jspsych-image-slider-response-adv-response').value;
      // end editing
      if (trial.response_ends_trial) {
        end_trial();
      } else {
        display_element.querySelector('#jspsych-image-slider-response-adv-next').disabled = true;
      }

    });

    function end_trial() {

      jsPsych.pluginAPI.clearAllTimeouts();

      // save data
      var trialdata = {
        "rt": response.rt,
        "response": response.response,
        "stimulus": trial.stimulus
      };

      display_element.innerHTML = '';

      // next trial
      jsPsych.finishTrial(trialdata);
    }

    // if (trial.stimulus_duration !== null) {
    //   jsPsych.pluginAPI.setTimeout(function () {
    //     display_element.querySelector('#jspsych-image-slider-response-adv-stimulus').style.visibility = 'hidden';
    //     display_element.querySelector('#test').style.visibility = 'hidden';
    //   }, trial.stimulus_duration);
    // }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function () {
        end_trial();
      }, trial.trial_duration);
    }

    var startTime = performance.now();
  };

  return plugin;
})();






