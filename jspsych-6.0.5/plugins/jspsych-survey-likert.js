/**
 * jspsych-survey-likert
 * a jspsych plugin for measuring items on a likert scale
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */

jsPsych.plugins['survey-likert'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'survey-likert',
    description: '',
    parameters: {
      questions: {
        type: jsPsych.plugins.parameterType.COMPLEX,
        array: true,
        pretty_name: 'Questions',
        nested: {
          prompt: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Prompt',
            default: undefined,
            description: 'Questions that are associated with the slider.'
          },
          labels: {
            type: jsPsych.plugins.parameterType.STRING,
            array: true,
            pretty_name: 'Labels',
            default: undefined,
            description: 'Labels to display for individual question.'
          },
          required: {
            type: jsPsych.plugins.parameterType.BOOL,
            pretty_name: 'Required',
            default: false,
            description: 'Makes answering the question required.'
          },
          name: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Question Name',
            default: '',
            description: 'Controls the name of data values associated with this question'
          }
        }
      },
      randomize_question_order: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Randomize Question Order',
        default: false,
        description: 'If true, the order of the questions will be randomized'
      },
      preamble: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Preamble',
        default: null,
        description: 'String to display at top of the page.'
      },
      scale_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Scale width',
        default: null,
        description: 'Width of the likert scales in pixels.'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'Label of the button.'
      },
      // Haoxue
      stimulus: {
        type: jsPsych.plugins.parameterType.IMAGE,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The image to be displayed'
      },
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
      adv_color: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Advice color',
        default: 'red',
        description: 'The color of the advice marker and the advisor background.'
      },
      //
    }
  }

  plugin.trial = function(display_element, trial) {

    if(trial.scale_width !== null){
      var w = trial.scale_width + 'px';
    } else {
      var w = '100%';
    }

    var html = "";
    //Haoxue
    html += '<div id="jspsych-survey-likert-image">';
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
    html += '</div>';

    //
    // inject CSS for trial
    html += '<style id="jspsych-survey-likert-css">';
    html += ".jspsych-survey-likert-statement { display:block; font-size: 16px; padding-top: 40px; margin-bottom:10px; }"+
      ".jspsych-survey-likert-opts { list-style:none; width:"+w+"; margin:auto; padding:0 0 35px; display:block; font-size: 14px; line-height:1.1em; }"+
      ".jspsych-survey-likert-opt-label { line-height: 1.1em; color: #000; }"+ // haoxue: previous the color is #444. this is the color of the labels beneath the scale
      ".jspsych-survey-likert-opts:before { content: ''; position:relative; top:11px; /*left:9.5%;*/ display:block; background-color:#efefef; height:4px; width:100%; }"+
      ".jspsych-survey-likert-opts:last-of-type { border-bottom: 0; }"+
      ".jspsych-survey-likert-opts li { display:inline-block; /*width:19%;*/ text-align:center; vertical-align: top; }"+
      ".jspsych-survey-likert-opts li input[type=radio] { display:block; position:relative; top:0; left:50%; margin-left:-6px; }"
    html += '</style>';

    // show preamble text
    if(trial.preamble !== null){
      html += '<div id="jspsych-survey-likert-preamble" class="jspsych-survey-likert-preamble">'+trial.preamble+'</div>';
    }
    html += '<form id="jspsych-survey-likert-form">';

    // add likert scale questions ///
    // generate question order. this is randomized here as opposed to randomizing the order of trial.questions
    // so that the data are always associated with the same question regardless of order
    var question_order = [];
    for(var i=0; i<trial.questions.length; i++){
      question_order.push(i);
    }
    if(trial.randomize_question_order){
      question_order = jsPsych.randomization.shuffle(question_order);
    }
    
    for (var i = 0; i < trial.questions.length; i++) {
      var question = trial.questions[question_order[i]];
      // add question - Haoxue: it seems that you can have multiple questions here
      html += '<label class="jspsych-survey-likert-statement">' + question.prompt + '</label>';
      // add options
      var width = 100 / question.labels.length;
      var options_string = '<ul class="jspsych-survey-likert-opts" data-name="'+question.name+'" data-radio-group="Q' + question_order[i] + '">';
      for (var j = 0; j < question.labels.length; j++) {
        options_string += '<li style="width:' + width + '%"><input type="radio" name="Q' + question_order[i] + '" value="' + j + '"';
        if(question.required){
          options_string += ' required';
        }
        options_string += '><label class="jspsych-survey-likert-opt-label">' + question.labels[j] + '</label></li>';
      }
      options_string += '</ul>';
      html += options_string;
    }

    // add submit button
    // html += '<input type="submit" id="jspsych-survey-likert-next" class="jspsych-survey-likert jspsych-btn" value="'+trial.button_label+'"></input>';

    html += '</form>'

    display_element.innerHTML = html;


  //   document.getElementById("languages").addEventListener('click', function (event) {
  //     if (event.target && event.target.matches("input[type='radio']")) {
  //         // do something here ...
  //     }
  // });
  display_element.querySelectorAll("[type='radio']").forEach(function(el){ // key changes happen here!
    el.addEventListener('click', function(e){
      // document.querySelectorAll("input, button, a, select").forEach(function(el) {

  // console.log(tmp)
  // ifdisplay_element.querySelector('#jspsych-survey-likert-opts').addEventListener('click', function(e){
    e.preventDefault();
    // measure response time
    var endTime = performance.now();
    var response_time = endTime - startTime;

    // display_element.querySelector('#jspsych-survey-likert-form').addEventListener('submit', function(e){
    //   e.preventDefault();
    //   // measure response time
    //   var endTime = performance.now();
    //   var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      var matches = display_element.querySelectorAll('#jspsych-survey-likert-form .jspsych-survey-likert-opts');
      for(var index = 0; index < matches.length; index++){
        var id = matches[index].dataset['radioGroup'];
        var el = display_element.querySelector('input[name="' + id + '"]:checked');
        if (el === null) {
          var response = "";
        } else {
          var response = parseInt(el.value);
        }
        var obje = {};
        if(matches[index].attributes['data-name'].value !== ''){
          var name = matches[index].attributes['data-name'].value;
        } else {
          var name = id;
        }
        obje[name] = response;
        Object.assign(question_data, obje);
      }

      // save data
      var trial_data = {
        "rt": response_time,
        "responses": JSON.stringify(question_data),
        "question_order": JSON.stringify(question_order)
      };

      display_element.innerHTML = '';

      // next trial
      jsPsych.finishTrial(trial_data);
    });
  });

    var startTime = performance.now();
  };

  return plugin;
})();
